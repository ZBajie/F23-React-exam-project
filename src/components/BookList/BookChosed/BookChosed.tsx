import "./BookChosed.scss"

import { useFetch } from "../../../hooks/useFetch"
import { BookDocType } from "../../../type/BookTitleType"
import { BookChosedType } from "../../../type/BookChosedType"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../state/store"
import { addBook } from "../../../state/savedBooksSlice/savedBooksSlice"
import nocover from "../../../assets/nocover.png"
type BookProps = {
  bookData: BookDocType | null
  setShowBookInfo: (value: boolean) => void
}
const BookChosed: React.FC<BookProps> = ({ bookData, setShowBookInfo }) => {
  const dispatch = useDispatch<AppDispatch>()
  const bookUrl = `https://openlibrary.org${bookData?.key}.json`

  const { data, error, loading } = useFetch<BookChosedType>(bookUrl)

  const handleOnClickSave = () => {
    dispatch(
      addBook({
        title: bookData?.title || "",
        author: bookData?.author_name || "",
        description: data?.description || "",
        first_sentence: bookData?.first_sentence || "",
        pages: bookData?.number_of_pages_median || 0,
        first_publish_year: bookData?.first_publish_year || 0,
        editions: bookData?.edition_count || 0,
        genre: bookData?.subject[0] || "",
        key: bookData?.key || "",
        imgUrl:
          `https://covers.openlibrary.org/b/olid/${bookData?.cover_edition_key}-M.jpg` ||
          "",
        favorite: false,
        read: false,
        rate: 0,
        readerComment: "",
      })
    )
  }

  return (
    <div className="book-chosed-card">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {bookData && (
        <>
          <h2>{bookData.title}</h2>
          <div className="img-info">
            <div className="book-cover">
              {bookData.cover_edition_key ? (
                <img
                  src={`https://covers.openlibrary.org/b/olid/${bookData?.cover_edition_key}-M.jpg`}
                  alt="book cover"
                  className="book-cover"
                />
              ) : (
                <img src={nocover} alt="book cover" className="book-cover" />
              )}
            </div>

            <div className="short-info">
              <h3>{bookData.author_name}</h3>
              <p>published year: {bookData.first_publish_year}</p>
              <p>Pages: {bookData.number_of_pages_median}</p>
              <p>Editions: {bookData.edition_count}</p>
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
        <button onClick={handleOnClickSave}>Save</button>
        <button onClick={() => setShowBookInfo(false)}>Close</button>
      </footer>
    </div>
  )
}

export default BookChosed
