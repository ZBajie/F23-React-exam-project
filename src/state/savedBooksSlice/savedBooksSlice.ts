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
  read: boolean
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
    favorite: (
      state,
      action: { payload: { key: string; favorite: boolean } }
    ) => {
      const { key, favorite } = action.payload
      const book = state.savedBooks.find((item) => item.key === key)

      if (book) {
        book.favorite = favorite
      }
    },
    read: (state, action: { payload: { key: string; read: boolean } }) => {
      const { key, read } = action.payload
      const book = state.savedBooks.find((item) => item.key === key)
      if (book) {
        book.read = read
      }
    },
    readerComment: (
      state,
      action: { payload: { key: string; review: string } }
    ) => {
      const { key, review } = action.payload
      const book = state.savedBooks.find((item) => item.key === key)
      if (book) {
        book.readerComment = review
      }
    },

    rate: (state, action: { payload: { key: string; rate: number } }) => {
      const { key, rate } = action.payload
      const book = state.savedBooks.find((item) => item.key === key)
      if (book && rate <= 5 && rate >= 0) {
        book.rate = rate
      }
    },
  },
})

export const { addBook, favorite, read, rate, readerComment } =
  savedBooksSlice.actions
export default savedBooksSlice.reducer
