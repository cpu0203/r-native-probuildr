import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSlice'

export default configureStore({
  reducer: {
    posts: mainSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})