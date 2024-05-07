import { useState } from "react"
import { Link } from "react-router-dom"
import { UseDataContext } from "../context/StaticDataProvider"
import { getProducts } from "../api"
import Card from "../components/Card"
import Container from "../components/Container"
import BoxButton from "../components/BoxButton"
import EditItem from "../components/EditItem"
import Modal from "../components/Modal"
import { UseToast } from "../context/ToastService"

const Cart = () => {
  const toast = UseToast()
  const products = getProducts()
  const { shoppingBag, removeFromShoppingBag, isFavorite, handleFavorite } =
    UseDataContext()
  const [editItem, setEditItem] = useState({ show: false })

  let subtotal = 0
  let tax = 0.09

  const handleEdit = (id, pid) => {
    setEditItem({ show: true, id, pid })
  }

  const handleRemoveFromShoppingBag = (id, name) => {
    removeFromShoppingBag(id)
    toast.open(name, "successfully deleted", "fa-circle-check")
  }

  const doHandleFavorite = (id, size, milk, name) => {
    handleFavorite(id, size, milk)
    toast.open(
      name,
      isFavorite(id, size, milk)
        ? "removed from favorites"
        : "added to favorites",
      "fa-heart"
    )
  }

  const cartItems = shoppingBag.map((item) => {
    const { name, image, price, id } = products.find(
      (product) => product.id === item.pid
    )
    const productPrice = price[item.size]
    subtotal += productPrice

    return (
      <div key={item.id} className="flex items-center mb-10">
        <img className="w-12 rounded-lg mr-2" src={image} alt="" />
        <div className="flex flex-col mr-2">
          <p className="text-foreground/80">{name}</p>
          <p className="text-xs text-foreground/50 font-extralight">
            {`${item.size} ${item.milk ? `with ${item.milk} milk` : ""}`}
          </p>
        </div>
        <div className="flex items-center ml-auto text-foreground/50 md:gap-8">
          <button onClick={() => handleEdit(item.id, id)}>
            <i className="fa-solid fa-pen p-2 transition-all duration-200 hover:text-foreground hover:scale-110"></i>
          </button>

          <button onClick={() => handleRemoveFromShoppingBag(item.id, name)}>
            <i className="fa-solid fa-trash p-2 transition-all duration-200 hover:text-foreground hover:scale-110"></i>
          </button>

          <button
            onClick={() => doHandleFavorite(id, item.size, item.milk, name)}
          >
            <i
              className={`${
                isFavorite(id, item.size, item.milk) ? "fa-solid" : "fa-regular"
              } fa-heart text-lg p-2 transition-all duration-200 hover:text-foreground hover:scale-110`}
            ></i>
          </button>
        </div>
        <p className="ml-4 md:ml-12">${productPrice.toFixed(2)}</p>
      </div>
    )
  })

  return (
    <>
      <Container>
        <section className="mb-32">
          <h1 className="mb-4">Shopping cart</h1>
          {shoppingBag.length !== 0 ? (
            <>
              <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 pb-10">
                <h2 className="text-primary font-normal mt-5 mb-8">
                  Your order
                </h2>
                {cartItems}
                <div className="border-b-[.08rem] mb-4"></div>
                <div className="grid grid-cols-2 mb-5">
                  <div className="flex justify-between text-foreground/50 col-span-2">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-foreground/50 col-span-2">
                    <p>Tax</p>
                    <p>${(subtotal * tax).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center col-span-2">
                    <p className="text-xl font-semibold text-foreground/80">
                      Total
                    </p>
                    <p>${(subtotal + subtotal * tax).toFixed(2)}</p>
                  </div>
                </div>
                <BoxButton className="py-3 px-8 w-full sm:w-56 hover:scale-105">
                  Proceed to checkout
                </BoxButton>
              </Card>
            </>
          ) : (
            <>
              <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 pb-10">
                <div className="absolute bottom-0 left-0 right-0 top-0 aspect-square m-6 rounded-2xl bg-[url('/src/assets/empty-cart.jpg')] bg-no-repeat bg-cover bg-center md:aspect-video"></div>
                <div className="relative aspect-square rounded-2xl bg-card/80 md:aspect-video">
                  <div className="grid h-full place-items-center">
                    <div className="flex flex-col gap-10">
                      <h2>Your cart is empty</h2>
                      <Link to="/">
                        <BoxButton className="mx-auto py-3 px-8 w-full hover:scale-105 sm:w-48">
                          Get some coffee
                        </BoxButton>
                      </Link>
                    </div>
                  </div>
                </div>
                {cartItems}
              </Card>
            </>
          )}
        </section>
      </Container>
      <Modal
        open={editItem["show"]}
        onClose={() => setEditItem({ show: false })}
      >
        {editItem["show"] && (
          <EditItem
            id={editItem["id"]}
            pid={editItem["pid"]}
            setEditItem={setEditItem}
          />
        )}
      </Modal>
    </>
  )
}

export default Cart
