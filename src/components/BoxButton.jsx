import React from "react"

const BoxButton = ({ className }) => {
  return (
    <div className="relative">
      <div
        className={`flex items-center justify-center rounded-xl h-[35px] w-[35px] bg-primary cursor-pointer ${className}`}
      ></div>
      <i className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  fa-plus fa-solid text-foreground text-lg"></i>
    </div>
  )
}

export default BoxButton
