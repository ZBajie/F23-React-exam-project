import "./BooksSavedList.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import nocover from "../../assets/nocover.png"

const BooksSavedList = () => {
  const booksSavedList = useSelector(
    (state: RootState) => state.savedBooks.savedBooks
  )
  return (
    <section className="books-saved-list">
      {booksSavedList.map((book) => (
        <div key={book.key} className="book-saved-card">
          {book.imgUrl.length > 5 ? (
            <img src={book.imgUrl} alt="No cover" />
          ) : (
            <img src={nocover} alt="" />
          )}
          <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default BooksSavedList
