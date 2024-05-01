import "./BookList.scss"
import nocover from "../../assets/nocover.png"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { BookTitleType, BookDocType } from "../../type/BookTitleType"
import BookChosed from "./BookChosed/BookChosed"

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
              {item.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                  alt=""
                />
              ) : (
                <img src={nocover} alt="" />
              )}

              <div>
                <h3>{item.title}</h3>
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

      <BookChosed bookData={bookData} />
    </article>
  )
}

export default BookList
