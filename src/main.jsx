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
import Cart from "./routes/Cart.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <Error /> },
      { path: "*", element: <NotFound /> },
      { path: "/products", element: <Products />, errorElement: <Error /> },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        errorElement: <Error />,
      },
      { path: "/menu", element: <Menu />, errorElement: <Error /> },
      { path: "/featured", element: <Featured />, errorElement: <Error /> },
      { path: "/previous", element: <Previous />, errorElement: <Error /> },
      { path: "/favorites", element: <Favorites />, errorElement: <Error /> },
      { path: "/cart", element: <Cart />, errorElement: <Error /> },
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
