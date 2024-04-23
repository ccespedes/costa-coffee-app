import capuccinoImage from "./assets/capuccino.jpg"
import americanoImage from "./assets/americano.jpg"
import latteImage from "./assets/latte.jpg"
import espressoImage from "./assets/espresso.jpg"
import flatWhiteImage from "./assets/flat-white.jpg"

export const menuArray = [
  {
    id: 0,
    name: "Capuccino",
    image: capuccinoImage,
    ingredients: ["steamed milk", "espresso"],
    price: 4.2,
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
  },
  {
    id: 1,
    name: "Americano",
    image: americanoImage,
    ingredients: ["espresso", "water"],
    price: 3.5,
    description:
      "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.",
  },
  {
    id: 2,
    name: "Latte",
    image: latteImage,
    ingredients: ["espresso", "steamed milk"],
    price: 3.8,
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
  },
  {
    id: 3,
    name: "Espresso",
    image: espressoImage,
    ingredients: ["espresso"],
    price: 3.2,
    description:
      "Our dark, fine espresso is sourced from the Blue Zone area of Costa Rica and roasted with the finest methods from Italy.",
  },
  {
    id: 4,
    name: "Flat White",
    image: flatWhiteImage,
    ingredients: ["espresso", "steamed milk"],
    price: 4.8,
    description:
      "A smooth, velvety espresso mixed with creamy, steamed milk, creating a balanced, rich, and satisfying coffee beverage, known as a flat white.",
  },
]
