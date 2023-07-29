

type SearchResultsAPIDataType  = {

    "type": string,
    "title": string,
    "videoId": string,
    "author": string,
    "authorId": string,
    "authorUrl": string,
    "authorVerified": true,
    "videoThumbnails": {
      url:string,
      quality:string,
      width:number,
      height:number,
    }[],
    "description": string,
    "descriptionHtml": string,
    "viewCount": number,
    "viewCountText": string,
    "published": number,
    "publishedText": string,
    "lengthSeconds": number,
    "liveNow": boolean,
    "premium": boolean,
    "isUpcoming": boolean

}

type SearchResultsAPIResponseType = {
  data: SearchResultsAPIDataType[],

  [key: string]: any
}


export type SearchResultsAPIDataType
