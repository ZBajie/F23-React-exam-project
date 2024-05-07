import "./SearchField.scss"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { AppDispatch } from "../../state/store"
import {
  setSearchFor,
  setSearchWord,
} from "../../state/searchFieldSlice/searchFieldSlice"

const SearchField = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const searchWord = useRef<HTMLInputElement>(null)
  const [selectFor, setSelectFor] = useState("title")
  return (
    <div className="search-field">
      <div>
        <label htmlFor="searchBook">
          <select
            name="selectFor"
            id="selectFor"
            value={selectFor}
            onChange={(e) => setSelectFor(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </label>
        <input type="search" id="searchBook" ref={searchWord} />
      </div>
      <button
        onClick={() => {
          if (searchWord.current?.value === "") return

          if (selectFor === "title") {
            dispatch(setSearchWord(searchWord.current?.value || ""))
            dispatch(setSearchFor("title"))
            navigate("/searchbook")
          }
          if (selectFor === "author") {
            dispatch(setSearchWord(searchWord.current?.value || ""))
            dispatch(setSearchFor("author"))
            navigate("/searchauthor")
          }
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchField
