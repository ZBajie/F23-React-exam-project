import { createSlice } from "@reduxjs/toolkit"
type SavedBooksType = {
  title: string
  author: string
  description: string
  pages: number
  genre: string
  key: string
  imgUrl: string
  favorite: boolean
  readed: boolean
  rate: number
  readerComment: string
}

type SavedBooksState = {
  savedBooks: SavedBooksType[]
}

const initialState: SavedBooksState = {
  savedBooks: [],
}

const savedBooksSlice = createSlice({
  name: "savedBooks",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.savedBooks.push(action.payload)
    },
  },
})

export const { addBook } = savedBooksSlice.actions
export default savedBooksSlice.reducer
