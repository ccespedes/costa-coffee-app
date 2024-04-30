import React from "react"
import Container from "../components/Container"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import BoxButton from "../components/BoxButton"
import { UseDataContext } from "../context/StaticDataProvider"
import { getProducts } from "../api"

const Favorites = () => {
  const { favorites, isFavorite, handleFavorite, addToShoppingBag } =
    UseDataContext()
  const products = getProducts()
  console.log(products)

  const favoriteList = favorites.map((favorite) => {
    const { name, price, image } = products.filter(
      (item) => item.id === favorite.id
    )[0]

    console.log(name)
    return (
      <Card
        key={favorite.id}
        className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 mb-5"
      >
        <div className="flex">
          <div>
            <img
              className="rounded-2xl max-w-28 mr-4"
              src={image}
              alt="espresso"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="">{name}</h3>
            <p className="text-sm text-foreground/50 font-extralight mb-2">
              {`${favorite.size} ${
                favorite.milk ? `with ${favorite.milk} milk` : ""
              }`}
            </p>
            <h4 className="mb-2">${price.toFixed(2)}</h4>
          </div>
          <div className="relative flex flex-col justify-around items-center ml-auto">
            <button
              className="absolute top-3 right-4"
              onClick={() =>
                handleFavorite(favorite.id, favorite.size, favorite.milk)
              }
            >
              <i
                className={`${
                  isFavorite(favorite.id, favorite.size, favorite.milk)
                    ? "fa-solid"
                    : "fa-regular"
                } fa-heart text-xl text-foreground/80 transition-all duration-200 hover:text-foreground hover:scale-110`}
              ></i>
            </button>

            <BoxButton
              onClick={() =>
                addToShoppingBag(
                  parseInt(favorite.id),
                  favorite.size,
                  favorite.milk
                )
              }
              className="absolute right-0 bottom-2 py-2 px-4 max-w-36 min-w-[8rem] sm:px-6 sm:min-w-[9rem]"
            >
              Add to Order
            </BoxButton>
          </div>
        </div>
      </Card>
    )
  })

  return (
    <Container>
      <section className="mb-32">
        <h1 className="mb-2">Favorites</h1>
        {favorites.length > 0 ? (
          favoriteList
        ) : (
          <>
            <Card className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 mb-5 md:mb-0">
              <div className="favorite relative aspect-square rounded-2xl bg-[url('/src/assets/favorite-photo.jpg')] bg-no-repeat bg-cover bg-[center_left_-3rem] sm:bg-[center_left_-4rem]  md:aspect-video mb-5"></div>
              <p className="font-thin text-center mb-5">
                😍 Your favorite items will be displayed here. 😍
              </p>
            </Card>
          </>
        )}
      </section>
    </Container>
  )
}

export default Favorites

{
  /* 
  <Card className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0">
            <div className="flex">
              <div>
                <img
                  className="rounded-2xl max-w-28 mr-4"
                  src={espressoImage}
                  alt="espresso"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="">Capuccho</h3>
                <p className="text-sm text-foreground/50 font-extralight mb-2">
                  Large with whole milk
                </p>
                <h4 className="mb-2">$4.20</h4>
              </div>
              <div className="flex flex-col justify-between items-center ml-auto">
                <i className="fa-solid fa-heart text-2xl"></i>
                <BoxButton icon="fa-plus fa-solid" className="p-4" />
              </div>
            </div>
          </Card>
  */
}
