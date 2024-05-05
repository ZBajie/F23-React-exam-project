import "./BookSavedEdit.scss"
import { useDispatch } from "react-redux"
import { SavedBooksType } from "../../../state/savedBooksSlice/savedBooksSlice"
import { AppDispatch } from "../../../state/store"
import {
  favorite,
  read,
  rate,
  readerComment,
} from "../../../state/savedBooksSlice/savedBooksSlice"
import { useState } from "react"
type BookSavedEditProps = {
  bookSavedData: SavedBooksType
  setShowBookSavedEdit: (value: boolean) => void
}
const BookSavedEdit: React.FC<BookSavedEditProps> = ({
  bookSavedData,
  setShowBookSavedEdit,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [buttonFavorite, setButtonFavorite] = useState(bookSavedData.favorite)
  const [buttonRead, setButtonRead] = useState(bookSavedData.read)
  const [rateInput, setRateInput] = useState(bookSavedData.rate)
  const [review, setReview] = useState(bookSavedData.readerComment)

  return (
    <div className="book-saved-edit">
      <h2>Edit</h2>
      <div>
        <div className="edit-rating-div">
          <button
            className={`button-favorite ${
              buttonFavorite ? "button-favorite-true" : ""
            }`}
            onClick={() => {
              const favoriteState = !bookSavedData.favorite
              setButtonFavorite(!buttonFavorite)
              dispatch(
                favorite({ key: bookSavedData.key, favorite: favoriteState })
              )
            }}
          >
            Favorite
          </button>
          <button
            className={`button-read ${buttonRead ? "button-read-true" : ""}`}
            onClick={() => {
              const readState = !bookSavedData.read
              setButtonRead(!buttonRead)
              dispatch(
                read({
                  key: bookSavedData.key,
                  read: readState,
                })
              )
            }}
          >
            Read
          </button>

          <input
            className="edit-rating-input"
            type="number"
            max={5}
            min={0}
            onChange={(e) => setRateInput(+e.target.value)}
          />
          <button
            onClick={() =>
              dispatch(rate({ key: bookSavedData.key, rate: rateInput }))
            }
          >
            Rate
          </button>
        </div>

        <label htmlFor="readerComment">Review</label>
        <textarea
          name="readerComment"
          id="readerComment"
          rows={7}
          cols={50}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(readerComment({ key: bookSavedData.key, review: review }))
          }}
        >
          Save Review
        </button>
      </div>
      <footer>
        <button
          onClick={() => {
            setShowBookSavedEdit(false)
          }}
        >
          Close
        </button>
      </footer>
    </div>
  )
}

export default BookSavedEdit
