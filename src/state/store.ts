import { configureStore } from "@reduxjs/toolkit"
import searchFieldSlice from "./searchFieldSlice/searchFieldSlice"

export const store = configureStore({
  reducer: {
    searchField: searchFieldSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
