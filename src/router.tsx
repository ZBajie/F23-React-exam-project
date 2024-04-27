import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

export default router
