import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Card from "../components/Card"
import Container from "../components/Container"
import { getProducts } from "../api"
import BoxButton from "../components/BoxButton"
import { UseDataContext } from "../context/StaticDataProvider"
import { drinkSizes, milkOptions } from "../data"
import { UseToast } from "../context/ToastService"

const ProductDetail = () => {
  const { id } = useParams()
  const { handleFavorite, isFavorite, addToShoppingBag } = UseDataContext()
  const [size, setSize] = useState("medium")
  const toast = UseToast()

  const products = getProducts()
  const product = products.filter((item) => item.id === parseInt(id))[0]
  const hasMilkOptions = product.ingredients
    .map((item) => item.includes("milk"))
    .find((item) => item === true)
  const [milkType, setMilkType] = useState(hasMilkOptions ? milkOptions[0] : "")

  const handleSetSize = (newSize) => {
    setSize(newSize)
  }

  const handleSetMilkType = (newOption) => {
    setMilkType(newOption)
  }

  const handleAddToBag = () => {
    addToShoppingBag(parseInt(id), size, milkType)
    toast.open(product.name, "added to bag", "fa-bag-shopping")
  }

  const doHandleFavorite = () => {
    handleFavorite(product.id, size, milkType)
    toast.open(
      product.name,
      isFavorite(product.id, size, milkType)
        ? "removed from favorites"
        : "added to favorites",
      "fa-heart"
    )
  }

  const productPrice = product.price[size]

  const drinkSizeButtons = drinkSizes.map((drinkSize, i) => (
    <BoxButton
      onClick={() => handleSetSize(drinkSize)}
      key={i}
      className={`w-full sm:px-12 md:w-20 ${
        drinkSize === size
          ? "bg-primary text-foreground hover:text-foreground"
          : "bg-secondary/50 text-foreground/50 hover:text-primary"
      }`}
      type="secondary"
    >
      {drinkSize[0].toUpperCase()}
    </BoxButton>
  ))

  const milkOptionButtons = milkOptions.map((option, i) => (
    <BoxButton
      onClick={() => handleSetMilkType(option)}
      key={i}
      className={`w-full sm:px-12 md:w-20 ${
        option === milkType
          ? "bg-primary text-foreground hover:text-foreground"
          : "bg-secondary/50 text-foreground/50 hover:text-primary"
      }`}
      type="secondary"
    >
      {option[0].toUpperCase() + option.slice(1)}
    </BoxButton>
  ))

  return (
    <Container>
      <section className="mb-32">
        <p className="hidden text-xs font-light tracking-wide text-foreground/50 mt-5 mb-10 md:flex">
          <Link className="hover:underline hover:text-primary" to={"/"}>
            Home
          </Link>{" "}
          &nbsp;/ Products / Capuccino
        </p>
        <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 md:flex">
          <div className="relative md:mr-5 md:max-w-90">
            <img
              className="rounded-2xl mb-4 md:mb-0"
              src={product.image}
              alt={product.name}
            />
            <div className="absolute px-4 py-5 pt-4 left-0 right-0 bottom-0 rounded-2xl bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between px-2">
                <div className="flex gap-2 items-center">
                  <div>
                    <i className="fa-solid fa-star text-primary text-sm"></i>
                  </div>
                  <div className="text-sm mt-1">{product.rating}</div>
                </div>

                <button onClick={doHandleFavorite}>
                  <i
                    className={`${
                      isFavorite(product.id, size, milkType)
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-heart text-xl text-foreground/80 transition-all duration-200 hover:text-foreground hover:scale-110`}
                  ></i>
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col">
            <h1 className="mb-2">{product.name}</h1>
            <p className="text-sm text-foreground/50 font-extralight mb-4">
              {product.phonetic}
            </p>
            <p className="text-sm font-light tracking-wide text-foreground/75 mb-10">
              {product.description}
            </p>

            <div className="mb-10">
              <p className="text-sm font-light tracking-wide text-foreground/50 mb-2">
                Size
              </p>
              <div className="flex gap-4 justify-between mb-5">
                {drinkSizeButtons}
              </div>

              {hasMilkOptions && (
                <>
                  <p className="text-sm font-light tracking-wide text-foreground/50 mb-2">
                    Milk
                  </p>
                  <div className="flex gap-4 justify-between">
                    {milkOptionButtons}
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center justify-between mt-auto mb-4">
              <h4>${productPrice.toFixed(2)}</h4>
              <BoxButton
                // onClick={() => addToShoppingBag(parseInt(id), size, milkType)}
                onClick={handleAddToBag}
                className="py-3 px-8 w-48 hover:scale-105"
              >
                Add to order
              </BoxButton>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  )
}

export default ProductDetail
