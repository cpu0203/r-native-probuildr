import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './mainSlice'
import searchSlice from './searchSlice'
import glavPageSlice from './glavPageSlice'

export default configureStore({
  reducer: {
    posts: mainSlice,
    searching: searchSlice,
    glavPage: glavPageSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})