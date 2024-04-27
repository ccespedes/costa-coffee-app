import { createContext, useContext, useEffect, useState } from "react"

const SiteContext = createContext(null)

export const DataProvider = ({ children }) => {
  // const localStorageFavorites = [2, 3]
  const localStorageShoppingBag = [
    { id: 1, size: "m", milk: "Whole" },
    { id: 2, size: "s" },
  ]
  const localStorageFavorites = JSON.parse(localStorage.getItem("favorites"))
  const [favorites, setFavorites] = useState(localStorageFavorites || [])
  const [shoppingBag, setShoppingBag] = useState(localStorageShoppingBag || [])

  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const addToShoppingBag = (id, size, milk) => {
    console.log("addToShoppingBag", id)
    milk
      ? setShoppingBag((prev) => [...prev, { id, size, milk }])
      : setShoppingBag((prev) => [...prev, { id, size }])
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <SiteContext.Provider
      value={{ favorites, handleFavorite, shoppingBag, addToShoppingBag }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export const UseDataContext = () => useContext(SiteContext)
