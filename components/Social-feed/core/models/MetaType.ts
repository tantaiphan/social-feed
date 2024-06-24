import { ReactNode } from "react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import { info } from "console";
import {
  DataSourceEnum,
  LayoutEnum,
  YoutubesourceTypeEnum,
} from "../libs/contants";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { PostModel } from "./post";

export interface DataSocialFeedModel {
  url?: string;
  method?: string;
  body?: string | object;
  headers?: Record<string, string>;
  dataSoures: dataSourceModel;
  sourceType: string;
  refreshToken?: string;
}

export interface GeneralModel {
  children?: ReactNode;
  loadingDisplay?: ReactNode;
  errorDisplay?: ReactNode;
  className?: string;
}

export interface SocialFeedModel
  extends DataSocialFeedModel,
    GeneralModel,
    SourceTypeModel,
    SocialListMetaDataProp {
  queryKey?: string;
}

export type PropMetas<P> = ComponentMeta<P>["props"];

export type CustomError = Error & {
  info: Record<string, any>;
  status: number;
};

export class InfoModel {
  facebookInfo: ReactFacebookLoginInfo | undefined;
  constructor() {
    this.facebookInfo = undefined;
  }
}

export class dataSourceModel {
  dataSource: DataSourceEnum;
  info: InfoModel;
  constructor() {
    this.dataSource = DataSourceEnum.Facebook;
    this.info = new InfoModel();
  }
}

export interface SourceTypeModel {
  youtubeSourceType?: YoutubeType;
  apiKey?: string;
}

export interface YoutubeType {
  sourceType: YoutubesourceTypeEnum;
  url: string;
  youtubeInfo: YoutubeInfo;
  data: PostModel;
}

export interface YoutubeInfo {
  id: string;
  avatar: string;
  channelName: string;
}

export interface SocialListMetaDataProp {
  layout?: LayoutModel;
  itemSettings?: ItemFeedSettingModel;
  filter?: FilterModel;
  startDate?: string;
}

export interface LayoutModel {
  layoutType: LayoutEnum;
  gridLayoutSetting?: GridLayoutSettingModel;
  listLayoutSetting?: ListLayoutSettingModel;
  carouselLayoutSetting?: CarouselLayoutSettingModel;
  sliderLayoutSetting?: SliderLayoutSettingModel;
}

export interface GridLayoutSettingModel {
  desktopColumn?: number;
  mobileColumn?: number;
  desktopRows?: number;
  mobileRows?: number;
  itemSpace?: number;
  numberItems?: number;
}

export interface ListLayoutSettingModel {
  itemSpace?: number;
  numberItems?: number;
}

export interface CarouselLayoutSettingModel {
  desktopColumn?: number;
  mobileColumn?: number;
  itemSpace?: number;
  showDot?: boolean;
  showNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayTime?: number;
  numberItems?: number;
}

export interface SliderLayoutSettingModel {
  itemSpace?: number;
  showDot?: boolean;
  showNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayTime?: number;
  swipe?: boolean;
  numberItems?: number;
}

export interface FilterModel {
  keyword?: string;
}
export type alignType = 'center' | 'left' | 'right';

export interface ItemFeedSettingModel {
  fontSize?: number;
  textColor?: string;
  backgroundColor?: string;
  cornerRadius?: number;
  textAlign?: alignType;
  reverse?: boolean;
}
