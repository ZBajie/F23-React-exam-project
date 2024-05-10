import "./Home.scss"
import AuthorsSavedList from "../../components/AuthorsSavedList/AuthorsSavedList"
import BooksSavedList from "../../components/BooksSavedList/BooksSavedList"
import ReadersData from "../../components/ReadersData/ReadersData"
import RandomBookShow from "../../components/RandomBookShow/RandomBookShow"

const Home = () => {
  return (
    <section className="home-page">
      <ReadersData />
      <RandomBookShow />
      <div className="saved-lists">
        <BooksSavedList />
        <AuthorsSavedList />
      </div>
    </section>
  )
}

export default Home
