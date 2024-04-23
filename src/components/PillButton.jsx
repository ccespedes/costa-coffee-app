const PillButton = ({ children, className, drinks, setDrinks, id }) => {
  const handleClick = () => {
    setDrinks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`text-sm ${className} text-nowrap bg-card py-1 px-4 rounded-xl hover:text-primary`}
    >
      {children}
    </button>
  )
}

export default PillButton

// text-muted/50
