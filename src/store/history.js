
import { createSlice } from "@reduxjs/toolkit";


const loadFromLocalStorage = ()=>{
  const retrieved = JSON.parse(localStorage.getItem("history"));
  if(retrieved != null ){
    const history = JSON.parse(localStorage.getItem("history"));
    console.log(history);
    return history
  }else {
    const history = {size:0, list : []}
    return history
  }

}


const saveInLocalStorage = (history)=> {

  localStorage.setItem("history", JSON.stringify(history));


}

const historySlice = createSlice({
  name: 'history',
  initialState : loadFromLocalStorage(),
  reducers: {
    add(state,action){
      const newItem = action.payload

      const type = newItem.type
      const id = newItem.id

      if(true){
        state.size ++ 

        state.list.push({
          type:type,
          id: id
        })
      }


      saveInLocalStorage(state)
    }
      
  }

})


export const historyActions = historySlice.actions

export default historySlice
