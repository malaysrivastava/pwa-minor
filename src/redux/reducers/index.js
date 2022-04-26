import loggedReducer from './isLogged'
import userReducer from './user'
import myProReducer from './myproduct'
import { combineReducers } from 'redux'
import myLinkReducer from './links'

const allReducers = combineReducers({
    myPro: myProReducer,
    myLink: myLinkReducer,
    isLogged:loggedReducer 
})

export default allReducers