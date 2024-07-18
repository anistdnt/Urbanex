import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishList:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWishList:(state,action)=>{
      state.wishList.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setWishList,
 } = counterSlice.actions

export default counterSlice.reducer