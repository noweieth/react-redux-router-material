import { combineReducers } from 'redux'
import productReducer from './Product/reducer'
import caroReducer from './Caro/reducer'


const appReducers = combineReducers({
    productReducer,
    caroReducer
})

export default appReducers;