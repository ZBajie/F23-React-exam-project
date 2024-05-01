import { useDispatch } from "react-redux"
import "./SearchField.scss"
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
          dispatch(setSearchWord(searchWord.current?.value || ""))
          dispatch(setSearchFor("title"))
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchField
