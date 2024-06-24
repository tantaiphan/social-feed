import { PropMetas, SocialFeedModel } from "../../core/models/MetaType";
import { FilterProps } from "../props/filterProps/filterProps";
import { ItemFeedSettings } from "../props/itemFeedSettings/components/itemFeedSetting";
import { SocialListProp } from "../props/layoutProps/layoutProps";

export const LayoutMetaProps = (): PropMetas<SocialFeedModel> => {
  return {
    layout: {
      type: "custom",
      control: SocialListProp,
    },
    itemSettings: {
      type: "custom",
      control: ItemFeedSettings,
    },

    filter: {
      type: "custom",
      displayName: "Keyword",
      control: FilterProps,
    },

    startDate: {
      type: "dateString",
      displayName: "Start date",
      
    },
    endDate: {
      type: "string",
      displayName: "Start date",
    },
  };
};
