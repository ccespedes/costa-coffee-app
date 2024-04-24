const NavButton = ({ children }) => {
  return (
    <button className="text-sm text-foreground/60 mx-4 px-5 py-2 rounded-lg hover:bg-secondary/50 hover:text-foreground">
      {children}
    </button>
  )
}

export default NavButton
