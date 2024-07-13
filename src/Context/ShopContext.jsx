import {React,createContext,useContext} from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider=(props)=>{
    let contextVal = {all_product};

    return(
        <ShopContext.Provider value={
            //arrayfn
            contextVal
            
            }>
            {props.children}
        </ShopContext.Provider>
    )
}

// export function useAllProduct(){
//     return useContext(ShopContext).contextVal
// }