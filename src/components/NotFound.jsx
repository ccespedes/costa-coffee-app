import { Link } from "react-router-dom"
import BoxButton from "./BoxButton"
import Container from "./Container"

const NotFound = () => {
  return (
    <div className="text-center flex flex-col align-center justify-center h-[66vh]">
      <Container>
        <div className="flex flex-col">
          <h2 className="text-center font-semibold text-2xl mb-6">
            Sorry, the page you were looking for was not found.
          </h2>
          <Link to="." className="mx-auto">
            <BoxButton
              onClick={() => handleAddToShoppingBag(id)}
              className="py-3 px-8 w-48"
            >
              Back to home
            </BoxButton>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
