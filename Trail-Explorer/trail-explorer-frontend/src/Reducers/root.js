import trailReducer from './trail'
import allUsersReducer from "./allUsers"

import userReducer from './user'

import {combineReducers} from 'redux'

export default combineReducers({
  userReducer: userReducer,
  trailReducer: trailReducer,
  allUsersReducer: allUsersReducer
})
