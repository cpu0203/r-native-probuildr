import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const getSearching = createAsyncThunk(
  'search/searchValue',
  async currentRequest => {
    const apiUrl = `https://www.probuildr.ru/rest/wp-json/wp/v2/search/?search=${currentRequest}`
    const req = await fetch(apiUrl)
    const res = await req.json()

    return {res, currentRequest}
  }
)

const initialState = {
  searchValue: [],
  status: null,
  searchReq: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increment(state) {
      state.searchValue = []
    },
    clearSearchValue(state){
      state.searchValue = []
    },
    clearStatus(state){
      state.status = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearching.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getSearching.fulfilled, (state, action) => {
        state.status = null
        state.searchValue = action.payload.res
        state.searchReq = action.payload.currentRequest
        if(action.payload.res.length < 1) state.status = 'По запросу ничего не найдено'
      })
      .addCase(getSearching.rejected, (state, action) => {
        state.status = 'что-то пошло не так...'
        state.searchValue = []
        state.searchReq = null
      })
  }
})

export const { clearSearchValue, clearStatus } = searchSlice.actions
export default searchSlice.reducer