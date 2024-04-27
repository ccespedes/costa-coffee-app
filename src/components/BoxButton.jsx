import React from "react"

const BoxButton = ({ className, children, icon, type, onClick }) => {
  const defaultClasses =
    type === "secondary"
      ? "flex items-center justify-center border-[0.08rem] border-card py-[0.3rem] rounded-[0.7rem] transition-all duration-200 hover:border-[0.08rem] hover:border-primary sm:px-12"
      : "flex items-center justify-center bg-primary transition-all duration-200  hover:scale-110"

  return icon ? (
    <>
      <div className="relative">
        <button
          className={`${defaultClasses} rounded-xl ${className}`}
        ></button>
        <i
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${icon}`}
        ></i>
      </div>
    </>
  ) : (
    <button
      onClick={onClick}
      className={`${defaultClasses} rounded-2xl ${className}`}
    >
      {children}
    </button>
  )
}

export default BoxButton
