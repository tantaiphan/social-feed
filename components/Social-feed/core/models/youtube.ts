export interface PlaylistYouTubeRes {
    etag: string;
    kind: string;
    nextPageToken: string;
    items: PlaylistYouTubeDetailModel[];
    pageinfo: PageinfoModel;
}

export interface PlaylistYouTubeDetailModel {
    id: string;
    etag: string;
    kind: string;
    snippet: SnippetDetailModel;
    videoPublishedAt: string;
    contentDetails:contentDetailModel;
    likeCount: number;
    commentCount: number;
} 

interface contentDetailModel {
    videoId: string;
    videoPublishedAt: string;
}

interface SnippetDetailModel {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
        videoId: string,
        kind: string
    }
    thumbnails: {
        default: ThumbnailModel;
        high: ThumbnailModel;
        maxres: ThumbnailModel;
        medium: ThumbnailModel;
        standard: ThumbnailModel;

    };
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
}

export interface  PageinfoModel {
    resultsPerPage: number;
    totalResults: number;
}

interface ThumbnailModel {
    height: number;
    width: number;
    url: string;
}