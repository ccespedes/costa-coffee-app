import React from "react"

const BoxButton = ({ className, children, icon, type }) => {
  const defaultClasses =
    type === "secondary"
      ? "flex items-center justify-center bg-secondary/50 border-[0.08rem] border-card py-[0.3rem] px-12 rounded-[0.7rem] transition-all duration-200 hover:border-[0.08rem] hover:border-primary hover:text-primary"
      : "flex items-center justify-center bg-primary transition-all duration-200  hover:scale-105"

  return (
    <div className="relative">
      {icon ? (
        <>
          <button
            className={`${defaultClasses} rounded-xl  ${className}`}
          ></button>
          <i
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${icon}`}
          ></i>
        </>
      ) : (
        <button className={`${defaultClasses} rounded-2xl  ${className}`}>
          {children}
        </button>
      )}
    </div>
  )
}

export default BoxButton
