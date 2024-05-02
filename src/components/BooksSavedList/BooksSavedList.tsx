import { useSelector } from "react-redux"
import { RootState } from "../../state/store"

const BooksSavedList = () => {
  const BooksSavedList = useSelector(
    (state: RootState) => state.savedBooks.savedBooks
  )
  return <div>BooksSavedList</div>
}

export default BooksSavedList
