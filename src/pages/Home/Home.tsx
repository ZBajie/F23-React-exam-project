import AuthorsSavedList from "../../components/AuthorsSavedList/AuthorsSavedList"
import BooksSavedList from "../../components/BooksSavedList/BooksSavedList"
import ReadersData from "../../components/ReadersData/ReadersData"

const Home = () => {
  return (
    <section className="home page">
      <ReadersData />
      <BooksSavedList />
      <AuthorsSavedList />
    </section>
  )
}

export default Home
