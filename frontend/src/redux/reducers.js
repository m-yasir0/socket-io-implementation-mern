import { combineReducers } from 'redux'
import chatSlice from './slices/chatSlice'

export const rootReducer = combineReducers({
  chat: chatSlice,
})
