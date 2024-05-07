import { useFetch } from "../../hooks/useFetch"
import { AuthorsSearchResultType } from "../../type/authorsSearchResultType"
import "./AuthorsList.scss"

type AuthorsListProps = {
  url: string
  handleNext: (resultNumber: number) => void
  handlePrev: () => void
}
const AuthorsList: React.FC<AuthorsListProps> = ({
  url,
  handleNext,
  handlePrev,
}) => {
  const { data, error, loading } = useFetch<AuthorsSearchResultType>(url)

  return (
    <article className="book-list">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {data && (
        <div>
          <h2>Search Result: {data.numFound}</h2>
          {data.docs.map((item, i) => (
            <div className="book-list-card" key={i} onClick={() => {}}>
              <div>
                <h3>{item.name}</h3>
                <p>Alternative names: {item.alternate_names}</p>
                <p>Top Work: {item.top_work}</p>
              </div>
            </div>
          ))}
          <div className="pagination-buttons">
            <button onClick={handlePrev}>Prev</button>
            <button
              onClick={() => {
                handleNext(data.numFound)
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

export default AuthorsList
