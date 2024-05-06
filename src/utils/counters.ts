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
