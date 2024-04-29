import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeProvider.jsx"
import { DataProvider } from "./context/StaticDataProvider.jsx"
import "./index.css"
import Layout from "./components/Layout.jsx"
import Home from "./routes/Home.jsx"
import Products from "./routes/Products.jsx"
import Favorites from "./routes/Favorites.jsx"
import Menu from "./routes/Menu.jsx"
import Featured from "./routes/Featured.jsx"
import Previous from "./routes/Previous.jsx"
import ProductDetail from "./routes/ProductDetail.jsx"
import NotFound from "./components/NotFound.jsx"
import Error from "./components/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
      { path: "/products", element: <Products /> },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        errorElement: <Error />,
      },
      { path: "/menu", element: <Menu /> },
      { path: "/featured", element: <Featured /> },
      { path: "/previous", element: <Previous /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </ThemeProvider>
)
