const NavButton = ({ children }) => {
  return (
    <button className="text-sm text-foreground/60 mx-4 px-4 py-1 rounded-2xl hover:bg-card/50 hover:text-foreground">
      {children}
    </button>
  )
}

export default NavButton
