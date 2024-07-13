import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Portfolio from "./Components/Portfolio"
import Experience from "./Components/Experience"
import Socials from "./Components/Socials"
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
