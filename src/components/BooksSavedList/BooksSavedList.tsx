import "./BooksSavedList.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import nocover from "../../assets/nocover.png"
import BookSavedShow from "./BookSavedShow/BookSavedShow"
import { useState } from "react"

import { SavedBooksType } from "./../../state/savedBooksSlice/savedBooksSlice"

const BooksSavedList = () => {
  const booksSavedList = useSelector(
    (state: RootState) => state.savedBooks.savedBooks
  )

  const [bookSavedData, setBookSavedData] = useState<SavedBooksType | null>(
    null
  )
  const [showBookSavedInfo, setShowBookSavedInfo] = useState(false)
  return (
    <section className="books-saved-list">
      <h2>Saved Books</h2>
      {booksSavedList.map((item) => (
        <div
          key={item.key}
          className="book-saved-card"
          onClick={() => {
            setShowBookSavedInfo(true)
            setBookSavedData(item)
          }}
        >
          {item.imgUrl.length > 5 ? (
            <img src={item.imgUrl} alt="No cover" />
          ) : (
            <img src={nocover} alt="" />
          )}
          <div>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        </div>
      ))}
      {bookSavedData && showBookSavedInfo && (
        <div className="modal-book-saved-info">
          <div className="modal-book-saved-info-overlay">
            <BookSavedShow
              bookSavedData={bookSavedData}
              setShowBookSavedInfo={setShowBookSavedInfo}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default BooksSavedList
