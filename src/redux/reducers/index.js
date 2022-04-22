import loggedReducer from './isLogged'
import userReducer from './user'
import myProReducer from './myproduct'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    myPro: myProReducer,
    isLogged:loggedReducer 
})

export default allReducers