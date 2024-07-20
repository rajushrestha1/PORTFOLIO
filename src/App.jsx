import About from "./Components/About"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Portfolio from "./Components/Portfolio"
import Experience from "./Components/Experience"
import Socials from "./Components/Socials"
import ContactME from "./Components/ContactMe"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
      <Experience />
      <ContactME />
      <Footer />
    </div>
  )
}

export default App
