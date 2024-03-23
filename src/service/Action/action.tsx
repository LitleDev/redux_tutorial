import { ADD_TO_CART } from "../Constant"

export const addToCart = (data) => {
    return {
        // var : data //ADD_TO_CART is imported form constant.tsx 
        type:ADD_TO_CART ,
        data:data
    }
} 

