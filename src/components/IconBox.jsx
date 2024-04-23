const IconBox = ({ faName }) => {
  return (
    <div className="flex items-center justify-center rounded-2xl h-[50px] w-[50px] bg-gradient-to-tl from-card to-card/10 cursor-pointer border-2 border-card">
      <i className={`${faName} fa-solid text-muted/50 text-lg`}></i>
    </div>
  )
}

export default IconBox
