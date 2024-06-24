import { DataSourceEnum } from "../libs/contants";

export class PostDataModel {
  itemtype: DataSourceEnum;
  id: string;
  description: string;
  imgUrl: string;
  numberLike?: number;
  numberComment?: number;
  channelTitle: string;
  createAt: string;
  link: string;
  channelAvatar?: string;

  constructor() {
    this.itemtype = DataSourceEnum.Facebook;
    this.id = "";
    this.description = "";
    this.imgUrl = "";
    this.numberLike = 0;
    this.numberComment = 0;
    this.channelTitle = "";
    this.createAt = "";
    this.link = "";
  }
}

export class PostModel {
  data: PostDataModel[];
  constructor() {
    this.data = [];
  }
}
