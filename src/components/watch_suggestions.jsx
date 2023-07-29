import React from "react"
import { useState } from "react"
import { styles } from "./styles"

const WatchSuggestionItem = (props) => {

  return (
    <p>
      Danger of fighting
      <a href={props.videoID}>{props.videoID}</a>
    </p>
  )

}

const WatchSuggestionsSideBar = () => {

  const [watchSuggestionInfoList, setWatchSuggestionInfoList] = useState([ {"videoID": "Power" }, { "videoID": "Darklord" }])

  return (
    <div>

      <p>Watch Suggestions </p>

      <section>
        <WatchSuggestionItem videoID="300" />
      </section>

      <section>

        {
          watchSuggestionInfoList.map((item)=>{
            console.log(item)
            return (
                <WatchSuggestionItem videoID={item.videoID}/>
            )
          })
        }
      </section>
    </div>
  )

}


export { WatchSuggestionsSideBar }
