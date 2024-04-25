import { useParams } from "react-router-dom"
import Card from "../components/Card"
import Container from "../components/Container"
import { getProducts } from "../api"
import BoxButton from "../components/BoxButton"

const ProductDetail = () => {
  const products = getProducts()
  const { id } = useParams()

  const product = products.filter((item) => item.id === parseInt(id))[0]

  const milkOptions = product.ingredients
    .map((item) => item.includes("milk"))
    .find((item) => item === true)

  console.log(milkOptions)
  //   console.log(id)
  //   console.log(product.name)

  return (
    <Container>
      <section className="mb-12">
        <Card className="relative border-border bg-card p-6 rounded-3xl min-w-64 mb-5 md:flex">
          <div className="md:mr-5 md:max-w-90">
            <img
              className="rounded-2xl mb-4 md:mb-0"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="md:flex md:flex-col md:justify-center">
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
                <BoxButton className="md:w-20" type="secondary">
                  S
                </BoxButton>
                <BoxButton className="md:w-20" type="secondary">
                  M
                </BoxButton>
                <BoxButton className="md:w-20" type="secondary">
                  L
                </BoxButton>
              </div>

              {milkOptions && (
                <>
                  <p className="text-sm font-light tracking-wide text-foreground/50 mb-2">
                    Milk
                  </p>
                  <div className="flex gap-4 justify-between">
                    <BoxButton className="md:w-20" type="secondary">
                      Whole
                    </BoxButton>
                    <BoxButton className="md:w-20" type="secondary">
                      Oat
                    </BoxButton>
                    <BoxButton className="md:w-20" type="secondary">
                      Almond
                    </BoxButton>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              <h4>${product.price.toFixed(2)}</h4>
              <BoxButton className="py-3 px-8 w-48">Add to Order</BoxButton>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  )
}

export default ProductDetail
