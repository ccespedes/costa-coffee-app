import Container from "./Container"
import logo from "../assets/costa.svg"
import IconBox from "./IconBox"
import { UseTheme } from "../context/ThemeProvider"
import Sheet from "./Sheet"
import { useState } from "react"
import NavButton from "./NavButton"

const Header = () => {
  const { theme, setTheme } = UseTheme()
  const [panel, setPanel] = useState(false)

  const slidePanel = () => {
    console.log("slide")
    setPanel(!panel)
  }

  return (
    <div className="py-4">
      <Container>
        <div
          className={`${
            panel ? "left-0" : "-left-60"
          } fixed top-0 transition-all duration-200 bg-card h-full w-60 p-6 z-10`}
        >
          Menu
        </div>
        <div
          onClick={slidePanel}
          className={`${
            panel ? "flex left-0" : "hidden"
          } fixed top-0 bg-card/50 h-screen w-full`}
        ></div>

        <div className="grid grid-cols-3 items-center md:grid-cols-6">
          {/* <div className="flex items-center justify-between"> */}
          <div className="md:order-2 md:mx-auto md:col-span-4">
            <button className="md:hidden" onClick={slidePanel}>
              <IconBox faName="fa-bars" />
            </button>
            <div className="hidden mx-auto md:flex gap-4">
              <NavButton>Menu</NavButton>
              <NavButton>Featured</NavButton>
              <NavButton>Previous</NavButton>
              <NavButton>Favorites</NavButton>
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              className="mx-auto w-20 md:mx-0"
              src={logo}
              alt="Costa Coffee"
            />
          </div>
          <div className="flex order-last md:col-span-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative flex  items-center text-muted/50 text-md text-btn-text-primary bg-btn-bg-primary my-auto ml-auto mr-4 rounded-full p-3 bg-card"
            >
              <i className="h4 w-4 fa-solid fa-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></i>
              <i className="absolute h4 w-4 fa-solid fa-moon rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></i>
            </button>

            <IconBox faName="fa-user" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header

{
  /* <div
className={`${
  panel ? "left-0" : "-left-[1200px]"
} slider fixed top-0 left-0 h-full w-full z-20`}
>
<div
  className={`${
    panel ? "left-0" : "-left-60"
  } absolute transition-all duration-200 bg-card h-full w-60 p-6 z-10`}
>
  Menu
</div>
<div
  onClick={slidePanel}
  className={`bg-card/50 h-full w-full`}
></div>
</div> */
}
