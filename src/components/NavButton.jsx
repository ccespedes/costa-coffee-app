import { Link } from "react-router-dom"

const NavButton = ({ children, sideMenuSlide, left, path, icon }) => {
  const navIcon = left && <i className={`fa-solid ${icon}`}></i>

  return (
    <Link
      className="text-sm text-foreground/60 mx-4 px-5 py-2 rounded-lg flex items-center hover:bg-secondary/50 hover:text-foreground"
      to={path}
    >
      {navIcon && <div className="w-8">{navIcon}</div>}
      <button onClick={left && sideMenuSlide}>{children}</button>
    </Link>
  )
}

export default NavButton
