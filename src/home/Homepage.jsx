import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Slides from "../components/slides/Slides"
import About from "../components/about/About"
import Products from "../components/products/Products"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import './Homepage.css'

function Homepage() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Slides />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>      
  );
}

export default Homepage;