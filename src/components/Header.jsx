import Container from "./Container"
import logo from "../assets/costa.svg"
import IconBox from "./IconBox"
import { UseTheme } from "../context/ThemeProvider"
import Sheet from "./Sheet"
import { useState } from "react"
import NavButton from "./NavButton"
import { routes } from "../data"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const { theme, setTheme } = UseTheme()
  const [sideMenu, setSideMenu] = useState(false)

  const location = useLocation()

  const sideMenuSlide = () => {
    setSideMenu(!sideMenu)
  }

  const menuButton =
    location.pathname === "/" ? (
      <button className="md:hidden" onClick={sideMenuSlide}>
        <IconBox faName="fa-bars" />
      </button>
    ) : (
      <Link className="md:hidden" to={"."}>
        <IconBox faName="fa-chevron-left" />
      </Link>
    )

  const siteMenu = routes.map((route, i) => (
    <NavButton path={route.path} sideMenuSlide={sideMenuSlide} key={i}>
      {route.name}
    </NavButton>
  ))

  const leftMenu = routes.map((route, i) => (
    <NavButton
      path={route.path}
      sideMenuSlide={sideMenuSlide}
      left={true}
      icon={route.icon}
      key={i}
    >
      {route.name}
    </NavButton>
  ))

  return (
    <header className="mt-4">
      <Container>
        <Sheet
          leftMenu={leftMenu}
          sideMenu={sideMenu}
          sideMenuSlide={sideMenuSlide}
        />

        <div className="grid grid-cols-3 items-center md:grid-cols-6 py-4">
          <div className="md:order-2 md:mx-auto md:col-span-4">
            {/* <button className="md:hidden" onClick={sideMenuSlide}>
              <IconBox faName="fa-bars" />
            </button> */}
            {menuButton}

            <div className="hidden mx-auto md:flex gap-1">{siteMenu}</div>
          </div>
          <div className="md:col-span-1">
            <Link to=".">
              <img
                className="mx-auto w-20 md:mx-0"
                src={logo}
                alt="Costa Coffee"
              />
            </Link>
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
    </header>
  )
}

export default Header
