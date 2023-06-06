import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const getGlavPage = createAsyncThunk(
  'glavPage/fetchGlavPage',
  async () => {
    const reqPage = 20
    const apiUrl = `https://www.probuildr.ru/rest/wp-json/wp/v2/pages/${reqPage}`
    const req = await fetch(apiUrl)
    const res = await req.json()
    return res.crb_app_version
  }
)



const initialState = {
  versionValue: '1.0',
  versionOnSite: null,
}

export const glavPageSlice = createSlice({
  name: 'glavPage',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getGlavPage.pending, (state, action) => {
        // state.status = 'loading'
      })
      .addCase(getGlavPage.fulfilled, (state, action) => {
      // Add user to the state array
      state.versionOnSite = action.payload
    })
      .addCase(getGlavPage.rejected, (state, action) => {
        state.versionOnSite = 'данных нет'
      // state.error = action.error.message
    })
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = glavPageSlice.actions

export default glavPageSlice.reducer