import {
  CustomError,
  DataSocialFeedModel,
  FilterModel,
  dataSourceModel,
} from "../models/MetaType";
import { PostDataModel } from "../models/post";
import { DataSourceEnum } from "./contants";
import { convertResposeFacebook } from "./facebook.response";

export const extractChannelId = (url: string) => {
  console.log("url__", url);
  const arr = url?.split("@");

  return arr?.length > 1 ? `@${arr[1]}` : "";
};

export const extractPlaylistId = (url: string) => {
  const arr = url.split("list=");
  return arr?.length > 1 ? `${arr[1]}` : "";
};

export const checkSizeCorrect = (val: string) => {
  const sizeUnits = [
    "px",
    "pt",
    "in",
    "em",
    "rem",
    "%",
    "vw",
    "vh",
    "vmin",
    "vmax",
  ];
  if (val && sizeUnits.includes(val)) {
    return true;
  }
  return false;
};

export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === "" ||
    value === null ||
    value?.toString() === "{}" ||
    value?.toString() === "" ||
    value?.toString()?.toLowerCase() === "null" ||
    value === "undefined"
  );
};

export const onFilterDataByKeyWord = (
  arr: PostDataModel[],
  keyword: string | undefined
): PostDataModel[] => {
  if (isEmpty(keyword)) {
    return arr;
  }
  return arr.filter((val) =>
    val.description?.toUpperCase()?.includes(keyword?.toUpperCase() || "")
  );
};

export const onFilterDataToDate = (
  arr: PostDataModel[],
  startDate: string | undefined
) => {
  if (isEmpty(startDate)) {
    return arr;
  }
  return arr.filter((val: PostDataModel) => {
    return (
      new Date(val.createAt).getTime() >=
      new Date(startDate || "").getTime()
    );
  });
};

export const performFetch = async ({
  url,
  method,
  body,
  headers,
  dataSoures,
  onGetNewToken,
}: DataSocialFeedModel & { onGetNewToken: () => void }) => {
  if (!url) {
    throw new Error("Please specify a URL to fetch");
  }

  const response = await fetch(url, {
    method,
    headers,
    body:
      body === undefined
        ? body
        : typeof body === "string"
        ? body
        : JSON.stringify(body),
  });

  const text = await response.text();
  let json: Record<string, any> = { text };

  try {
    json = JSON.parse(text);
  } catch (e) {
    json = { text };
  }

  // @see https://swr.vercel.app/docs/error-handling
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!response.ok) {
    if (response?.status === 400) {
      onGetNewToken();
    }
    const error = new Error(response.statusText) as CustomError;
    // Attach extra info to the error object.
    error.info = json;
    error.status = response.status;
    throw error;
  }

  switch (dataSoures?.dataSource) {
    case DataSourceEnum.Facebook: {
      return convertResposeFacebook(json);
    }
    default: {
      return json;
    }
  }
};

export const UrlApi = (
  type: DataSourceEnum,
  token: string | undefined,
  url: string | undefined
) => {
  switch (type) {
    case DataSourceEnum.Facebook: {
      const feedUrl = "https://graph.facebook.com/v20.0/me/feed";
      const fields: string =
        "created_time,permalink_url,from,message,attachments{media,media_type,type,title,description,url,subattachments{media,media_type,type,title,description,url}}";
      const params = new URLSearchParams({
        fields: fields,
      }).toString();

      return `${feedUrl}?${params}&access_token=${token}`;
    }

    default: {
      return url;
    }
  }
};
