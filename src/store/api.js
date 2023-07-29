import { createSlice } from "@reduxjs/toolkit"
import {invidious_api} from "../apis/index.js"

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    itemsList : [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state,action) {
      const newItem = action.payload
      const existingItem = state.itemsList.find((item) => item.id === newItem.id)

      if(existingItem){
        existingItem.quantity++
        existingItem.price+= newItem.price
      }else{
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
      }

    },
    removeFromCart(state,action) {},
    setShowCart(state,action) {

    }
  }
})


export const apiActions = apiSlice.actions

export default apiSlice
