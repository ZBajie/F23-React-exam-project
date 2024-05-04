import "./BookSavedEdit.scss"
import { useDispatch } from "react-redux"
import { SavedBooksType } from "../../../state/savedBooksSlice/savedBooksSlice"
import { AppDispatch } from "../../../state/store"
import { favorite } from "../../../state/savedBooksSlice/savedBooksSlice"
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
  const [buttonFavTrue, setButtonFavTrue] = useState(bookSavedData.favorite)

  return (
    <div className="book-saved-edit">
      <h2>Edit</h2>
      <div>
        <button
          className={`button-favorite ${
            buttonFavTrue ? "button-favorite-true" : ""
          }`}
          onClick={() => {
            const favoriteState = !bookSavedData.favorite
            setButtonFavTrue(!buttonFavTrue)
            dispatch(
              favorite({ key: bookSavedData.key, favorite: favoriteState })
            )
          }}
        >
          Favorite
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
