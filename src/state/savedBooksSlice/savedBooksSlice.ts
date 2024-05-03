import { createSlice } from "@reduxjs/toolkit"
export type SavedBooksType = {
  title: string
  author: string
  first_sentence: string
  description: string
  pages: number
  first_publish_year: number
  editions: number
  genre: string
  key: string
  imgUrl: string
  favorite: boolean
  readed: boolean
  rate: number | null
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
