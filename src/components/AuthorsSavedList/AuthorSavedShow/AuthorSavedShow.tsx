import "./AuthorSavedShow.scss"
import {
  SavedAuthorType,
  favorite,
  removeAuthor,
} from "../../../state/savedAuthorSlice/savedAuthorSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../state/store"
import { useState } from "react"

type AuthorSavedShowProps = {
  authorData: SavedAuthorType
  setShowAuthorInfo: (value: boolean) => void
}

const AuthorSavedShow: React.FC<AuthorSavedShowProps> = ({
  authorData,
  setShowAuthorInfo,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [buttonFavorite, setButtonFavorite] = useState(authorData.favorite)
  return (
    <div className="author-saved-show">
      {authorData && (
        <>
          {authorData.favorite === true ? (
            <h2>
              <span className="favorite-star">✴</span>
              {authorData.name} <span className="favorite-star">✴</span>
            </h2>
          ) : (
            <h2>{authorData.name}</h2>
          )}

          <div className="short-info">
            <p>Birth: {authorData.birth_date}</p>
            {authorData.death_date && <p>Died: {authorData.death_date}</p>}
            <p>Top Subject: {authorData.top_subject}</p>
            <p>Top work: {authorData.top_work}</p>
          </div>
        </>
      )}
      <footer>
        <button
          onClick={() => {
            const confirmed = confirm("Are you sure?")
            if (!confirmed) return
            dispatch(removeAuthor({ key: authorData.key }))
            setShowAuthorInfo(false)
          }}
        >
          Remove book
        </button>
        <button
          className={`button-favorite ${
            buttonFavorite ? "button-favorite-true" : ""
          }`}
          onClick={() => {
            const favoriteState = !authorData.favorite
            setButtonFavorite(!buttonFavorite)
            dispatch(favorite({ key: authorData.key, favorite: favoriteState }))
          }}
        >
          Favorite
        </button>
        <button onClick={() => setShowAuthorInfo(false)}>Close</button>
      </footer>
    </div>
  )
}

export default AuthorSavedShow
