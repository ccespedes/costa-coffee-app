import React, { useEffect, useState } from "react"
import PillButton from "./PillButton"

const drinkNames = [
  "Capuccino",
  "Americano",
  "Latte",
  "Flat White",
  "Espresso",
  "Machiatto",
]

const CoffeeNav = () => {
  const drinksObjects = drinkNames.map((drink, index) => {
    return {
      id: index,
      name: drink,
      active: index === 0,
    }
  })

  const [drinks, setDrinks] = useState(drinksObjects)

  const drinkButtons = drinks.map((drink) => (
    <PillButton
      key={drink.id}
      id={drink.id}
      drinks={drinks}
      setDrinks={setDrinks}
      className={`${drink.active ? "text-primary" : "text-muted/50"}`}
    >
      {drink.name}
    </PillButton>
  ))

  return <div className="flex gap-4">{drinkButtons}</div>
}

export default CoffeeNav
