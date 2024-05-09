import "./BookSavedShow.scss"
import React, { useState } from "react"
import { SavedBooksType } from "../../../state/savedBooksSlice/savedBooksSlice"
import BookSavedEdit from "../BookSavedEdit/BookSavedEdit"
type BookSavedShowProps = {
  bookSavedData: SavedBooksType
  setShowBookSavedInfo: (value: boolean) => void
}

const BookSavedShow: React.FC<BookSavedShowProps> = ({
  bookSavedData,
  setShowBookSavedInfo,
}) => {
  const [showBookSavedEdit, setShowBookSavedEdit] = useState(false)
  return (
    <div className="book-saved-show">
      {bookSavedData && (
        <>
          {bookSavedData.favorite === true ? (
            <h2>
              <span className="favorite-star">✴</span>
              {bookSavedData.title} <span className="favorite-star">✴</span>
            </h2>
          ) : (
            <h2>{bookSavedData.title}</h2>
          )}

          <div className="img-info">
            <div className="book-saved-cover">
              <img src={bookSavedData.imgUrl} alt="" />
            </div>
            <div className="short-info">
              <h3>{bookSavedData.author}</h3>
              <p>Pages: {bookSavedData.pages}</p>
              <p>Genre: {bookSavedData.genre}</p>
              <p>Year: {bookSavedData.first_publish_year}</p>
              <p>Editions: {bookSavedData.editions}</p>
            </div>
          </div>
          <p className="first-sentence">
            First sentence: {bookSavedData.first_sentence}
          </p>

          {bookSavedData.read === true && (
            <div className="read-comment">
              <h2>Reader info</h2>
              <p className="read">Read: 📖 </p>
              <p>Rating: {bookSavedData.rate} </p>
              <div>
                <p>Comment:</p>
                <p>{bookSavedData.readerComment}</p>
              </div>
            </div>
          )}
        </>
      )}
      <footer>
        <button onClick={() => setShowBookSavedEdit(true)}>Edit</button>
        <button onClick={() => setShowBookSavedInfo(false)}>Close</button>
      </footer>
      {bookSavedData && showBookSavedEdit && (
        <div className="modal-book-saved-edit">
          <div className="modal-book-saved-edit-overlay">
            <BookSavedEdit
              bookSavedData={bookSavedData}
              setShowBookSavedEdit={setShowBookSavedEdit}
              setShowBookSavedInfo={setShowBookSavedInfo}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BookSavedShow
