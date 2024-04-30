import { createContext, useContext, useEffect, useState } from "react"

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

  const isFavorite = (id, size, milk, hasMilkOptions) => {
    console.log("hasMilkOptions", hasMilkOptions)
    return favorites.some((favorite) =>
      milk
        ? favorite.id === id && favorite.size === size && favorite.milk === milk
        : favorite.id === id && favorite.size === size
    )
  }

  // console.log(favorites)

  const addToShoppingBag = (id, size, milk) => {
    // console.log("addToShoppingBag", id)
    milk
      ? setShoppingBag((prev) => [...prev, { id, size, milk }])
      : setShoppingBag((prev) => [...prev, { id, size }])
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
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export const UseDataContext = () => useContext(SiteContext)

// const localStorageFavorites = [
//   { id: 1, size: "m", milk: "Whole" },
//   { id: 1, size: "s", milk: "Whole" },
//   { id: 2, size: "m" },
// ]
// const localStorageShoppingBag = [
//   { id: 1, size: "m", milk: "Whole" },
//   { id: 2, size: "s" },
// ]

// const handleFavorite = (id, size, milk) => {
//   // console.log(id, size, milk)
//   milk
//     ? setFavorites((prev) => [...prev, { id, size, milk }])
//     : setFavorites((prev) => [...prev, { id, size }])
// }

// const handleFavorite = (id) => {
//    only one favorite allowed
//   setFavorites((prev) =>
//     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//   )
// }
