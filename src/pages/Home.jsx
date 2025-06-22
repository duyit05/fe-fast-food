import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { getAllFood, getFoodById } from "api/FoodApi";
import { Link, useParams } from "react-router-dom";

const HomeTest = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const listFood = await getAllFood();
        console.log("list food: " , listFood);
        setFoods(listFood.data.items);
      } catch (error) {
        console.log("error: " + error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="page" className="theia-exception">
      <div className="top_banner">
        <div
          className="opacity-mask d-flex align-items-center"
          data-opacity-mask="rgba(0, 0, 0, 0.3)"
        >
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="123">Home</a>
                </li>
                <li>
                  <a href="123">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
            <h1>Shoes - Grid listing</h1>
          </div>
        </div>
        <img src="img/bg_cat_shoes.jpg" className="img-fluid" alt="" />
      </div>

      <div id="stick_here" />
      <div className="toolbox elemento_stick">
        <div className="container">
          <ul className="clearfix">
            <li>
              <div className="sort_select">
                <select name="sort" id="sort">
                  <option value="popularity" selected="selected">
                    Sort by popularity
                  </option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by newness</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to</option>
                </select>
              </div>
            </li>
            <li>
              <a href="#0">
                <i className="ti-view-grid" />
              </a>
              <a href="listing-row-1-sidebar-left.html">
                <i className="ti-view-list" />
              </a>
            </li>
            <li>
              <a href="#0" className="open_filters">
                <i className="ti-filter" />
                <span>Filters</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* /toolbox */}
      <div className="container margin_30">
        <div className="row">
          <aside className="col-lg-3" id="sidebar_fixed">
            <div className="filter_col">
              <div className="inner_bt">
                <a href="123" className="open_filters">
                  <i className="ti-close" />
                </a>
              </div>
              <div className="filter_type version_2">
                <h4>
                  <a
                    href="#filter_1"
                    data-bs-toggle="collapse"
                    className="opened"
                  >
                    Categories
                  </a>
                </h4>
                <div className="collapse show" id="filter_1">
                  <ul>
                    <li>
                      <label className="container_check">
                        Men <small>12</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Women <small>24</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Running <small>23</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Training <small>11</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
                {/* /filter_type */}
              </div>
              {/* /filter_type */}
              <div className="filter_type version_2">
                <h4>
                  <a
                    href="#filter_2"
                    data-bs-toggle="collapse"
                    className="opened"
                  >
                    Color
                  </a>
                </h4>
                <div className="collapse show" id="filter_2">
                  <ul>
                    <li>
                      <label className="container_check">
                        Blue <small>06</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Red <small>12</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Orange <small>17</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Black <small>43</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /filter_type */}
              <div className="filter_type version_2">
                <h4>
                  <a
                    href="#filter_3"
                    data-bs-toggle="collapse"
                    className="closed"
                  >
                    Brands
                  </a>
                </h4>
                <div className="collapse" id="filter_3">
                  <ul>
                    <li>
                      <label className="container_check">
                        Adidas <small>11</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Nike <small>08</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Vans <small>05</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Puma <small>18</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /filter_type */}
              <div className="filter_type version_2">
                <h4>
                  <a
                    href="#filter_4"
                    data-bs-toggle="collapse"
                    className="closed"
                  >
                    Price
                  </a>
                </h4>
                <div className="collapse" id="filter_4">
                  <ul>
                    <li>
                      <label className="container_check">
                        $0 — $50<small>11</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        $50 — $100<small>08</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        $100 — $150<small>05</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        $150 — $200<small>18</small>
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /filter_type */}
              <div className="buttons">
                <a href="#0" className="btn_1">
                  Filter
                </a>{" "}
                <a href="#0" className="btn_1 gray">
                  Reset
                </a>
              </div>
            </div>
          </aside>
          {/* /col */}

          <div className="col-lg-9">
            <div className="row small-gutters">
              {foods.map((food, index) => (
                <div key={index} className="col-6 col-md-4">
                  <div className="grid_item">
                    <Link to={`/detail-product/${food.id}`}>
                      <img className="img-fluid lazy" src={food.imageFood} alt="" style={{maxWidth:'100%', height: '190px'}} />
                    </Link>
                    <Link to={`/detail-product/${food.id}`}>
                      <h3>{food.foodName}</h3>
                    </Link>
                    <div className="price_box">
                      <span className="new_price">{food.price}</span>
                      <span className="old_price">{food.lastedPrice}</span>
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
                </div>
              ))}
            </div>
          </div>

          {/* /row */}
          <div className="pagination__wrapper">
            <ul className="pagination">
              <li>
                <a href="#0" className="prev" title="previous page">
                  ❮
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#0">2</a>
              </li>
              <li>
                <a href="#0">3</a>
              </li>
              <li>
                <a href="#0">4</a>
              </li>
              <li>
                <a href="#0" className="next" title="next page">
                  ❯
                </a>
              </li>
            </ul>
          </div>
          {/* /col */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}

      {/* /main */}

      <div className="container margin_60_35">
        <div className="main_title">
          <h2>Featured</h2>
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
      <div className="container margin_60_35">
        <div className="main_title">
          <h2>Latest News</h2>
          <span>Blog</span>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img
                  src="img/blog-thumb-placeholder.jpg"
                  data-src="img/blog-thumb-1.jpg"
                  alt=""
                  width={400}
                  height={266}
                  className="lazy"
                />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>by Mark Twain</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Pri oportere scribentur eu</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img
                  src="img/blog-thumb-placeholder.jpg"
                  data-src="img/blog-thumb-2.jpg"
                  alt=""
                  width={400}
                  height={266}
                  className="lazy"
                />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>By Jhon Doe</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Duo eius postea suscipit ad</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img
                  src="img/blog-thumb-placeholder.jpg"
                  data-src="img/blog-thumb-3.jpg"
                  alt=""
                  width={400}
                  height={266}
                  className="lazy"
                />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>By Luca Robinson</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Elitr mandamus cu has</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure>
                <img
                  src="img/blog-thumb-placeholder.jpg"
                  data-src="img/blog-thumb-4.jpg"
                  alt=""
                  width={400}
                  height={266}
                  className="lazy"
                />
                <figcaption>
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <ul>
                <li>By Paula Rodrigez</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Id est adhuc ignota delenit</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </a>
          </div>
          {/* /box_news */}
        </div>
        {/* /row */}
      </div>
    </div>
  );
};

export default HomeTest;
