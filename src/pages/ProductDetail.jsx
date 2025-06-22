import React, { useEffect, useState } from "react";
import Review from "./Review";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail.css";
import { useParams } from "react-router-dom";
import { getFoodById } from "api/FoodApi";
import StartRating from "utils/StartRating";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const [show, setShow] = useState(false);

  const images = [
    "img/products/shoes/1.jpg",
    "img/products/shoes/2.jpg",
    "img/products/shoes/3.jpg",
    "img/products/shoes/4.jpg",
    "img/products/shoes/5.jpg",
    "img/products/shoes/6.jpg",
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { id } = useParams();
  const [food, setFood] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailFood = await getFoodById(id);
        console.log("food detail", detailFood);
        setFood(detailFood.data);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div id="page">
      <main>
        <div className="container margin_30">
          <div className="countdown_inner">
            -20% This offer ends in{" "}
            <div data-countdown="2019/05/15" className="countdown" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="all">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {images.map((src, idx) => (
                    <Carousel.Item key={idx}>
                      {food ? (
                        <>
                          <div
                            style={{
                              backgroundImage: `url(${food.imageFood})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              height: "400px",
                            }}
                          />
                        </>
                      ) : (
                        <p>Loading . .. </p>
                      )}
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Thumbnail bên dưới */}
                {/* <div className="d-flex justify-content-center flex-wrap mt-3">
                  {images.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      thumbnail
                      onClick={() => setIndex(idx)}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        margin: "5px",
                        border:
                          index === idx
                            ? "2px solid #007bff"
                            : "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div> */}
                <div className="carousel-container">
                  <Slider {...settings}>
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className={`image-box ${
                          selectedIndex === index ? "" : ""
                        }`}
                        onClick={() => setIndex(index)}
                      >
                        <img src={img} alt={`Shoe ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* /page_header */}
              <div className="prod_info">
                {food ? (
                  <>
                    <h1 style={{ margin: "0" }}>{food.foodName}</h1>

                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {StartRating(food?.averageRating ? food?.averageRating : 0)}
                      <span>({food.numberAverage})</span>
                    </p>

                    <div>
                      <p>
                        <strong>Brand:</strong> {food.brand}
                      </p>
                      <p>
                        <strong>Description:</strong> {food.description}
                      </p>
                    </div>

                    <div className="prod_options" style={{ padding: 0 }}>
                      <div className="row">
                        <label className="col-xl-5 col-lg-5 col-md-6 col-6">
                          <strong>Size</strong> - Size Guide{" "}
                          <a
                            href="#0"
                            data-bs-toggle="modal"
                            data-bs-target="#size-modal"
                          >
                            <i className="ti-help-alt" />
                          </a>
                        </label>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                          <div className="custom-select-form">
                            <select
                              className="form-control"
                              style={{
                                appearance: "auto",
                                WebkitAppearance: "auto",
                                MozAppearance: "auto",
                                width: "100%",
                              }}
                            >
                              <option value="" selected>
                                Small (S)
                              </option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-xl-5 col-lg-5  col-md-6 col-6">
                          <strong>Quantity</strong>
                        </label>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                          <div className="numbers-row">
                            <div
                              className="dec button_inc"
                              style={{ userSelect: "none", cursor: "pointer" }}
                              onClick={decrease}
                            >
                              -
                            </div>
                            <input
                              style={{ width: "50px" }}
                              type="number"
                              readOnly
                              value={quantity}
                              id="quantity_1"
                              className="qty2"
                              name="quantity_1"
                            />
                            <div
                              className="inc button_inc"
                              style={{ userSelect: "none", cursor: "pointer" }}
                              onClick={increase}
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="price_main">
                          <span className="new_price">
                            {food.price.toLocaleString()}₫
                          </span>
                          <span className="percentage">-20%</span>
                          <span className="old_price">
                            {food.lastedPrice.toLocaleString()}₫
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="btn_add_to_cart">
                          <a href="#0" className="btn_1">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              {/* /prod_info */}
              <div className="product_actions">
                <ul>
                  <li>
                    <a href="123">
                      <i className="ti-heart" />
                      <span>Add to Wishlist</span>
                    </a>
                  </li>
                  <li>
                    <a href="123">
                      <i className="ti-control-shuffle" />
                      <span>Add to Compare</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /product_actions */}
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
        <>
          <div className="tabs_product">
            <div className="container">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    id="tab-A"
                    href="#pane-A"
                    className="nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <button onClick={() => setShow(true)}>Reviews</button>
                  {show && <Review />}
                </li>
              </ul>
            </div>
          </div>
          {/* /tabs_product */}
          <div className="tab_content_wrapper">
            <div className="container">
              <div className="tab-content" role="tablist">
                <div
                  id="pane-A"
                  className="card tab-pane fade active show"
                  role="tabpanel"
                  aria-labelledby="tab-A"
                >
                  <div className="card-header" role="tab" id="heading-A">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        data-bs-toggle="collapse"
                        href="#collapse-A"
                        aria-expanded="false"
                        aria-controls="collapse-A"
                      >
                        Description
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapse-A"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading-A"
                  >
                    <div className="card-body">
                      <div className="row justify-content-between">
                        <div className="col-lg-6">
                          <h3>Details</h3>
                          <p>
                            Lorem ipsum dolor sit amet, in eleifend{" "}
                            <strong>inimicus elaboraret</strong> his, harum
                            efficiendi mel ne. Sale percipit vituperata ex mel,
                            sea ne essent aeterno sanctus, nam ea laoreet
                            civibus electram. Ea vis eius explicari. Quot
                            iuvaret ad has.
                          </p>
                          <p>
                            Vis ei ipsum conclusionemque. Te enim suscipit
                            recusabo mea, ne vis mazim aliquando, everti
                            insolens at sit. Cu vel modo unum quaestio, in vide
                            dicta has. Ut his laudem explicari adversarium, nisl{" "}
                            <strong>laboramus hendrerit</strong> te his, alia
                            lobortis vis ea.
                          </p>
                          <p>
                            Perfecto eleifend sea no, cu audire voluptatibus
                            eam. An alii praesent sit, nobis numquam principes
                            ea eos, cu autem constituto suscipiantur eam. Ex
                            graeci elaboraret pro. Mei te omnis tantas, nobis
                            viderer vivendo ex has.
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <h3>Specifications</h3>
                          <div className="table-responsive">
                            <table className="table table-sm table-striped">
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>Color</strong>
                                  </td>
                                  <td>Blue, Purple</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Size</strong>
                                  </td>
                                  <td>150x100x100</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Weight</strong>
                                  </td>
                                  <td>0.6kg</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Manifacturer</strong>
                                  </td>
                                  <td>Manifacturer</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* /table-responsive */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /TAB A */}
                <div
                  id="pane-B"
                  className="card tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="tab-B"
                >
                  <div className="card-header" role="tab" id="heading-B">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        data-bs-toggle="collapse"
                        href="#collapse-B"
                        aria-expanded="false"
                        aria-controls="collapse-B"
                      >
                        Reviews
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapse-B"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading-B"
                  >
                    <Review />
                    {/* /card-body */}
                  </div>
                </div>
                {/* /tab B */}
              </div>
              {/* /tab-content */}
            </div>
            {/* /container */}
          </div>
        </>

        {/* /tab_content_wrapper */}
        <div className="bg_white">
          <div className="container margin_60_35">
            <div className="main_title">
              <h2>Related</h2>
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
        {/* /container */}
        <div className="feat">
          <div className="container">
            <ul>
              <li>
                <div className="box">
                  <i className="ti-gift" />
                  <div className="justify-content-center">
                    <h3>Free Shipping</h3>
                    <p>For all oders over $99</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="box">
                  <i className="ti-wallet" />
                  <div className="justify-content-center">
                    <h3>Secure Payment</h3>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="box">
                  <i className="ti-headphone-alt" />
                  <div className="justify-content-center">
                    <h3>24/7 Support</h3>
                    <p>Online top support</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*/feat*/}
      </main>
      {/* /main */}

      {/* page */}
      <div id="toTop" />
      {/* Back to top button */}
      <div className="top_panel">
        <div className="container header_panel">
          <a href="#0" className="btn_close_top_panel">
            <i className="ti-close" />
          </a>
          <label>1 product added to cart</label>
        </div>
        {/* /header_panel */}
        <div className="item">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="item_panel">
                  <figure>
                    <img
                      src="img/products/product_placeholder_square_small.jpg"
                      data-src="img/products/shoes/1.jpg"
                      className="lazy"
                      alt=""
                    />
                  </figure>
                  <h4>1x Armor Air X Fear</h4>
                  <div className="price_panel">
                    <span className="new_price">$148.00</span>
                    <span className="percentage">-20%</span>{" "}
                    <span className="old_price">$160.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 btn_panel">
                <a href="cart.html" className="btn_1 outline">
                  View cart
                </a>{" "}
                <a href="checkout.html" className="btn_1">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /item */}
        <div className="container related">
          <h4>Who bought this product also bought</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="img/products/product_placeholder_square_small.jpg"
                      data-src="img/products/shoes/2.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor Okwahn II</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$90.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="img/products/product_placeholder_square_small.jpg"
                      data-src="img/products/shoes/3.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor Air Wildwood ACG</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$75.00</span>
                  <span className="percentage">-20%</span>{" "}
                  <span className="old_price">$155.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="img/products/product_placeholder_square_small.jpg"
                      data-src="img/products/shoes/4.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor ACG React Terra</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$110.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /related */}
      </div>
      {/* /add_cart_panel */}
      {/* Size modal */}
      <div
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="size-modal"
        id="size-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Size guide</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, et velit propriae invenire mea, ad
                nam alia intellegat. Aperiam mediocrem rationibus nec te. Tation
                persecuti accommodare pro te. Vis et augue legere, vel labitur
                habemus ocurreret ex.
              </p>
              <div className="table-responsive">
                <table className="table table-striped table-sm sizes">
                  <tbody>
                    <tr>
                      <th scope="row">US Sizes</th>
                      <td>6</td>
                      <td>6,5</td>
                      <td>7</td>
                      <td>7,5</td>
                      <td>8</td>
                      <td>8,5</td>
                      <td>9</td>
                      <td>9,5</td>
                      <td>10</td>
                      <td>10,5</td>
                    </tr>
                    <tr>
                      <th scope="row">Euro Sizes</th>
                      <td>39</td>
                      <td>39</td>
                      <td>40</td>
                      <td>40-41</td>
                      <td>41</td>
                      <td>41-42</td>
                      <td>42</td>
                      <td>42-43</td>
                      <td>43</td>
                      <td>43-44</td>
                    </tr>
                    <tr>
                      <th scope="row">UK Sizes</th>
                      <td>5,5</td>
                      <td>6</td>
                      <td>6,5</td>
                      <td>7</td>
                      <td>7,5</td>
                      <td>8</td>
                      <td>8,5</td>
                      <td>9</td>
                      <td>9,5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">Inches</th>
                      <td>9.25"</td>
                      <td>9.5"</td>
                      <td>9.625"</td>
                      <td>9.75"</td>
                      <td>9.9375"</td>
                      <td>10.125"</td>
                      <td>10.25"</td>
                      <td>10.5"</td>
                      <td>10.625"</td>
                      <td>10.75"</td>
                    </tr>
                    <tr>
                      <th scope="row">CM</th>
                      <td>23,5</td>
                      <td>24,1</td>
                      <td>24,4</td>
                      <td>24,8</td>
                      <td>25,4</td>
                      <td>25,7</td>
                      <td>26</td>
                      <td>26,7</td>
                      <td>27</td>
                      <td>27,3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /table */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Nút mũi tên phải
const NextArrow = ({ onClick }) => (
  <div className="arrow right" onClick={onClick}>
    &gt;
  </div>
);

// Nút mũi tên trái
const PrevArrow = ({ onClick }) => (
  <div className="arrow left" onClick={onClick}>
    &lt;
  </div>
);

export default ProductDetail;
