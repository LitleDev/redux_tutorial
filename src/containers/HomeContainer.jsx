import {connect} from 'react-redux'
import Home from "../components/Home";


// import the export funtion from Service/action
import {addToCart} from '../service/Action/action' 


const state_props = state => ({
 // 
})

const dispatch_props = Dispatch => ({
    addToCartHandler : data => Dispatch(addToCart(data)) 
})

export default connect(state_props, dispatch_props) (Home) ;