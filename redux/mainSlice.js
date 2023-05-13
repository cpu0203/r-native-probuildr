import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchByIdStatus',
  async currentPage => {
    const perPage = 6
    // const currentPage2 = 1
    const apiUrl = `https://www.probuildr.ru/rest/wp-json/wp/v2/posts?categories=4&per_page=${perPage}&page=${currentPage}&_embed`
    const req = await fetch(apiUrl)
    
    const pagesQuantity = req.headers.get('x-wp-totalpages')

    const res = await req.json()
    return {res, pagesQuantity, currentPage}
  }
)

const initialState = {
  value: 12,
  posts: [],
  status: null,
  error: null,
  currentPage: 1,
  pagesQuantity: 1
}

export const mainSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsZero: state => {
      state.posts = []
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts.push(...action.payload.res)
      state.pagesQuantity = action.payload.pagesQuantity
      state.status = null
      state.currentPage = action.payload.currentPage
    })
      .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

// Action creators are generated for each case reducer function
export const { setPostsZero, decrement, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer