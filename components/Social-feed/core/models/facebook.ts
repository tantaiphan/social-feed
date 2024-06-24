export class FaceBookPostDataModel {
  id: string;
  name: string;
  message: string;
  attachments: AttachmentModel;

  constructor() {
    this.id = "";
    this.name = "";
    this.message = "";
    this.attachments = new AttachmentModel();
  }
}

class AttachmentDetailModel {
  url: string;
  media_type: string;
  media?: MediaModel;
  constructor() {
    this.url = "";
    this.media_type = "";
  }
}

interface MediaModel {
  image: ImageModel;
}

interface ImageModel {
  height: number;
  width: number;
  src: string;
}

class AttachmentModel {
  data: AttachmentDetailModel[];
  constructor() {
    this.data = [];
  }
}
export class FacebookPagingModel {
  previous: string;
  next: string;

  constructor() {
    this.previous = "";
    this.next = "";
  }
}
