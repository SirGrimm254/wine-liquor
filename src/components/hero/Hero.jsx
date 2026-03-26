import "../hero/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Global Wholesalers of Branded Liquor</h1>
          <p>Welcome to (company's name), a dynamically growing company with a vast experience in the international wholesalers trade of alcoholic beverages. We are here to serve you the best of branded liquor, spirits, beers and champagne, along with imperccable service, on-time delivery to any location and professional advice on your order</p>
        </div>
        <div className="hero-visuals">
          <img src="images/hero2-removebg.png" alt="hero pic" />
        </div>
      </div>
    </section>
  )
}

export default Hero