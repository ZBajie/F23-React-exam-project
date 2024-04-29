import "./SearchBook.scss"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { BookTitleType } from "../../type/BookTitleType"
import BookList from "../BookList/BookList"

// fetch book oid by id
// https://openlibrary.org/api/books?bibkeys=OLID:OL123M&jscmd=data&format=json

// https://openlibrary.org/works/OL14926019W.json

// fetch author by oid
// https://openlibrary.org/authors/OL26320A.json

// fetch book by title
// https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=10&offset=10

const SearchBook = () => {
  const [offset, setOffset] = useState(0)
  const [searchWord, setSearchWord] = useState("")
  const [url, setUrl] = useState(``)

  const handleSearch = () => {
    setOffset(0)
    setUrl(
      `https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}`
    )
  }
  const { data, error, loading } = useFetch<BookTitleType>(url)

  console.log(data)
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
      <article>{url.length > 0 && <BookList url={url} />}</article>
    </section>
  )
}

export default SearchBook
