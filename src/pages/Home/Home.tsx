import BooksSavedList from "../../components/BooksSavedList/BooksSavedList"
import ReadersData from "../../components/ReadersData/ReadersData"

const Home = () => {
  return (
    <section className="home page">
      <ReadersData />
      <BooksSavedList />
    </section>
  )
}

export default Home
