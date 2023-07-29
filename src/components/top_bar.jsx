import React from "react";
import { SearchBar } from "./search_bar";
import { styles } from "./styles";
const TopBar = (props) => {


  return (
    <div style={styles.topBar}>
      <SearchBar handleSearch={props.handleSearch}/>
    </div>
  )
}

export {TopBar}
