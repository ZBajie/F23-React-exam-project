import "./BookSearchPage.scss"

import { useState } from "react"
import BookList from "../../components/BookList/BookList"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"

const BookSearchPage = () => {
  const [offset, setOffset] = useState(0)

  const searchWord = useSelector(
    (state: RootState) => state.searchField.searchWord
  )

  const Url = `https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}&type=work`

  const handleNext = (resultNumber: number) => {
    if (resultNumber > offset + 10) {
      setOffset(offset + 10)
    }
  }
  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - 10)
    }
  }

  return (
    <>
      {searchWord.length > 0 && (
        <section className="search-book">
          <article>
            <BookList
              url={Url}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </article>
        </section>
      )}
    </>
  )
}

export default BookSearchPage
