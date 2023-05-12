import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSlice'

export default configureStore({
  reducer: {
    posts: mainSlice
  },
})