import {
  PlaylistYouTubeDetailModel,
  PlaylistYouTubeRes,
} from "../models/youtube";
import { fetchData } from "./server";

export const onGetPlaylist = async (
  playlistId: string,
  apiKey: string,
  onSuccess?: (val: PlaylistYouTubeRes) => void,
  onFailed?: () => void
) => {
  try {
    const res: any = await fetchData({
      url: "https://www.googleapis.com/youtube/v3/playlistItems?",
      method: "GET",
      params: {
        part: "snippet,contentDetails",
        playlistId: playlistId,
        maxResults: "100",
        key: apiKey,
      },
    });

    const data: PlaylistYouTubeRes = { ...res };

    const item: PlaylistYouTubeDetailModel[] = [];

    const temp = await data.items.map(async (val) => {
      if (val.contentDetails && val.contentDetails.videoId) {
        const res: any = await fetchData({
          url: "https://www.googleapis.com/youtube/v3/videos?",
          method: "GET",
          params: {
            part: "statistics",
            id: val.contentDetails.videoId,
            key: apiKey,
          },
        });
        const statistics = res.items[0].statistics;
        const likes = statistics.likeCount;
        const comments = statistics.commentCount;
        return {
          ...val,
          likeCount: Number(likes || 0),
          commentCount: Number(comments || 0),
        };
      }
    });

    Promise.all(temp).then((val) => {
      onSuccess?.({ ...res, items: val });
    });

    // onSuccess?.({ ...res });
  } catch (error) {
    onFailed?.();
  }
};

export const onGetChannelInfoWithVariantName = async (
  channelName: string,
  apiKey: string,
  onSuccess?: (
    channelId: string,
    playlistId: string,
    channelAvatar?: string
  ) => void,
  onFailed?: () => void
) => {
  try {
    const res: any = await fetchData({
      url: `https://www.googleapis.com/youtube/v3/channels?`,
      method: "GET",
      params: {
        part: "id, snippet, contentDetails",
        forHandle: channelName,
        key: apiKey,
      },
    });

    const channelId = res?.items[0].id;
    const playlistId = res.items[0].contentDetails.relatedPlaylists.uploads;
    const channelAvatar = res.items[0]?.snippet?.thumbnails?.default?.url;

    onSuccess?.(channelId, playlistId, channelAvatar);
  } catch (error) {
    onFailed?.();
  }
};

export const onGetChannelInfoWithId = async (
  id: string,
  apiKey: string,
  onSuccess?: (channelId: string, channelAvatar?: string) => void,
  onFailed?: () => void
) => {
  try {
    const res: any = await fetchData({
      url: `https://www.googleapis.com/youtube/v3/channels?`,
      method: "GET",
      params: {
        part: "id, snippet, contentDetails",
        id: id,
        key: apiKey,
      },
    });

    const channelId = res?.items[0].id;
    const channelAvatar = res.items[0]?.snippet?.thumbnails?.default?.url;

    onSuccess?.(channelId, channelAvatar);
  } catch (error) {
    onFailed?.();
  }
};

export const onGetVideoDetailInfo = async (
  videoId: string,
  apiKey: string,
  onSuccess?: (likeCount: number, commentCount: number) => void,
  onFailed?: () => void
) => {
  try {
    const res: any = await fetchData({
      url: "https://www.googleapis.com/youtube/v3/videos?",
      method: "GET",
      params: {
        part: "statistics",
        id: videoId,
        key: apiKey,
      },
    });
    const statistics = res.items[0].statistics;
    const likes = statistics.likeCount;
    const comments = statistics.commentCount;
    onSuccess?.(likes, comments);
  } catch (error) {
    onFailed?.();
  }
};
