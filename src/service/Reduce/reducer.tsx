//inporting constant values form contant 
import { ADD_TO_CART } from '../Constant'


// intiale state of the object 
const initialState = {
    // object state with empty array 
    cartData:[]
}

//compoemnts with switch case
// the argument is binded with the action form Reduce/action
// how the action will pass to this method will be defined in containers
export default function cartItems (state = [], action) {
    switch(action.type) {
        case ADD_TO_CART :
            return  [
                ...state,
                {cartData:action.data}
            ]
        default:
            return state
    }
}