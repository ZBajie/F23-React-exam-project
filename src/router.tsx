import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"
import BookSearchPage from "./pages/BookSearchPage/BookSearchPage"
import AuthorSearchPage from "./pages/AuthorSearchPage/AuthorSearchPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/searchbook",
        element: <BookSearchPage />,
      },
      {
        path: "searchauthor",
        element: <AuthorSearchPage />,
      },
    ],
  },
])

export default router
