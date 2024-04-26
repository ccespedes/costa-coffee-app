import { Link } from "react-router-dom"
import costaTextLogo from "../assets/costa-text.svg"

const Sheet = ({ sideMenu, sideMenuSlide, leftMenu }) => {
  return (
    <>
      <div
        className={`${
          sideMenu ? "left-0" : "-left-60"
        } top-0 fixed flex flex-col gap-3 transition-all duration-200 bg-card h-full w-60 z-20 md:hidden`}
      >
        <div className="absolute right-4 top-4">
          <button onClick={sideMenuSlide}>
            <i className="fa-solid fa-xmark opacity-50"></i>
          </button>
        </div>
        <div onClick={sideMenuSlide} className="flex mx-auto mt-12 mb-8">
          <Link to={"/"}>
            <img className="h-8" src={costaTextLogo} alt="Costa text logo" />
          </Link>
        </div>
        {leftMenu}
      </div>
      <div
        onClick={sideMenuSlide}
        className={`${
          sideMenu ? "flex left-0" : "hidden"
        } fixed top-0 bg-card/80 h-screen w-full z-10 md:hidden`}
      ></div>
    </>
  )
}

export default Sheet
