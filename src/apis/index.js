import axios from "axios"

const getInvidiousInstances = ()=> {
  // api.invidious.io

}

const invidious_instances = ["invidious.snopyta.org","yewtu.be","vid.puffyan.us","yt.artemislena.eu","invidious.projectsegfau.lt","y.com.sb","invidious.tiekoetter.com","invidious.slipfox.xyz","invidious.privacydev.net","vid.priv.au","iv.melmac.space","iv.ggtyler.dev","invidious.lunar.icu","invidious.0011.lt","inv.zzls.xyz","yt.floss.media","inv.tux.pizza","not-ytp.blocus.ch","invidious.protokolla.fi","onion.tube","inv.in.projectsegfau.lt","inv.citw.lgbt","inv.makerlab.tech","yt.oelrichsgarcia.de"]
let invidious_instance = invidious_instances[2]

const invidious = axios.create({
  baseURL: "https://"+invidious_instance
})



// const getSearchResults = (search_term) => {
//   const promise = fetch('https://invidious.snopyta.org/api/v1/search?q=' + search_term)

//   let videoUrl = ""
//   promise.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)

//     return response.json()
//   }).then((response_json) => {
//     console.log(response_json)
//     videoUrl = ""

//   })


// }


const getSearchResults = async (search_term)=>{
  const response = await invidious.get("https://"+invidious_instance+"/api/v1/search?q="+search_term,{})

  const data = response.data
  console.log("Search results as obtained by the API : ")
  console.log(data)
  const result  = ""
  return data

}

const getVideoInfo = async (video_id) => {

  let videoUrl = ""
  let videoThumbnailUrl = ""

  let videoStreams = []
  let audioStreams = []

  // let request_string = "api/v1/videos/"+video_id
  let request_string = "https://"+invidious_instance+"/api/v1/videos/"+video_id
  console.log("Request string")
  console.log(request_string)
  const response = await invidious.get(request_string, {})
  console.log("Video Player Info API call")

  const data = response.data
  console.log(data)
  const formatStreams = data.formatStreams
  const adaptiveFormats = data.adaptiveFormats
  const description = data.description
  const viewCount = data.viewCount
  const likeCount = data.likeCount
  const genre = data.genre
  const author = data.author
  const authorId = data.authorId
  const authorThumbnail = data.authorThumbnails[data.authorThumbnails.length-1].url
  // console.log(formatStreams)

  // const urls_types = formatStreams.map((el)=>{
  //   return {

  //     url: el.url,
  //     type: el.type
  //   }
  // })

  // console.log(urls_types)
  


  // for (let index = 0; index < formatStreams.length; index++) {
  //   const element = formatStreams[index];


  //   if (element.type.substring(0, 9) === "video/mp4") {
  //     videoUrl = element.url
  //     // console.log("Video Url as fetched by the API : " + videoUrl)
  //     // break


  //   }
  // }


  formatStreams.map((el,index)=>{
    const url = el.url
    // console.log(el)

    if(el.type.substring(0,9) === "video/mp4"){
      videoStreams.push(el)
    }
  
  })


  console.log("Video Streams")
  console.log(videoStreams)
  console.log("Audio Streams")
  console.log(audioStreams)


  videoThumbnailUrl = data.videoThumbnails[0].url

    return {
      videoThumbnailUrl:videoThumbnailUrl,
      videoStreams:videoStreams,
      audioStreams:audioStreams,
      description:description,
    }

  
}


  const invidious_api = {}

  invidious_api.getVideoInfo = getVideoInfo
  invidious_api.getSearchResults = getSearchResults



  export { invidious_api }




