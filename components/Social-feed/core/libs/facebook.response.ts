import { FaceBookPostDataModel } from "../models/facebook";
import { PostDataModel, PostModel } from "../models/post";
import { DataSourceEnum } from "./contants";

export const convertResposeFacebook = (res: any) => {
  const data: FaceBookPostDataModel[] = [...(res?.data || [])];
  const paging = res?.paging;

  const response: PostModel = {
    data: data.map((val) => {
      return {
        itemtype: DataSourceEnum.Facebook,
        id: val.id,
        description: val.message,
        channelTitle: val.name,
        imgUrl: val.attachments?.data?.[0]?.media?.image?.src || "",
        createAt: "",
        link: "",
      };
    }),
  };

  return response;
};
