import { createSlice } from "@reduxjs/toolkit"

type SearchFieldType = {
  searchWord: string
  searchFor: "title" | "author"
}

const initialState: SearchFieldType = {
  searchWord: "",
  searchFor: "title",
}

const searchFieldSlice = createSlice({
  name: "searchField",
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload
    },
    setSearchFor: (state, action) => {
      state.searchFor = action.payload
    },
  },
})

export const { setSearchWord, setSearchFor } = searchFieldSlice.actions

export default searchFieldSlice.reducer
