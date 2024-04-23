import "./index.css"

import Header from "./components/Header"
import Home from "./routes/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
