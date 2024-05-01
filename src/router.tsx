import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"
import BookSearchPage from "./pages/BookSearchPage/BookSearchPage"

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
    ],
  },
])

export default router
