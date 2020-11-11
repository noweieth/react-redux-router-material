import { combineReducers } from 'redux'
import productReducer from './Product/reducer'


const appReducers = combineReducers({
    productReducer
})

export default appReducers;