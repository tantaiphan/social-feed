import { PostDataModel, PostModel } from "../models/post";
import { PlaylistYouTubeRes } from "../models/youtube";
import { DataSourceEnum } from "./contants";

export const convertResposeYoutube = (
  res: PlaylistYouTubeRes,
  channelAvatar?: string
) => {
  const items: PostDataModel[] = [];
console.log(2222);
console.log(res);
console.log(2222);
  res.items.map((val) => {
    items.push({
      itemtype: DataSourceEnum.YouTube,
      id: val.id,
      description: val.snippet.title,
      channelTitle: val.snippet.channelTitle,
      imgUrl: val.snippet.thumbnails.standard.url,
      createAt: val.snippet.publishedAt,
      link: "https://www.youtube.com/watch?v=" + val.contentDetails?.videoId,
      numberLike: val.likeCount,
      numberComment: val.commentCount,
      channelAvatar: channelAvatar,
    });
  });

  const response: PostModel = {
    data: items,
  };

  return response;
};
