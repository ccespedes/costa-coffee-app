import Container from "./Container"
import logo from "../assets/costa.svg"
import IconBox from "./IconBox"
import { UseTheme } from "../context/ThemeProvider"
import Sheet from "./Sheet"
import { useState } from "react"
import NavButton from "./NavButton"
import { routes } from "../data"
import { Link } from "react-router-dom"

const Header = () => {
  const { theme, setTheme } = UseTheme()
  const [sideMenu, setSideMenu] = useState(false)

  const sideMenuSlide = () => {
    setSideMenu(!sideMenu)
  }

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
            <button className="md:hidden" onClick={sideMenuSlide}>
              <IconBox faName="fa-bars" />
            </button>
            <div className="hidden mx-auto md:flex gap-1">{siteMenu}</div>
          </div>
          <div className="md:col-span-1">
            <Link to="/">
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
      </Container>
    </header>
  )
}

export default Header
