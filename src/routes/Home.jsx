import { Link } from "react-router-dom"
import BoxButton from "../components/BoxButton"
import Card from "../components/Card"
import CoffeeNav from "../components/CoffeeNav"
import Container from "../components/Container"
import { getProducts } from "../api"

const Home = () => {
  const products = getProducts()

  const menuItems = products.map((item) => (
    <Card className="relative border-border bg-card p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0">
      <Link to={`/products/${item.id}`} key={item.id}>
        <div>
          <img className="rounded-2xl" src={item.image} alt={item.name} />
        </div>
        <div>
          <h3 className="mb-4 mt-4">{item.name}</h3>
          <p className="text-sm text-foreground/50 font-extralight mb-5">
            {item.ingredients.map((ing) =>
              item.ingredients.indexOf(ing) === item.ingredients.length - 1
                ? ing
                : `${ing}, `
            )}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="mb-2">${item.price.toFixed(2)}</h4>
          <BoxButton icon="fa-plus fa-solid" className="p-4" />
        </div>
      </Link>
    </Card>
  ))

  const popularPicks = products.map((item) => (
    <Card
      key={item.id}
      className="flex border-border bg-accent p-3 rounded-3xl cursor-pointer"
    >
      <div>
        <img
          className="rounded-2xl max-w-28 mr-4"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="brightness-75">{item.name}</h3>
        <p className="text-sm text-foreground/50 font-extralight dark:text-accent-foreground">
          {item.ingredients.map((ing) =>
            item.ingredients.indexOf(ing) === item.ingredients.length - 1
              ? ing
              : `${ing}, `
          )}
        </p>
        <h4 className="dark:text-accent-foreground mb-2">
          ${item.price.toFixed(2)}
        </h4>
      </div>
      <div className="flex items-center ml-auto">
        <BoxButton icon="fa-plus fa-solid" className="brightness-75 p-4" />
      </div>
    </Card>
  ))

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center pb-4 md:flex-nowrap">
        <h1 className="mt-1 leading-10 md:text-nowrap">
          Find the best coffee for you
        </h1>
        <input
          className="fa bg-card h-12 rounded-2xl px-4 mt-4 text-muted font-normal text-sm w-full placeholder:text-foreground/35 md:ml-4 lg:ml-28"
          type="search"
          placeholder="&#xf002;  Find your coffee"
        />
      </div>
      <section className="mb-12">
        <div className="nav-container flex overflow-x-auto mb-4 -mx-4 px-4">
          <CoffeeNav />
        </div>
        <div className="custom-scrollbar relative flex gap-4 mb-5 overflow-x-auto -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {menuItems}
        </div>

        <div className="mb-5">
          <h2 className="mb-4">Popular picks</h2>
          <div className="grid gap-4 md:grid-cols-2">{popularPicks}</div>
        </div>
      </section>
    </Container>
  )
}

export default Home
