import Container from "./Container"
import { UseDataContext } from "../context/StaticDataProvider"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const { shoppingBag } = UseDataContext()
  const [scaleBag, setScaleBag] = useState(false)

  const handleScaleBag = () => {
    setScaleBag(true)
    setTimeout(() => {
      setScaleBag(false)
    }, 100)
  }

  useEffect(() => {
    // console.log("useEffect ran")
    handleScaleBag()
  }, [shoppingBag])

  const bagItemCount = shoppingBag.length
  // console.log(shoppingBag, bagItemCount)

  return (
    <footer className="fixed bottom-0 mx-auto py-5 bg-card w-full">
      <Container>
        <div className="grid items-center grid-cols-6">
          <div className="col-span-1"></div>
          <p className="text-xs text-muted/75 mx-auto col-span-4">
            &copy; 2024 Costa Coffee
          </p>
          {/* <div className="relative ml-auto col-span-1 scale-125">
            <i className="fa-solid fa-bag-shopping text-[2.25rem] mx-2 text-primary"></i>
            <div className="absolute top-[1.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-foreground font-semibold">
              {bagItemCount}
            </div>
          </div> */}

          <Link
            to={"cart"}
            className={`relative ml-auto col-span-1 transform transition-transform duration-200 ease-out hover:scale-110 ${
              scaleBag && "scale-125"
            } `}
          >
            <i className="fa-solid fa-bag-shopping text-[2.25rem] mx-2 text-primary"></i>
            <div className="absolute top-[1.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-foreground font-semibold">
              {bagItemCount}
            </div>
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
