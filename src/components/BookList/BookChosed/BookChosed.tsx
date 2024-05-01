import { useFetch } from "../../../hooks/useFetch"
import { BookDocType } from "../../../type/BookTitleType"
import { BookChosedType } from "../../../type/BookChosedType"
type BookProps = {
  bookData: BookDocType | null
}
const BookChosed: React.FC<BookProps> = ({ bookData }) => {
  const bookUrl = `https://openlibrary.org${bookData?.key}.json`

  const { data, error, loading } = useFetch<BookChosedType>(bookUrl)

  return (
    <div className="book-chosed-card">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {bookData && (
        <>
          <h2>Book chosed</h2>

          <h3>{bookData.title}</h3>
          <p>{bookData.author_name}</p>
          <p>Editions: {bookData.edition_count}</p>
          <p>published year: {bookData.first_publish_year}</p>
          <p>Pages: {bookData.number_of_pages_median}</p>
          <p>First sentence: {bookData.first_sentence}</p>
          <h3>Key: {bookData.key}</h3>

          <img
            src={`https://covers.openlibrary.org/b/olid/${bookData.cover_edition_key}-M.jpg`}
            alt="Cover image"
          />
          {bookData.subject && (
            <h3>
              Subject:
              {bookData.subject[0]} {bookData.subject[1]} {bookData.subject[2]}
              {bookData.subject[3]}
            </h3>
          )}

          {data && (
            <>
              {data.description && (
                <div>
                  {typeof data.description === "string" ? (
                    <h3>{data.description}</h3>
                  ) : (
                    <h3>{data.description.value}</h3>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default BookChosed
