import "./BookChosed.scss"

import { useFetch } from "../../../hooks/useFetch"
import { BookDocType } from "../../../type/BookTitleType"
import { BookChosedType } from "../../../type/BookChosedType"
type BookProps = {
  bookData: BookDocType | null
  setShowBookInfo: (value: boolean) => void
}
const BookChosed: React.FC<BookProps> = ({ bookData, setShowBookInfo }) => {
  const bookUrl = `https://openlibrary.org${bookData?.key}.json`

  const { data, error, loading } = useFetch<BookChosedType>(bookUrl)

  return (
    <div className="book-chosed-card">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {bookData && (
        <>
          <h2>{bookData.title}</h2>
          <div className="img-info">
            <img
              src={`https://covers.openlibrary.org/b/olid/${bookData.cover_edition_key}-M.jpg`}
              alt="Cover image"
            />
            <div className="short-info">
              <h3>{bookData.author_name}</h3>
              <p>published year: {bookData.first_publish_year}</p>
              <p>Pages: {bookData.number_of_pages_median}</p>
              <p>Editions: {bookData.edition_count}</p>
              <p>{bookData.person}</p>
              {bookData.subject && (
                <>
                  <p>
                    Genre:
                    {bookData.subject[0]}, {bookData.subject[1]},
                    {bookData.subject[2]}, {bookData.subject[3]}
                  </p>
                </>
              )}
            </div>
          </div>
          {bookData.first_sentence && (
            <div className="first-sentence">
              <p>First sentence: </p>
              <p>{bookData.first_sentence}</p>
            </div>
          )}

          {data && (
            <>
              {data.description && (
                <div className="description">
                  <p>Description: </p>
                  {typeof data.description === "string" ? (
                    <p>{data.description}</p>
                  ) : (
                    <p>{data.description.value}</p>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}
      <footer>
        <button onClick={() => setShowBookInfo(false)}>Close</button>
      </footer>
    </div>
  )
}

export default BookChosed
