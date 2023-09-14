import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const middlewares = [thunk]

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
})
