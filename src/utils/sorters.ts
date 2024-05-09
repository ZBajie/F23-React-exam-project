import { SavedAuthorType } from "../state/savedAuthorSlice/savedAuthorSlice"
import { SavedBooksType } from "../state/savedBooksSlice/savedBooksSlice"

export const booksSavedSort = (
  booksSavedList: SavedBooksType[],
  showInList: string
) => {
  switch (showInList) {
    case "favorites":
      return booksSavedList.filter((item) => item.favorite === true)

    case "read":
      return booksSavedList.filter((item) => item.read === true)
    case "all":
      return booksSavedList
    default:
      return booksSavedList
  }
}

export const authorsSavedSort = (
  authorsSavedList: SavedAuthorType[],
  showInList: string
) => {
  switch (showInList) {
    case "favorites":
      return authorsSavedList.filter((item) => item.favorite === true)
    case "all":
      return authorsSavedList
    default:
      return authorsSavedList
  }
}
