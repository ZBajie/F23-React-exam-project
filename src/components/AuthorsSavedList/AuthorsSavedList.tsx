import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import "./AuthorsSavedList.scss"
import { useState } from "react"
import AuthorSavedShow from "./AuthorSavedShow/AuthorSavedShow"
import { SavedAuthorType } from "../../state/savedAuthorSlice/savedAuthorSlice"
import { authorsSavedSort } from "../../utils/sorters"

const AuthorsSavedList = () => {
  const authorSavedData = useSelector(
    (state: RootState) => state.savedAuthors.savedAuthors
  )
  const [authorData, setAuthorData] = useState<SavedAuthorType | null>(null)
  const [showAuthorInfo, setShowAuthorInfo] = useState(false)
  const [showInList, setShowInList] = useState("all")
  const authorSavedDataSorted = authorsSavedSort(authorSavedData, showInList)

  return (
    <>
      {authorSavedDataSorted.length > 0 && (
        <section className="authors-saved-list">
          <header>
            <h2>Saved Authors</h2>
            <select
              value={showInList}
              onChange={(e) => setShowInList(e.target.value)}
            >
              <option value="all">All</option>
              <option value="favorites">Favorites</option>
            </select>
          </header>
          {authorSavedDataSorted.map((item) => (
            <>
              <div
                key={item.key}
                className="authors-saved-card"
                onClick={() => {
                  setAuthorData(item)
                  setShowAuthorInfo(true)
                }}
              >
                {item.favorite === true ? (
                  <h2>
                    <span className="favorite-star">✴</span>
                    {item.name} <span className="favorite-star">✴</span>
                  </h2>
                ) : (
                  <h2>{item.name}</h2>
                )}
              </div>
            </>
          ))}
          {authorData && showAuthorInfo && (
            <div className="modal-author-saved-info">
              <div className="modal-author-saved-info-overlay">
                <AuthorSavedShow
                  authorData={authorData}
                  setShowAuthorInfo={setShowAuthorInfo}
                />
              </div>
            </div>
          )}
        </section>
      )}
    </>
  )
}
export default AuthorsSavedList
