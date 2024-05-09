import "./Home.scss"
import AuthorsSavedList from "../../components/AuthorsSavedList/AuthorsSavedList"
import BooksSavedList from "../../components/BooksSavedList/BooksSavedList"
import ReadersData from "../../components/ReadersData/ReadersData"

const Home = () => {
  return (
    <section className="home-page">
      <ReadersData />
      <div className="saved-lists">
        <BooksSavedList />
        <AuthorsSavedList />
      </div>
    </section>
  )
}

export default Home
