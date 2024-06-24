import { usePlasmicQueryData } from "@plasmicapp/loader-nextjs";
import React, { useEffect, useState } from "react";
import { DataSocialFeedModel, SocialFeedModel } from "../core/models/MetaType";
import { UrlApi, performFetch } from "../core/libs/ultils";
import { DataSourceEnum } from "../core/libs/contants";
import { GenericFeedShell } from "./GenericFeedShell";

export const DataFetcher = (props: SocialFeedModel) => {
  const {
    url,
    method,
    body,
    headers,
    queryKey,
    dataSoures,
    sourceType,
    youtubeSourceType,
  } = props;
  const fetchProps: DataSocialFeedModel = {
    url,
    method,
    body,
    headers,
    dataSoures,
    sourceType,
  };
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    setToken(dataSoures?.info?.facebookInfo?.accessToken);
  }, [dataSoures]);

  const result: any = usePlasmicQueryData(
    queryKey ||
      JSON.stringify({
        type: "DataFetcher",
        ...fetchProps,
        url: UrlApi(dataSoures?.dataSource, token, url || ""),
      }),
    () =>
      performFetch({
        ...fetchProps,
        url: UrlApi(dataSoures?.dataSource, token, url || ""),
        onGetNewToken: onGetRefreshToken,
      })
  );

  const data = () => {
    switch (dataSoures?.dataSource) {
      case DataSourceEnum.YouTube: {
        return youtubeSourceType?.data;
      }
      case DataSourceEnum.Facebook:
      default: {
        return result;
      }
    }
  };

  const onGetRefreshToken = () => {
    setIsExpired(true);
  };

  return (
    <>
      <div
        className={props.className}
        style={{
          position: "relative",
        }}
      >
        <GenericFeedShell result={data()} componentProps={props} {...props} />
      </div>
    </>
  );
};
