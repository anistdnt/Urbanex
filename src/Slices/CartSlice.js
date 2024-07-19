import { createSlice } from '@reduxjs/toolkit'
import all_product from '../Assets/all_product';

const initialState = {
  wishList:[],
  item: all_product,
  totalQuantity:0,
  totalPrice:0

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWishList:(state,action)=>{
      let find = state.wishList.findIndex((item)=>(item.product.id === action.payload.product.id && item.size === action.payload.size))
      if(find>=0)
        state.wishList[find].product.quantity+=1
      else
        state.wishList.push(action.payload);

  
    },
    getCartTotal:(state)=>{
      let {totalPrice,totalQuantity} = state.wishList.reduce(
        (cartTotal,cartItem)=>{
          const {new_price,quantity}=cartItem.product
          const itemTotal = new_price*quantity
          cartTotal.totalQuantity+=quantity
          cartTotal.totalPrice+=itemTotal

          return cartTotal
        },
        {
          totalPrice:0,
          totalQuantity:0
        }
      );

      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeFromWishList:(state,action)=>{
      state.wishList = state.wishList.filter((item)=>!(item.product.id===action.payload.product.id && item.size===action.payload.size))
    },
    incrementQuantity:(state,action)=>{
      let find = state.wishList.findIndex((item)=>(item.product.id === action.payload.product.id && item.size === action.payload.size))
      state.wishList[find].product.quantity+=1
    },
    decrementQuantity:(state,action)=>{
      let find = state.wishList.findIndex((item)=>(item.product.id === action.payload.product.id && item.size === action.payload.size))
      if(state.wishList[find].product.quantity>1){
        state.wishList[find].product.quantity-=1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setWishList,
    getCartTotal,
    removeFromWishList,
    incrementQuantity,
    decrementQuantity,
 } = counterSlice.actions

export default counterSlice.reducer