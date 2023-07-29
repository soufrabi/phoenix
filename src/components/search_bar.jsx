import React from "react";
import { useState } from "react";
import { invidious_api } from "../apis";

const SearchBar = (props) => {
  
  const [searchTerm,setSearchTerm] = useState("")

  const searchButtonClicked = async () => {
    console.log("Search results for : "+searchTerm)
  
    if (searchTerm.length > 0) {
      
      const invidiousSearchResults = await invidious_api.getSearchResults(searchTerm)
      console.log("Search result as obtained by the Search Bar")
      console.log(invidiousSearchResults)

      props.handleSearch(invidiousSearchResults)

    }
  
     }

  const handleInputChange = (event)=>{
    
    // console.log(event.target.value)
    setSearchTerm(event.target.value)


  }


  return (
    <>
      <button type="button" onClick={searchButtonClicked} >Search</button>
      <input type="text" onChange={handleInputChange}  />
    </>
  )


}


export {SearchBar}
