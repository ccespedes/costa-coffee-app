import React, { useState } from "react"
import PillButton from "./PillButton"
import { drinkMenu } from "../data"

const CoffeeNav = () => {
  const drinksObjects = drinkMenu.map((drink) => {
    return {
      id: drink.id,
      name: drink.name,
      active: drink.id === 0,
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
