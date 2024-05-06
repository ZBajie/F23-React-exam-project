import "./ReadersData.scss"

import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { booksAndpagesCount, favoiteBooksCount } from "../../utils/counters"

const ReadersData = () => {
  const data = useSelector((state: RootState) => state.savedBooks.savedBooks)

  const { booksRead, pagesTotalRead } = booksAndpagesCount(data)
  const favoriteBooksCount = favoiteBooksCount(data)
  return (
    <section className="user-data">
      <h2>Your info</h2>
      <p>Books in list: {data.length}</p>
      <p>Favorite books: {favoriteBooksCount}</p>
      <p>Books read: {booksRead}</p>
      <p>Pages total read: {pagesTotalRead}</p>
    </section>
  )
}
export default ReadersData
