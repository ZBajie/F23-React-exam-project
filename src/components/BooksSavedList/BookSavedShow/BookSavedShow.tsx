import "./BookSavedShow.scss"
import React from "react"
import { SavedBooksType } from "../../../state/savedBooksSlice/savedBooksSlice"
type BookSavedShowProps = {
  bookSavedData: SavedBooksType
  setShowBookSavedInfo: (value: boolean) => void
}

const BookSavedShow: React.FC<BookSavedShowProps> = ({
  bookSavedData,
  setShowBookSavedInfo,
}) => {
  return (
    <div className="book-saved-show">
      {bookSavedData && (
        <>
          <h2>{bookSavedData.title}</h2>
          <div className="img-info">
            <div className="book-saved-cover">
              <img src={bookSavedData.imgUrl} alt="" />
            </div>
            <div className="short-info">
              <h3>{bookSavedData.author}</h3>
              <p>Pages: {bookSavedData.pages}</p>
              <p>Genre: {bookSavedData.genre}</p>
            </div>
          </div>
          <p className="first-sentence">{bookSavedData.first_sentence}</p>
        </>
      )}
      <footer>
        <button onClick={() => setShowBookSavedInfo(false)}>Close</button>
      </footer>
    </div>
  )
}

export default BookSavedShow
