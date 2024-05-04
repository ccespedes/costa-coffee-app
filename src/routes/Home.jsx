import { Link } from "react-router-dom"
import BoxButton from "../components/BoxButton"
import Card from "../components/Card"
import CoffeeNav from "../components/CoffeeNav"
import Container from "../components/Container"
import { getProducts } from "../api"
import { UseDataContext } from "../context/StaticDataProvider"

const Home = () => {
  const products = getProducts()
  const { favorites } = UseDataContext()

  const menuItems = products.map((item) => {
    const isFavorite = favorites
      .map((favorite) => favorite.id === item.id)
      .some((item) => item === true)

    return (
      <Card
        key={item.id}
        // className="relative border-border bg-card p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0"
        // className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0"
        className="relative border-border bg-gradient-to-tl from-card/10 to-card/80 p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0"
      >
        <Link to={`/product/${item.id}`}>
          <div className="relative">
            <img className="rounded-2xl" src={item.image} alt={item.name} />
            <div className="absolute top-0 right-0 flex items-center gap-2 px-4 py-1 pt-0 rounded-tr-xl rounded-bl-2xl bg-card/30 backdrop-blur">
              <div>
                <i className="fa-solid fa-star text-primary text-xs"></i>
              </div>
              <div className="text-xs mt-1">{item.rating}</div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="relative">
                <h3 className="mb-4 mt-4">{item.name}</h3>
                <h3 className="absolute left-0 top-4 blur-sm text-primary/30 mb-4">
                  {item.name}
                </h3>
              </div>

              <div className="pointer-events-none">
                <i
                  className={`${
                    isFavorite ? "fa-solid" : "fa-regular"
                  } fa-heart text-xl text-foreground/30 transition-all duration-200 hover:text-foreground hover:scale-110`}
                ></i>
              </div>
            </div>
            <p className="text-sm text-foreground/50 font-extralight mb-5">
              {item.ingredients.map((ing) =>
                item.ingredients.indexOf(ing) === item.ingredients.length - 1
                  ? ing
                  : `${ing}, `
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="mb-2">${item.price.small.toFixed(2)}</h4>
            <BoxButton
              icon="fa-plus fa-solid"
              className="p-4 hover:scale-110"
            />
          </div>
        </Link>
      </Card>
    )
  })

  const popularPicks = products.map((item) => (
    <Card key={item.id} className="border-border bg-accent p-3 rounded-3xl">
      <Link className="flex" to={`/product/${item.id}`}>
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
            ${item.price.small.toFixed(2)}
          </h4>
        </div>
        <div className="flex items-center ml-auto">
          <BoxButton
            icon="fa-plus fa-solid"
            className="brightness-75 p-4 hover:scale-110"
          />
        </div>
      </Link>
    </Card>
  ))

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center pb-4 md:flex-nowrap">
        <h1 className="mt-1 leading-10 md:text-nowrap">
          <span className="block sm:inline">Find the best </span> coffee for you
        </h1>
        <input
          className="fa bg-card h-12 rounded-2xl px-4 mt-4 text-muted font-normal text-sm w-full placeholder:text-foreground/35 md:ml-4 lg:ml-28"
          type="search"
          placeholder="&#xf002;  Find your coffee"
        />
      </div>
      <section className="mb-32">
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
