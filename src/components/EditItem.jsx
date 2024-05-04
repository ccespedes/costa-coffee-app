import Card from "./Card"
import { getProducts } from "../api"
import { drinkSizes, milkOptions } from "../data"
import { UseDataContext } from "../context/StaticDataProvider"
import BoxButton from "./BoxButton"
import { useState } from "react"

const EditItem = ({ id, setEditItem }) => {
  //   console.log(id)
  const products = getProducts()
  const { shoppingBag } = UseDataContext()

  const { pid, size, milk } = shoppingBag.find((item) => item.id === id)
  const [newSize, setNewSize] = useState(size)

  const product = products.find((product) => product.id === pid)

  const [milkType, setMilkType] = useState(milk ? milk : "")
  const productPrice = product.price[size]

  const handleSetSize = (newSize) => {
    setNewSize(newSize)
  }

  const handleSetMilkType = (newOption) => {
    setMilkType(newOption)
  }

  const handleEditItem = () => {
    console.log(id)
    console.log("shopping bag:", id, size, milk)
    console.log("edited item", id, newSize, milkType)
  }

  const drinkSizeButtons = drinkSizes.map((drinkSize, i) => (
    <BoxButton
      onClick={() => handleSetSize(drinkSize)}
      key={i}
      className={`w-full ${
        drinkSize === newSize
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
      className={`w-full ${
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
    <>
      <div className="modal fixed right-0 left-0 top-0 bottom-0 m-auto z-20">
        <div className="flex h-screen">
          <Card className="card relative border-border bg-card p-6 rounded-3xl max-w-96 m-auto shadow-3xl z-20">
            {/* box-shadow: 0px 0px 24px #0000007d */}
            <div>
              <img
                className="rounded-2xl mb-4"
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="md:flex md:flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-light text-primary">Edit {product.name}</h3>
                <h4 className="font-light mt-[.2rem]">
                  ${productPrice.toFixed(2)}
                </h4>
              </div>

              <div className="mb-10">
                <p className="text-sm font-light tracking-wide text-foreground/50 mb-2">
                  Size
                </p>
                <div className="flex gap-4 justify-between mb-5">
                  {drinkSizeButtons}
                </div>

                {milk && (
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

              <div className="flex gap-8 items-center justify-between mt-auto mb-4">
                <BoxButton
                  onClick={() => setEditItem({ show: false })}
                  className="py-2 px-8 w-48 bg-secondary hover:scale-105"
                >
                  Cancel
                </BoxButton>
                <BoxButton
                  // onClick={() => addToShoppingBag(parseInt(id), size, milkType)}
                  onClick={() => handleEditItem()}
                  className="py-2 px-8 w-48 hover:scale-105"
                >
                  Edit item
                </BoxButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="modal-cover flex left-0 fixed top-0 bg-black/80 dark:bg-secondary/75 h-full w-full z-10"></div>
    </>
  )
}

export default EditItem
