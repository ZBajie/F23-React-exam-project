import "./ReadersData.scss"

import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import {
  booksAndpagesCount,
  favoiteAuthorsCount,
  favoiteBooksCount,
} from "../../utils/counters"

const ReadersData = () => {
  const data = useSelector((state: RootState) => state.savedBooks.savedBooks)

  const authorsData = useSelector(
    (state: RootState) => state.savedAuthors.savedAuthors
  )

  const { booksRead, pagesTotalRead } = booksAndpagesCount(data)
  const favoriteBooksCount = favoiteBooksCount(data)
  const favoriteAuthorsCount = favoiteAuthorsCount(authorsData)
  return (
    <section className="user-data">
      <h2>Your info</h2>
      <p>Books in list: {data.length}</p>
      <p>Favorite books: {favoriteBooksCount}</p>
      <p>Books read: {booksRead}</p>
      <p>Pages total read: {pagesTotalRead}</p>
      <p>Authors in list: {authorsData.length}</p>
      <p>Favorite authors: {favoriteAuthorsCount}</p>
    </section>
  )
}
export default ReadersData
