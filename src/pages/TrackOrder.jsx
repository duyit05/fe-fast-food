import React from "react";

const TrackOrder = () => {
  return (
    <main className="bg_gray">
      <div id="track_order">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <img
                src="img/track_order.svg"
                alt=""
                className="img-fluid add_bottom_15"
                width={200}
                height={177}
              />
              <p>Quick Tracking Order</p>
              <form>
                <div className="search_bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Invoice ID"
                  />
                  <input type="submit" defaultValue="Search" />
                </div>
              </form>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /track_order */}
      <div className="bg_white">
        <div className="container margin_60_35">
          <div className="main_title">
            <h2>New Entries</h2>
            <span>Products</span>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
          </div>
          <div className="row small-gutters">
            <div className="col-6 col-md-4 col-xl-3">
              <div className="grid_item">
                <span className="ribbon new">New</span>
                <figure>
                  <a href="product-detail-1.html">
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/5.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/5_b.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </a>
                </figure>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star" />
                </div>
                <a href="product-detail-1.html">
                  <h3>Armor Air Zoom Alpha</h3>
                </a>
                <div className="price_box">
                  <span className="new_price">$140.00</span>
                </div>
                <ul>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to favorites"
                    >
                      <i className="ti-heart" />
                      <span>Add to favorites</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to compare"
                    >
                      <i className="ti-control-shuffle" />
                      <span>Add to compare</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to cart"
                    >
                      <i className="ti-shopping-cart" />
                      <span>Add to cart</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /grid_item */}
            </div>
            {/* /col */}
            <div className="col-6 col-md-4 col-xl-3">
              <div className="grid_item">
                <span className="ribbon new">New</span>
                <figure>
                  <a href="product-detail-1.html">
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/6.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/6_b.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </a>
                </figure>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star" />
                </div>
                <a href="product-detail-1.html">
                  <h3>Armor Air Alpha</h3>
                </a>
                <div className="price_box">
                  <span className="new_price">$130.00</span>
                </div>
                <ul>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to favorites"
                    >
                      <i className="ti-heart" />
                      <span>Add to favorites</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to compare"
                    >
                      <i className="ti-control-shuffle" />
                      <span>Add to compare</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to cart"
                    >
                      <i className="ti-shopping-cart" />
                      <span>Add to cart</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /grid_item */}
            </div>
            {/* /col */}
            <div className="col-6 col-md-4 col-xl-3">
              <div className="grid_item">
                <span className="ribbon hot">Hot</span>
                <figure>
                  <a href="product-detail-1.html">
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/7.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/7_b.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </a>
                </figure>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star" />
                </div>
                <a href="product-detail-1.html">
                  <h3>Armor Air Max 98</h3>
                </a>
                <div className="price_box">
                  <span className="new_price">$115.00</span>
                </div>
                <ul>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to favorites"
                    >
                      <i className="ti-heart" />
                      <span>Add to favorites</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to compare"
                    >
                      <i className="ti-control-shuffle" />
                      <span>Add to compare</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to cart"
                    >
                      <i className="ti-shopping-cart" />
                      <span>Add to cart</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /grid_item */}
            </div>
            {/* /col */}
            <div className="col-6 col-md-4 col-xl-3">
              <div className="grid_item">
                <span className="ribbon hot">Hot</span>
                <figure>
                  <a href="product-detail-1.html">
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/8.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                    <img
                      className="img-fluid lazy"
                      src="img/products/product_placeholder_square_medium.jpg"
                      data-src="img/products/shoes/8_b.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </a>
                </figure>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star" />
                </div>
                <a href="product-detail-1.html">
                  <h3>Armor Air Max 720</h3>
                </a>
                <div className="price_box">
                  <span className="new_price">$120.00</span>
                </div>
                <ul>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to favorites"
                    >
                      <i className="ti-heart" />
                      <span>Add to favorites</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to compare"
                    >
                      <i className="ti-control-shuffle" />
                      <span>Add to compare</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="tooltip-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      title="Add to cart"
                    >
                      <i className="ti-shopping-cart" />
                      <span>Add to cart</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /grid_item */}
            </div>
            {/* /item */}
          </div>
          {/* /products_carousel */}
        </div>
        {/* /container */}
      </div>
      {/* /bg_white */}
    </main>
  );
};

export default TrackOrder;
