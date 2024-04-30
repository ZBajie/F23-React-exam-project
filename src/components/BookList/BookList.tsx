import "./BookList.scss"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { BookTitleType, BookDocType } from "../../type/BookTitleType"

type BookProps = {
  url: string
  handleNext: (resultNumber: number) => void
  handlePrev: () => void
}
const BookList: React.FC<BookProps> = ({ url, handleNext, handlePrev }) => {
  const { data, error, loading } = useFetch<BookTitleType>(url)
  console.log(data)

  const [bookData, setBookData] = useState<BookDocType | null>(null)
  return (
    <article className="book-list">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {data && (
        <div>
          <h2>Search Result: {data.numFound}</h2>
          {data.docs.map((item) => (
            <div
              className="book-list-card"
              key={item.key}
              onClick={() => setBookData(item)}
            >
              <img
                src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
                alt=""
              />
              <div>
                <p>{item.title}</p>
                <p>{item.author_name}</p>
                <p>Editions: {item.edition_count}</p>
              </div>
            </div>
          ))}
          <button onClick={handlePrev}>Prev</button>
          <button
            onClick={() => {
              handleNext(data.numFound)
            }}
          >
            Next
          </button>
        </div>
      )}
      {bookData && (
        <div>
          <h3>{bookData.title}</h3>
          <p>{bookData.author_name}</p>
          <p>Editions: {bookData.edition_count}</p>
          <p>published year: {bookData.first_publish_year}</p>
          <p>Pages: {bookData.number_of_pages_median}</p>
          <p>First sentence: {bookData.first_sentence}</p>
          <h3>Key: {bookData.key}</h3>
          <h3>
            subject: {bookData.subject[0]} {bookData.subject[1]}
            {bookData.subject[2]} {bookData.subject[3]}
          </h3>

          <img
            src={`https://covers.openlibrary.org/b/olid/${bookData.cover_edition_key}-M.jpg`}
            alt=""
          />
        </div>
      )}
    </article>
  )
}

export default BookList
