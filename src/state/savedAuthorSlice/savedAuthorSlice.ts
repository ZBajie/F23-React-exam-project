import { createSlice } from "@reduxjs/toolkit"

export type SavedAuthorType = {
  name: string
  key: string
  birth_date: string
  death_date: string
  top_work: string
  top_subject: string
  bio: string
  favorite: boolean
}

type SavedAuthorState = {
  savedAuthors: SavedAuthorType[]
}

const initialState: SavedAuthorState = {
  savedAuthors: [],
}

const savedAuthorSlice = createSlice({
  name: "savedAuthor",
  initialState,
  reducers: {
    addAuthor: (state, action: { payload: SavedAuthorType }) => {
      const author = state.savedAuthors.find(
        (item) => item.key === action.payload.key
      )
      if (!author) {
        state.savedAuthors.push(action.payload)
      }
    },
    removeAuthor: (state, action: { payload: { key: string } }) => {
      const { key } = action.payload
      const author = state.savedAuthors.find((item) => item.key === key)
      if (author) {
        state.savedAuthors = state.savedAuthors.filter(
          (item) => item.key !== key
        )
      }
    },
    favorite: (
      state,
      action: { payload: { key: string; favorite: boolean } }
    ) => {
      const { key, favorite } = action.payload
      const author = state.savedAuthors.find((item) => item.key === key)
      if (author) {
        author.favorite = favorite
      }
    },
  },
})

export const { addAuthor, removeAuthor, favorite } = savedAuthorSlice.actions
export default savedAuthorSlice.reducer
