import "./AuthorChosed.scss"
import { useFetch } from "../../../hooks/useFetch"
import { AuthorChosedType } from "../../../type/AuthorChosedType"
import { Author } from "../../../type/AuthorsSearchResultType"
import { AppDispatch } from "../../../state/store"
import { useDispatch } from "react-redux"
import { addAuthor } from "../../../state/savedAuthorSlice/savedAuthorSlice"

type AuthorChosedProps = {
  authorData: Author
  setShowAuthorInfo: (value: boolean) => void
}

const AuthorChosed: React.FC<AuthorChosedProps> = ({
  authorData,
  setShowAuthorInfo,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const url = `https://openlibrary.org/authors/${authorData.key}.json`

  const { data, error, loading } = useFetch<AuthorChosedType>(url)

  const handleOnClickSave = () => {
    dispatch(
      addAuthor({
        name: authorData.name || "",
        key: authorData.key || "",
        birth_date: data?.birth_date || "",
        death_date: data?.death_date || "",
        top_work: authorData.top_work || "",
        top_subject: authorData.top_subjects[0] || "",
        bio: data?.bio || "",
        favorite: false,
      })
    )
    setShowAuthorInfo(false)
  }

  return (
    <div className="author-chosed-card">
      {loading && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {authorData && data && (
        <>
          <h2>{authorData.name}</h2>
          {authorData.top_work && <p>Top Work: {authorData.top_work}</p>}
          <p>Birth: {authorData.birth_date}</p>
          {data.death_date && <p>Death: {data.death_date}</p>}
          {data.links && <p>Webbpage: {data.links[0].url}</p>}
          {data.bio && typeof data.bio === "string" && <p>Bio: {data.bio}</p>}
          {authorData.top_subjects && (
            <p>Top Subjects: {authorData.top_subjects[0]}</p>
          )}
        </>
      )}
      <footer>
        <button onClick={handleOnClickSave}>Save</button>
        <button onClick={() => setShowAuthorInfo(false)}>Close</button>
      </footer>
    </div>
  )
}

export default AuthorChosed
