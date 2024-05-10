import { SavedAuthorType } from "../state/savedAuthorSlice/savedAuthorSlice"
import { SavedBooksType } from "../state/savedBooksSlice/savedBooksSlice"

export const booksAndpagesCount = (books: SavedBooksType[]) => {
  let pagesTotalRead = 0
  let booksRead = 0
  books.map((book) => {
    if (book.read === true) {
      pagesTotalRead += book.pages
      booksRead += 1
    }
  })
  return { pagesTotalRead, booksRead }
}

export const favoiteBooksCount = (books: SavedBooksType[]) => {
  let favoriteBooks = 0
  books.map((book) => {
    if (book.favorite === true) {
      favoriteBooks += 1
    }
  })
  return favoriteBooks
}
export const favoiteAuthorsCount = (authors: SavedAuthorType[]) => {
  let favoriteAuthors = 0
  authors.map((item) => {
    if (item.favorite === true) {
      favoriteAuthors += 1
    }
  })
  return favoriteAuthors
}
