import { useFetch } from "../../hooks/useFetch"
import { BookTitleType } from "../../type/BookTitleType"

type BookProps = {
  url: string
}
const BookList: React.FC<BookProps> = ({ url }) => {
  const { data, error, loading } = useFetch<BookTitleType>(url)
  return (
    <article>
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {data && (
        <div>
          <p>{data.numFound}</p>
          {data.docs.map((doc) => (
            <p key={doc.key}>{doc.title}</p>
          ))}
          <button>Prev</button>
          <button>Next</button>
        </div>
      )}
    </article>
  )
}

export default BookList
