import React from "react"
import Container from "../components/Container"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import espressoImage from "../assets/espresso.jpg"
import BoxButton from "../components/BoxButton"

const Favorites = () => {
  return (
    <Container>
      <h1 className="mb-2">Favorites</h1>
      <Card className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 cursor-pointer mb-5 md:mb-0">
        <Link className="flex" to={``}>
          <div>
            <img
              className="rounded-2xl max-w-28 mr-4"
              src={espressoImage}
              alt="espresso"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="">Capuccho</h3>
            <p className="text-sm text-foreground/50 font-extralight mb-2">
              milk
            </p>
            <h4 className="mb-2">$4.20</h4>
          </div>
          <div className="flex flex-col justify-between items-center ml-auto">
            <i class="fa-solid fa-heart text-2xl"></i>
            <BoxButton icon="fa-plus fa-solid" className="p-4" />
          </div>
        </Link>
      </Card>
    </Container>
  )
}

export default Favorites
