import axios from "axios"

const getInvidiousInstances = ()=> {
  // api.invidious.io

}

const invidious_instances = ["invidious.snopyta.org","yt.floss.media","yewtu.be",]
const invidious_instance = invidious_instances[1]

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
  const response = await invidious.get("https://invidious.snopyta.org/api/v1/search?q="+search_term,{})

  const data = response.data
  console.log("Search results as obtained by the API : ")
  console.log(data)
  const result  = ""
  return data

}

const getVideoInfo = async (video_id) => {

  let videoUrl = ""
  let videoThumbnailUrl = ""

  let request_string = "api/v1/videos/"+video_id
  console.log("Request string")
  console.log(request_string)
  const response = await invidious.get(request_string, {})
  const data = response.data
  const formatStreams = data.formatStreams
  // console.log(formatStreams)

  // const urls_types = formatStreams.map((el)=>{
  //   return {

  //     url: el.url,
  //     type: el.type
  //   }
  // })

  // console.log(urls_types)
  


  for (let index = 0; index < formatStreams.length; index++) {
    const element = formatStreams[index];


    if (element.type.substring(0, 9) === "video/mp4") {
      videoUrl = element.url
      // console.log("Video Url as fetched by the API : " + videoUrl)
      // break


    }
  }


  videoThumbnailUrl = data.videoThumbnails[0].url

    return {
      videoUrl:videoUrl,
      videoThumbnailUrl:videoThumbnailUrl
    }

  
}


  const invidious_api = {}

  invidious_api.getVideoInfo = getVideoInfo
  invidious_api.getSearchResults = getSearchResults



  export { invidious_api }




