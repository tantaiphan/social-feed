import { LayoutModel } from "../../models/MetaType";
import { LayoutEnum } from "../contants";

export const descriptionMetaData = {
  dataName: "Variable name to store the fetched data Social Feed",
  errorName: "Variable name to store the fetch error in",
  previewSpinner: "Force preview the loading state",
  previewErrorDisplay: "Force preview the error display",
  noLayout:
    "When set, CMS Data Loader will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
  url: "Where to fetch the data from",
  method: "Method to use when fetching",
  headers: "Request headers (as JSON object) to send",
  queryKey:
    "A globally unique ID for this query, used for invalidating queries",
  body: "JSON object to be sent in the request body",
  dataFetcherMeta:
    "These fetches may be run client-side (from the browser). Use [Data Queries](https://docs.plasmic.app/learn/http-api-integration/) for authenticated queries or CORS.",
};

export const defaultValueMetaData = {
  dataName: "SocialFeedData",
  errorName: "fetchDataError",
  url: "https://api.github.com/users/plasmicapp/repos",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
  },
};

export const defaultLayout: LayoutModel = {
  layoutType: LayoutEnum.Grid,
  gridLayoutSetting: {
    desktopColumn: 3,
    mobileColumn: 1,
    mobileRows: 3,
    desktopRows: 3,
    itemSpace: 20,
    numberItems: 10,
  },

  listLayoutSetting: {
    itemSpace: 10,
    numberItems: 10,
  },

  carouselLayoutSetting: {
    desktopColumn: 5,
    mobileColumn: 2,
    itemSpace: 20,
    autoPlay: false,
    showDot: true,
    showNavigation: true,
    autoPlayTime: 2000,
    numberItems: 10,
  },

  sliderLayoutSetting: {
    itemSpace: 20,
    autoPlay: false,
    showDot: true,
    showNavigation: true,
    autoPlayTime: 2000,
    swipe: true,
    numberItems: 10,
  },
};
