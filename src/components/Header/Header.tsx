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
      <div className="header-text">
        <h1>The Gray Society</h1>
        <p>Library</p>
      </div>
      <SearchField label="Search by title" />
    </header>
  )
}

export default Header
