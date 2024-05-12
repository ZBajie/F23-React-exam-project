import "./BooksSavedList.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import nocover from "../../assets/nocover.png"
import BookSavedShow from "./BookSavedShow/BookSavedShow"
import { useState } from "react"

import { SavedBooksType } from "./../../state/savedBooksSlice/savedBooksSlice"
import { booksSavedSort } from "../../utils/sorters"

const BooksSavedList = () => {
  const booksSavedList = useSelector(
    (state: RootState) => state.savedBooks.savedBooks
  )

  const [bookSavedData, setBookSavedData] = useState<SavedBooksType | null>(
    null
  )
  const [showBookSavedInfo, setShowBookSavedInfo] = useState(false)
  const [showInList, setShowInList] = useState("all")

  const booksSavedShowSorted = booksSavedSort(booksSavedList, showInList)

  return (
    <>
      {booksSavedList.length > 0 && (
        <section className="books-saved-list">
          <header>
            <h2>Saved Books</h2>
            <select
              value={showInList}
              onChange={(e) => setShowInList(e.target.value)}
            >
              <option value="all">All</option>
              <option value="favorites">Favorites</option>
              <option value="read">Read</option>
            </select>
          </header>
          {booksSavedShowSorted.map((item) => (
            <>
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
                  {item.favorite === true ? (
                    <h3>
                      <span className="favorite-star">✴</span>
                      {item.title} <span className="favorite-star">✴</span>
                    </h3>
                  ) : (
                    <h3>{item.title}</h3>
                  )}
                  <p>{item.author}</p>
                  {item.read === true && <p>Read: 📖</p>}
                </div>
              </div>
            </>
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
      )}
    </>
  )
}

export default BooksSavedList
