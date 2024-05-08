import cappuccinoImage from "./assets/cappuccino.jpg"
import americanoImage from "./assets/americano.jpg"
import latteImage from "./assets/latte.jpg"
import espressoImage from "./assets/espresso.jpg"
import flatWhiteImage from "./assets/flat-white.jpg"
import macchiatoImage from "./assets/macchiato.jpg"

export const products = [
  {
    id: 1,
    name: "Cappuccino",
    image: cappuccinoImage,
    phonetic: "[ kap-oo-chee-noh ]",
    ingredients: ["steamed milk", "espresso"],
    price: {
      small: 4.2,
      medium: 4.5,
      large: 5,
    },
    rating: 4.9,
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
  },
  {
    id: 2,
    name: "Americano",
    image: americanoImage,
    phonetic: "[ uh-mer-i-kan-oh ]",
    ingredients: ["espresso", "water"],
    price: {
      small: 3.5,
      medium: 4,
      large: 4.5,
    },
    rating: 4.6,
    description:
      "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.",
  },
  {
    id: 3,
    name: "Latte",
    image: latteImage,
    phonetic: "[ lah-tey ]",
    ingredients: ["espresso", "steamed milk"],
    price: {
      small: 3.8,
      medium: 4.2,
      large: 4.8,
    },
    rating: 4.2,
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
  },
  {
    id: 4,
    name: "Espresso",
    image: espressoImage,
    phonetic: "[ e-spres-oh ]",
    ingredients: ["espresso"],
    price: {
      small: 3.2,
      medium: 3.8,
      large: 4.6,
    },
    rating: 4.1,
    description:
      "Our dark, fine espresso is sourced from the Blue Zone area of Costa Rica and roasted with the finest methods from Italy.",
  },
  {
    id: 5,
    name: "Flat White",
    image: flatWhiteImage,
    phonetic: "[ flat-wahyt ]",
    ingredients: ["espresso", "steamed milk"],
    price: {
      small: 4.8,
      medium: 5.2,
      large: 5.7,
    },
    rating: 4.6,
    description:
      "A smooth, velvety espresso mixed with creamy, steamed milk, creating a balanced, rich, and satisfying coffee beverage, known as a flat white.",
  },
  {
    id: 6,
    name: "Macchiato",
    image: macchiatoImage,
    phonetic: "[ mak-yah-toh ]",
    ingredients: ["espresso", "steamed milk"],
    price: {
      small: 4.5,
      medium: 5,
      large: 5.5,
    },
    rating: 4.8,
    description:
      'A potent shot of espresso "stained" with creamy milk; bold, robust, and perfectly balanced for a rich, indulgent coffee experience.',
  },
]

export const drinkSizes = ["small", "medium", "large"]

export const milkOptions = ["whole", "oat", "almond"]

export const routes = [
  {
    path: "menu",
    name: "Menu",
    icon: "fa-mug-saucer",
  },
  {
    path: "featured",
    name: "Featured",
    icon: "fa-star",
  },
  {
    path: "previous",
    name: "Previous",
    icon: "fa-clock",
  },
  {
    path: "favorites",
    name: "Favorites",
    icon: "fa-heart",
  },
]

export const products2 = [
  {
    id: 1,
    name: "Cappuccino",
    image: cappuccinoImage,
    phonetic: "[ kap-oo-chee-noh ]",
    ingredients: ["steamed milk", "espresso"],
    price: 4.2,
    rating: 4.9,
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
  },
  {
    id: 2,
    name: "Americano",
    image: americanoImage,
    phonetic: "[ uh-mer-i-kan-oh ]",
    ingredients: ["espresso", "water"],
    price: 3.5,
    rating: 4.6,
    description:
      "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.",
  },
  {
    id: 3,
    name: "Latte",
    image: latteImage,
    phonetic: "[ lah-tey ]",
    ingredients: ["espresso", "steamed milk"],
    price: 3.8,
    rating: 4.2,
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
  },
  {
    id: 4,
    name: "Espresso",
    image: espressoImage,
    phonetic: "[ e-spres-oh ]",
    ingredients: ["espresso"],
    price: 3.2,
    rating: 4.1,
    description:
      "Our dark, fine espresso is sourced from the Blue Zone area of Costa Rica and roasted with the finest methods from Italy.",
  },
  {
    id: 5,
    name: "Flat White",
    image: flatWhiteImage,
    phonetic: "[ flat-wahyt ]",
    ingredients: ["espresso", "steamed milk"],
    price: 4.8,
    rating: 4.6,
    description:
      "A smooth, velvety espresso mixed with creamy, steamed milk, creating a balanced, rich, and satisfying coffee beverage, known as a flat white.",
  },
  {
    id: 6,
    name: "Macchiato",
    image: macchiatoImage,
    phonetic: "[ mak-yah-toh ]",
    ingredients: ["espresso", "steamed milk"],
    price: 4.5,
    rating: 4.8,
    description:
      'A potent shot of espresso "stained" with creamy milk; bold, robust, and perfectly balanced for a rich, indulgent coffee experience.',
  },
]
