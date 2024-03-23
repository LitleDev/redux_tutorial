// it will be user to cobine all the reducer that we create in the reuce folder

import { combineReducers} from 'redux'

// importing the reducer's
import cartItems from './reducer'

// combinerducer is called 
export default combineReducers ( {
    cartItems,
}) 