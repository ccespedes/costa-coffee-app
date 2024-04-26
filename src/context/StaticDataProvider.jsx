import { createContext, useContext, useEffect, useState } from "react"

const SiteContext = createContext(null)

export const DataProvider = ({ children }) => {
  // const localStoreFavorites = [2, 3]
  const localStoreFavorites = JSON.parse(localStorage.getItem("favorites"))
  const [favorites, setFavorites] = useState(localStoreFavorites || [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <SiteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </SiteContext.Provider>
  )
}

export const UseDataContext = () => useContext(SiteContext)
