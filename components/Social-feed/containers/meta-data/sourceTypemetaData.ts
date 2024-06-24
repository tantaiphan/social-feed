import { DataSourceEnum } from "../../core/libs/contants";
import { PropMetas, SocialFeedModel } from "../../core/models/MetaType";
import { YoutubeSourceType } from "../props/SourceType/components/youtubeSourceType";

export const SourceTypeProps = (): PropMetas<SocialFeedModel> => {
  return {
    apiKey: {
      type: "string",
      required: true,
      displayName: "Google API key",
      hidden: (props) => {
        if (props.dataSoures?.dataSource === DataSourceEnum.YouTube) {
          return false;
        }
        return true;
      },
    },

    youtubeSourceType: {
      type: "custom",
      displayName: "Youtube Info",
      required: true,
      control: YoutubeSourceType,
      hidden: (props) => {
        if (props.dataSoures?.dataSource === DataSourceEnum.YouTube) {
          return false;
        }
        return true;
      },
    },
  };
};
