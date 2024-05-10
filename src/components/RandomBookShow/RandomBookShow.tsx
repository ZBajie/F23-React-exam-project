import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import "./RandomBookShow.scss"
import { BookChosedType } from "../../type/BookChosedType"
import { BookTitleType } from "../../type/BookTitleType"
import nocover from "../../assets/nocover.png"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../state/store"
import { addBook } from "../../state/savedBooksSlice/savedBooksSlice"
import { getRandomUrlNumber } from "../../utils/randoms"

const RandomBookShow = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [url, setUrl] = useState<string>("")
  const [urlTitle, setUrlTitle] = useState<string>("")

  const { data, error, loading } = useFetch<BookChosedType>(url)
  const {
    data: dataTitle,
    error: errorTitle,
    loading: loadingTitle,
  } = useFetch<BookTitleType>(urlTitle)

  useEffect(() => {
    // Random number from 10001 to 9999999
    const url = `https://openlibrary.org/works/OL${getRandomUrlNumber(
      10001,
      9999999
    )}W.json`
    setUrl(url)
  }, [])
  useEffect(() => {
    setUrlTitle(
      `https://openlibrary.org/search.json?title=${data?.title}&type=work`
    )
  }, [data])

  const handleOnClickSave = () => {
    dispatch(
      addBook({
        title: dataTitle?.docs[0]?.title || "",
        author: dataTitle?.docs[0]?.author_name || "",
        description: data?.description || "",
        first_sentence: dataTitle?.docs[0]?.first_sentence || "",
        pages: dataTitle?.docs[0]?.number_of_pages_median || 0,
        first_publish_year: dataTitle?.docs[0]?.first_publish_year || 0,
        editions: dataTitle?.docs[0]?.edition_count || 0,
        genre: dataTitle?.docs[0]?.subject[0] || "",
        key: dataTitle?.docs[0]?.key || "",
        imgUrl:
          `https://covers.openlibrary.org/b/olid/${dataTitle?.docs[0]?.cover_edition_key}-M.jpg` ||
          "",
        favorite: false,
        read: false,
        rate: 0,
        readerComment: "",
      })
    )
  }

  return (
    <section className="random-book">
      {loading && <p>Loading...</p>}
      {loadingTitle && <p>Loading...</p>}
      {error && <p>{error.toString()}</p>}
      {errorTitle && <p>{errorTitle.toString()}</p>}
      {data && dataTitle && (
        <>
          <h2>{data.title}</h2>
          <div className="img-info">
            <div className="book-cover">
              {dataTitle.docs[0].cover_edition_key ? (
                <img
                  src={`https://covers.openlibrary.org/b/olid/${dataTitle?.docs[0]?.cover_edition_key}-M.jpg`}
                  alt="book cover"
                  className="book-cover"
                />
              ) : (
                <img src={nocover} alt="book cover" className="book-cover" />
              )}
            </div>
            <div className="short-info">
              <h3>{dataTitle.docs[0].author_name}</h3>
              <p>published year: {dataTitle.docs[0].first_publish_year}</p>
              <p>Pages: {dataTitle.docs[0].number_of_pages_median}</p>
              <p>Editions: {dataTitle.docs[0].edition_count}</p>
              {dataTitle?.docs[0]?.subject && (
                <>
                  <p>
                    Genre:
                    {dataTitle.docs[0].subject[0]},
                    {dataTitle.docs[0].subject[1]},
                    {dataTitle.docs[0].subject[2]},
                    {dataTitle.docs[0].subject[3]}
                  </p>
                </>
              )}
            </div>
          </div>
          {dataTitle.docs[0].first_sentence && (
            <div className="first-sentence">
              <p>First sentence: </p>
              <p>{dataTitle.docs[0].first_sentence}</p>
            </div>
          )}
        </>
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
      <footer>
        Random book tips.
        <button onClick={handleOnClickSave}>Save</button>
      </footer>
    </section>
  )
}

export default RandomBookShow
