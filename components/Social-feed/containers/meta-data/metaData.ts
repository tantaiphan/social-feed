import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  SocialFeedModel,
  DataSocialFeedModel,
  GeneralModel,
  PropMetas,
} from "../../core/models/MetaType";
import { DataSourceEnum } from "../../core/libs/contants";
import { DataSourceProp } from "../props/datasourceProps/DataSourceProp";
import { SourceTypeProps } from "./sourceTypemetaData";
import {
  descriptionMetaData,
  defaultValueMetaData,
} from "../../core/libs/data/defaultData";
import { LayoutMetaProps } from "./layoutMetaData";
import { UrlProp } from "../props/urlProps/UrlProp";

export const genericFetcherPropsMeta: PropMetas<GeneralModel> = {
  children: "slot",
  loadingDisplay: { type: "slot", defaultValue: "Loading..." },
  errorDisplay: { type: "slot", defaultValue: "Error fetching data" },
};

export const mkFetchProps = (
  defaultUrl: string,
  defaultMethod: string
): PropMetas<DataSocialFeedModel & { queryKey?: string }> => {
  return {
    dataSoures: {
      type: "custom",
      required: true,
      control: DataSourceProp,
    },
    ...SourceTypeProps(),

    url: {
      type: "custom",
      control: (props) => {
        return UrlProp({
          componentProps: props.componentProps,
          value: props.value,
          updateValue: props.updateValue,
          defaultValue: defaultUrl,
        });
      },
      hidden: (props) => {
        if (
          props?.dataSoures &&
          props?.dataSoures?.dataSource === DataSourceEnum.More
        ) {
          return false;
        }
        return true;
      },
    },

    method: {
      type: "choice",
      options: ["GET", "DELETE", "POST", "PUT"],
      defaultValue: defaultMethod,
      description: descriptionMetaData.method,
      hidden: (props) => {
        if (
          props?.dataSoures &&
          props?.dataSoures?.dataSource === DataSourceEnum.More
        ) {
          return false;
        }
        return true;
      },
    },

    headers: {
      type: "object",
      defaultValue: defaultValueMetaData.headers,
      description: descriptionMetaData.headers,
      hidden: (props) => {
        if (
          props?.dataSoures &&
          props?.dataSoures?.dataSource === DataSourceEnum.More
        ) {
          return false;
        }
        return true;
      },
    },

    queryKey: {
      type: "string",
      invariantable: true,
      description: descriptionMetaData.queryKey,
      hidden: (props) => {
        if (
          props?.dataSoures &&
          props?.dataSoures?.dataSource === DataSourceEnum.More
        ) {
          return false;
        }
        return true;
      },
    },
  };
};

export const dataFetcherMeta: ComponentMeta<SocialFeedModel> = {
  name: "Social-feed-data",
  displayName: "Social Feed data",
  importName: "SocialFeedData",
  importPath: "@plasmicpkgs/plasmic-query",
  providesData: true,
  props: {
    ...(mkFetchProps(
      defaultValueMetaData.url,
      defaultValueMetaData.method
    ) as any),
    body: {
      type: "object",
      description: descriptionMetaData.body,

      hidden: (props) => {
        if (
          props?.dataSoures &&
          props?.dataSoures?.dataSource === DataSourceEnum.More
        ) {
          return false;
        }
        return true;
      },
    },
    ...(genericFetcherPropsMeta as any),
    ...(LayoutMetaProps() as any),
  },
  defaultStyles: {
    maxWidth: "960px",
    minHeight: "50px !important",
    margin: "0 auto",
  },

  description: descriptionMetaData.dataFetcherMeta,
};
