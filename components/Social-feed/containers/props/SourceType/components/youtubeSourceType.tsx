/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  DataSourceEnum,
  YoutubesourceTypeEnum,
} from "@/components/Social-feed/core/libs/contants";
import {
  extractChannelId,
  extractPlaylistId,
  isEmpty,
} from "@/components/Social-feed/core/libs/ultils";
import { convertResposeYoutube } from "@/components/Social-feed/core/libs/youtube.response";
import {
  SocialFeedModel,
  YoutubeType,
} from "@/components/Social-feed/core/models/MetaType";

import {
  onGetChannelInfoWithId,
  onGetChannelInfoWithVariantName,
  onGetPlaylist,
} from "@/components/Social-feed/core/servers/youtube.server";
import { styleSourceType } from "@/components/Social-feed/styles/source-type/sourceType";
import { useEffect, useState } from "react";

interface ComponentProps {
  componentProps: SocialFeedModel;
  updateValue: (val: YoutubeType) => void;
  value: YoutubeType;
}

export const YoutubeSourceType = ({
  componentProps,
  updateValue,
  value,
}: ComponentProps) => {
  const [sourceType, setSourceType] = useState<YoutubesourceTypeEnum>(
    YoutubesourceTypeEnum.Channel
  );
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);

  console.log(url);

  useEffect(() => {
    if (value) {
      setUrl(value?.url);

      if (value?.sourceType) {
        setSourceType(value?.sourceType || YoutubesourceTypeEnum.Channel);
      } else {
        setSourceType(YoutubesourceTypeEnum.Channel);
        updateValue({
          ...value,
          sourceType: YoutubesourceTypeEnum.Channel,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (componentProps.apiKey !== apiKey) {
      setApiKey(componentProps.apiKey);
    }
  });

  useEffect(() => {
    if (isEmpty(url) || isEmpty(apiKey)) {
      return;
    }

    ongetChannelData();
  }, [apiKey, sourceType, url]);

  const onChangeSourceType = (val: YoutubesourceTypeEnum) => {
    setSourceType(val);
    setUrl("");
    updateValue({
      sourceType: val,
      url: "",
      data: value?.data,
      youtubeInfo: value?.youtubeInfo,
    });
  };

  const onUpdateUrl = (val: string | undefined) => {
    updateValue({
      sourceType: sourceType || YoutubesourceTypeEnum.Channel,
      url: val || "",
      youtubeInfo: value?.youtubeInfo,
      data: value?.data,
    });
  };

  const ongetChannelData = () => {
    if (
      componentProps?.apiKey &&
      componentProps.dataSoures?.dataSource !== DataSourceEnum.YouTube
    ) {
      return;
    }

    if (sourceType === YoutubesourceTypeEnum.Channel) {
      onGetChannelInfoWithVariantName(
        extractChannelId(url || ""),
        componentProps.apiKey || "",
        (chanId, playId, channelAvatar) => {
          onGetPlaylistData(playId, channelAvatar);
        }
      );
    } else if (sourceType === YoutubesourceTypeEnum.Playlist) {
      onGetPlaylistData(extractPlaylistId(url || ""), undefined, true);
    }
  };

  const onGetPlaylistData = (
    id: string,
    channelAvatar?: string,
    getChannel?: boolean
  ) => {
    if (id) {
      onGetPlaylist(id, componentProps.apiKey || "", async (val) => {
        let avatar = channelAvatar;
        const channelId = val.items?.[0]?.snippet?.channelId;
        const channelTitle = val.items?.[0]?.snippet?.channelTitle;
        if (getChannel && channelId) {
          await onGetChannelInfoWithId(
            channelId,
            apiKey || "",
            (chanId, avatarUrl) => {
              updateValue({
                sourceType: sourceType || YoutubesourceTypeEnum.Channel,
                url: url || "",
                data: convertResposeYoutube(val, avatarUrl),
                youtubeInfo: {
                  id: channelId,
                  channelName: channelTitle,
                  avatar: avatarUrl || "",
                },
              });

              console.log("else youtubeInfo__", {
                id: channelId,
                channelName: channelTitle,
                avatar: avatarUrl || "",
              });
            }
          );
        } else {
          updateValue({
            sourceType: sourceType || YoutubesourceTypeEnum.Channel,
            url: url || "",
            data: convertResposeYoutube(val, channelAvatar),
            youtubeInfo: {
              id: channelId,
              channelName: channelTitle,
              avatar: channelAvatar || "",
            },
          });
        }
      });
    }
  };

  const validUrl = (val: string | undefined) => {
    switch (sourceType) {
      case YoutubesourceTypeEnum.Channel: {
        return extractChannelId(val || "") !== "";
      }
      default: {
        return extractPlaylistId(val || "");
      }
    }
  };

  const errorMessage = () => {
    switch (sourceType) {
      case YoutubesourceTypeEnum.Channel: {
        return "Invalid YouTube Playlist URL";
      }
      default: {
        return "Invalid YouTube Channel URL";
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="sourceType"
              value="channel"
              checked={sourceType === YoutubesourceTypeEnum.Channel}
              onChange={() => onChangeSourceType(YoutubesourceTypeEnum.Channel)}
            />
            {YoutubesourceTypeEnum.Channel}
          </label>
          <label>
            <input
              type="radio"
              name="sourceType"
              value={YoutubesourceTypeEnum.Playlist}
              checked={sourceType === YoutubesourceTypeEnum.Playlist}
              onChange={() =>
                onChangeSourceType(YoutubesourceTypeEnum.Playlist)
              }
            />
            {YoutubesourceTypeEnum.Playlist}
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="YouTube Channel URL..."
            value={url}
            onChange={(val) => {
              setUrl(val.target.value);
            }}
            onBlur={(value) => {
              if (validUrl(value.target.value)) {
                onUpdateUrl(value.target.value);
              }
            }}
          />
          {url && !validUrl(url) && (
            <p
              style={{
                color: "red",
              }}
            >
              {errorMessage()}
            </p>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: styleSourceType }} />
    </>
  );
};
