import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../footer/Footer.css"

function Footer() {
  return (
    <section className="footer">
      <div className="footer-info">
        <div className="footer-pic">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div className="footer-contact">
          <h2>Products</h2>
          <nav>
            <ul>
              <li>All Products</li>
              <li>Champagne</li>
              <li>Beers</li>
              <li>Liquor</li>
              <li>Gin</li>
              <li>Tequilla</li>
              <li>Cognac</li>
              <li>Rum</li>
              <li>Whisky</li>
              <li>Vodka</li>
            </ul>
          </nav>
          <h2>Site Map</h2>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Distribution</li>
              <li>Services</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-desc">
        <p>Copyright &copy; 2026. All Right Reserved</p> 
      </div>
    </section>
  )
}

export default Footer