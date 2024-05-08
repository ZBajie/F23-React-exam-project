import { configureStore } from "@reduxjs/toolkit"
import searchFieldSlice from "./searchFieldSlice/searchFieldSlice"
import savedBooksSlice from "./savedBooksSlice/savedBooksSlice"
import savedAuthorSlice from "./savedAuthorSlice/savedAuthorSlice"

export const store = configureStore({
  reducer: {
    searchField: searchFieldSlice,
    savedBooks: savedBooksSlice,
    savedAuthors: savedAuthorSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
