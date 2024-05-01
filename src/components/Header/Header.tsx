import SearchField from "../SearchField/SearchField"
import "./Header.scss"
import loggo from "../../assets/jaredd-craig-HH4WBGNyltc-unsplash(1).jpg"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="header-main">
      <Link to={"/"}>
        <img src={loggo} alt="" />
      </Link>
      <h1>Your personal library</h1>
      <SearchField label="Search by title" />
    </header>
  )
}

export default Header
