import Card from "../components/Card"
import Container from "../components/Container"
import { UseDataContext } from "../context/StaticDataProvider"
import { getProducts } from "../api"
import BoxButton from "../components/BoxButton"

const Cart = () => {
  const { shoppingBag } = UseDataContext()
  const products = getProducts()
  let subtotal = 0
  // let tax = .09
  let total = 0
  // console.log(products)
  // console.log(shoppingBag)

  const cartItems = shoppingBag.map((item) => {
    const { name, image, price } = products.find(
      (product) => product.id === item.pid
    )
    subtotal += price

    return (
      <div key={item.id} className="flex items-center mb-10">
        <img className="w-12 rounded-lg mr-2" src={image} alt="" />
        <div className="flex flex-col mr-2">
          <p className="text-foreground/80">{name}</p>
          <p className="text-xs text-foreground/50 font-extralight">
            {`${item.size} ${item.milk ? `with ${item.milk} milk` : ""}`}
          </p>
        </div>
        <div className="flex gap-4 ml-auto text-foreground/50 md:gap-8">
          <i className="fa-solid fa-pen"></i>
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
        <p className="ml-4 md:ml-12">${price.toFixed(2)}</p>
      </div>
    )
  })

  return (
    <Container>
      <section className="mb-32">
        <h1 className="mb-4">Shopping cart</h1>
        <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 pb-10">
          <h2 className="text-primary mt-5 mb-8">Your order</h2>
          {cartItems}
          <div className="border-b-[.08rem] mb-4"></div>
          <div className="grid grid-cols-2 mb-5">
            <div className="flex justify-between text-foreground/50 col-span-2">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-foreground/50 col-span-2">
              <p>Tax</p>
              <p>${(subtotal * 0.09).toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center col-span-2">
              <p className="text-xl font-semibold text-foreground/80">Total</p>
              <p>${(subtotal + subtotal * 0.09).toFixed(2)}</p>
            </div>
          </div>
          <BoxButton className="py-3 px-8 w-full sm:w-56 hover:scale-105">
            Proceed to checkout
          </BoxButton>
        </Card>
      </section>
    </Container>
  )
}

export default Cart
