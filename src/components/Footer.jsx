import Container from "./Container"
import { UseDataContext } from "../context/StaticDataProvider"

const Footer = () => {
  const { shoppingBag } = UseDataContext()
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
          <div className="relative ml-auto col-span-1">
            <i className="fa-solid fa-bag-shopping text-[2.25rem] mx-2 text-primary"></i>
            <div className="absolute top-[1.6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-foreground font-semibold">
              {bagItemCount}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
