import { useSelector } from "react-redux"
import "./AuthorSearchPage.scss"
import { RootState } from "../../state/store"
import { useState } from "react"
import AuthorsList from "../../components/AuthorsList/AuthorsList"
const AuthorSearchPage = () => {
  const [offset, setOffset] = useState(0)
  const searchWord = useSelector(
    (state: RootState) => state.searchField.searchWord
  )

  const Url = `https://openlibrary.org/search/authors.json?q=${searchWord}&limit=10&offset=${offset}`

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
        <section className="search-author">
          <article>
            <AuthorsList
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

export default AuthorSearchPage
