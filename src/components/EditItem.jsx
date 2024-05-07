import { useState } from "react"
import { getProducts } from "../api"
import { drinkSizes, milkOptions } from "../data"
import { UseDataContext } from "../context/StaticDataProvider"
import BoxButton from "./BoxButton"
import { UseToast } from "../context/ToastService"

const EditItem = ({ id, setEditItem }) => {
  const toast = UseToast()
  const products = getProducts()
  const { shoppingBag, setShoppingBag } = UseDataContext()

  const { pid, size, milk } = shoppingBag.find((item) => item.id === id)
  const [newSize, setNewSize] = useState(size)

  const product = products.find((product) => product.id === pid)

  const [milkType, setMilkType] = useState(milk ? milk : "")
  const productPrice = product.price[newSize]

  const handleSetSize = (newSize) => {
    setNewSize(newSize)
  }

  const handleSetMilkType = (newOption) => {
    setMilkType(newOption)
  }

  const handleEditItem = () => {
    const updatedItem = milkType
      ? { id, pid, size: newSize, milkType }
      : { id, pid, size: newSize }
    console.log("updatedItem ", updatedItem)
    setShoppingBag((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    )
    setEditItem({ show: false })
    toast.open(product.name, "successfully edited", "fa-circle-check")
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
          <h4 className="font-light mt-[.2rem]">${productPrice.toFixed(2)}</h4>
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
    </>
  )
}

export default EditItem
