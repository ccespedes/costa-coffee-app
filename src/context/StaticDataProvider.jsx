import { createContext, useContext, useEffect, useState } from "react"
import { nanoid } from "nanoid"

const SiteContext = createContext(null)

export const DataProvider = ({ children }) => {
  const localStorageFavorites = JSON.parse(localStorage.getItem("favorites"))
  const localStorageShoppingBag = JSON.parse(
    localStorage.getItem("shoppingBag")
  )
  const [favorites, setFavorites] = useState(localStorageFavorites || [])
  const [shoppingBag, setShoppingBag] = useState(localStorageShoppingBag || [])

  const handleFavorite = (id, size, milk) => {
    const isInFavorites = favorites.some((favorite) =>
      milk
        ? favorite.id === id && favorite.size === size && favorite.milk === milk
        : favorite.id === id && favorite.size === size
    )

    const newFavorite = milk ? { id, size, milk } : { id, size }

    isInFavorites
      ? setFavorites((prev) =>
          prev.filter((favorite) =>
            milk
              ? !(
                  favorite.id === id &&
                  favorite.size === size &&
                  favorite.milk === milk
                )
              : !(favorite.id === id && favorite.size === size)
          )
        )
      : setFavorites((prev) => [...prev, newFavorite])
  }

  const isFavorite = (id, size, milk) => {
    return favorites.some((favorite) =>
      milk
        ? favorite.id === id && favorite.size === size && favorite.milk === milk
        : favorite.id === id && favorite.size === size
    )
  }

  // console.log(favorites)

  const addToShoppingBag = (id, size, milk) => {
    milk
      ? setShoppingBag((prev) => [
          ...prev,
          { id: nanoid(), pid: id, size, milk },
        ])
      : setShoppingBag((prev) => [...prev, { id: nanoid(), pid: id, size }])
  }

  const removeFromShoppingBag = (id) => {
    setShoppingBag((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
    localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag))
  }, [favorites, shoppingBag])

  return (
    <SiteContext.Provider
      value={{
        favorites,
        handleFavorite,
        isFavorite,
        shoppingBag,
        addToShoppingBag,
        removeFromShoppingBag,
        setShoppingBag,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export const UseDataContext = () => useContext(SiteContext)
