import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../header/Header.css"

function Header() {
  return (
    <section className="navbar">
      <div className="header-title">
        <div className="img-container">
          <img src="images/logo.png" alt="logo" />
        </div>
        <button>< FontAwesomeIcon icon={faBars} /></button>
      </div>
    </section>
  )
}

export default Header