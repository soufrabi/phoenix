import React from "react";
import { SearchBar } from "./search_bar";
// import { styles } from "./styles";
const TopBar = (props) => {


  return (
    <div className="top-bar">
      <div className="phoenix-name">
        Phoenix
      </div>

      <SearchBar />
      <div className="top-bar-right">
        <a href="https://github.com/soufrabi/phoenix" target="_blank">
          <i className="fa fa-github" id="github-icon"> </i>
        </a>
      </div>
    </div>
  )
}

export { TopBar }
