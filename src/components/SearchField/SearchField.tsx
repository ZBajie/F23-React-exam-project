import "./SearchField.scss"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { AppDispatch } from "../../state/store"
import {
  setSearchFor,
  setSearchWord,
} from "../../state/searchFieldSlice/searchFieldSlice"

type SearchFieldProps = {
  label: string
}

const SearchField: React.FC<SearchFieldProps> = ({ label }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const searchWord = useRef<HTMLInputElement>(null)
  return (
    <div className="search-field">
      <div>
        <label htmlFor="searchBook">{label}</label>
        <input type="search" id="searchBook" ref={searchWord} />
      </div>
      <button
        onClick={() => {
          if (searchWord.current?.value === "") return
          dispatch(setSearchWord(searchWord.current?.value || ""))
          dispatch(setSearchFor("title"))
          navigate("/searchbook")
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchField
