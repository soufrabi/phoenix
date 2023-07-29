import React from "react";
import { SearchBar } from "./search_bar";
// import { styles } from "./styles";
import "./style.css"
const TopBar = (props) => {


  return (
    <div id="top-bar">
      <div id="phoenix-name">
        Phoenix
      </div>

      <SearchBar />
      <div className="top-bar-right">
        <a href="https://github.com/awesomeDev12/phoenix" target="_blank">
          <i className="fa fa-github" id="github-icon"> </i>
        </a>
      </div>
    </div>
  )
}

export { TopBar }
