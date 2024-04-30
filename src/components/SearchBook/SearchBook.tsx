import "./SearchBook.scss"
import { useState } from "react"
import BookList from "../BookList/BookList"

const SearchBook = () => {
  const [offset, setOffset] = useState(0)
  const [searchWord, setSearchWord] = useState("")
  const [url, setUrl] = useState(``)

  const handleSearch = () => {
    setOffset(0)

    setUrl(
      `https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}&type=work`
    )
  }

  const handleNext = (resultNumber: number) => {
    if (resultNumber > offset + 10) {
      setOffset(offset + 10)
      setUrl(
        `https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}`
      )
    }
  }
  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - 10)
      setUrl(
        `https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}`
      )
    }
  }

  return (
    <section className="search-book">
      <div className="search-field">
        <div>
          <label htmlFor="searchBook">Search book by title</label>
          <input
            type="search"
            id="searchBook"
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <article>
        {url.length > 0 && (
          <BookList url={url} handleNext={handleNext} handlePrev={handlePrev} />
        )}
      </article>
    </section>
  )
}

export default SearchBook
