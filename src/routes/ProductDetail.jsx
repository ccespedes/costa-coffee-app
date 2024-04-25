import { useParams } from "react-router-dom"
import Card from "../components/Card"
import Container from "../components/Container"
import { getProducts } from "../api"
import BoxButton from "../components/BoxButton"

const ProductDetail = () => {
  const products = getProducts()
  const { id } = useParams()

  const product = products.filter((item) => item.id === parseInt(id))[0]

  console.log(id)
  console.log(product.name)

  return (
    <Container>
      <section className="mb-12">
        <h1 className="mb-4">{product.name}</h1>
        <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 md:mb-0">
          <div>
            <img
              className="rounded-2xl mb-4"
              src={product.image}
              alt={product.name}
            />
          </div>
          <p className="text-sm text-foreground/50 font-extralight mb-4">
            {product.phonetic}
          </p>
          <p className="text-sm text-foreground/75 mb-10">
            {product.description}
          </p>

          <div className="flex gap-4 justify-between mb-10">
            <BoxButton type="secondary">S</BoxButton>
            <BoxButton type="secondary">M</BoxButton>
            <BoxButton type="secondary">L</BoxButton>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h4>${product.price.toFixed(2)}</h4>
            <BoxButton className="py-3 px-8">Add to Order</BoxButton>
          </div>
        </Card>
      </section>
    </Container>
  )
}

export default ProductDetail
