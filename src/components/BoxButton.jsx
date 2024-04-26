import React from "react"

const BoxButton = ({ className, children, icon, type }) => {
  const defaultClasses =
    type === "secondary"
      ? "flex items-center justify-center text-foreground/50 bg-secondary/50 border-[0.08rem] border-card py-[0.3rem] rounded-[0.7rem] transition-all duration-200 hover:border-[0.08rem] hover:border-primary hover:text-primary sm:px-12"
      : "flex items-center justify-center bg-primary transition-all duration-200  hover:scale-110"

  return icon ? (
    <>
      <div className="relative">
        <button
          className={`${defaultClasses} rounded-xl  ${className}`}
        ></button>
        <i
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${icon}`}
        ></i>
      </div>
    </>
  ) : (
    <button className={`${defaultClasses} rounded-2xl ${className}`}>
      {children}
    </button>
  )
}

export default BoxButton
