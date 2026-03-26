
import "../products/Products.css"

function Products() {
  return (
    <section className="products">
      <div className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-container">
            <div className="product-card">
              <img src="images/hero2.jpg" alt="Product 1" />
              <div className="desc">
                <div className="value">
                  <h3>Product 1</h3>
                  <p>5000.00 Ksh</p>
                </div>
                <button>More...</button>
              </div>
            </div>
            <div className="product-card">
              <img src="images/hero2.jpg" alt="Product 1" />
              <div className="desc">
                <div className="value">
                  <h3>Product 1</h3>
                  <p>5000.00 Ksh</p>
                </div>
                <button>More...</button>
              </div>
            </div>
            <div className="product-card">
              <img src="images/hero2.jpg" alt="Product 1" />
              <div className="desc">
                <div className="value">
                  <h3>Product 1</h3>
                  <p>5000.00 Ksh</p>
                </div>
                <button>More...</button>
              </div>
            </div>
            <div className="product-card">
              <img src="images/hero2.jpg" alt="Product 1" />
              <div className="desc">
                <div className="value">
                  <h3>Product 1</h3>
                  <p>5000.00 Ksh</p>
                </div>
                <button>More...</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Products