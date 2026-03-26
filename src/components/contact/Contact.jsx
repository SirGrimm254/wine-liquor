import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import "../contact/Contact.css"

function Contact() {
  return (
    <section className="contact">
      <div className="contact-bg">
        <img src="images/contact.jpg" alt="contact background" />
      </div>
      <div className="contact-desc">
        <h1>Contact Us</h1>
        <p>Please note that we are <b>Wholesale Company</b> If your looking for a couple of bottles, you are on the wrong website - we cannot help you. If you are looking for services please dont hesitate to contact us - you are most welcome.</p>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            office@company.co.ke
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            (+254) 712 345 678
          </p>
        </div>
        <p>We are at your disposal from <b>Monday</b> to <b>Friday</b> from <b>7:30 am</b> to <b>4:00 pm</b></p>
      </div>
    </section>
  )
}

export default Contact