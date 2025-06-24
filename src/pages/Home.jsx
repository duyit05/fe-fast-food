import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { getAllFood } from "api/FoodApi";
import { Link, useSearchParams } from "react-router-dom";
import { getAllCategory } from "api/CategoryApi";

const Home = ({ keyword }) => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNo = parseInt(searchParams.get("pageNo")) || 1;
  const pageSize = parseInt(searchParams.get("pageSize")) || 6;
  const [totalPage, setTotalPage] = useState(1);
  const isFirstLoad = useRef(true);

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleChangePage = (newPageNo) => {
    setSearchParams({
      pageNo: newPageNo,
      pageSize: pageSize,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFood(pageNo, pageSize, keyword);
        setFoods(response.data.items);
        setTotalPage(response.data.totalPage);

        if (!isFirstLoad.current) {
          setSearchParams({
            pageNo,
            pageSize,
          });
        } else {
          isFirstLoad.current = false;
        }
      } catch (error) {
        console.error("Lỗi:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNo, pageSize, keyword]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const listCategory = await getAllCategory();
        setCategory(listCategory.data.items);
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
            
            <h1>KFC - PRO</h1>
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
                    {category.map((category, index) => (
                      <li key={index}>
                        <label
                          className="container_check"
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => setHoverIndex(null)}
                          onClick={() => setActiveIndex(index)}
                          style={{
                            display: "block",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            backgroundColor:
                              activeIndex === index
                                ? "#81d4fa" // active màu xanh đậm
                                : hoverIndex === index
                                ? "#e0f7fa" // hover màu xanh nhạt
                                : "transparent",
                            fontWeight:
                              activeIndex === index ? "bold" : "normal",
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          {category.categoryName}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /filter_type */}
              </div>
              {/* /filter_type */}

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
            {loading ? (
              <div className="text-center mt-5">
                <span className="spinner-border text-primary" role="status" />
                <p>Đang tải dữ liệu sản phẩm...</p>
              </div>
            ) : foods.length === 0 ? (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "40px",
                  textAlign: "center",
                }}
              >
                NOT FOUND FOOD WITH KEYWORD "{keyword}"
              </p>
            ) : (
              <div className="row small-gutters">
                {foods.map((food, index) => (
                  <div key={index} className="col-6 col-md-4">
                    <div className="grid_item">
                      <Link to={`/detail-product/${food.id}`}>
                        <img
                          className="img-fluid lazy"
                          src={food.imageFood}
                          alt=""
                          style={{ maxWidth: "100%", height: "190px" }}
                        />
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
            )}
          </div>

          {/* /row */}
          <div className="pagination__wrapper">
            <ul className="pagination">
              <li>
                <a
                  href="#!"
                  className="prev"
                  title="Previous page"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pageNo > 1) handleChangePage(pageNo - 1);
                  }}
                  style={{
                    pointerEvents: pageNo === 1 ? "none" : "auto",
                    opacity: pageNo === 1 ? 0.5 : 1,
                  }}
                >
                  ❮
                </a>
              </li>

              {Array.from({ length: totalPage }, (_, index) => {
                const p = index + 1;
                return (
                  <li key={p}>
                    <a
                      href="#!"
                      className={pageNo === p ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        handleChangePage(p);
                      }}
                    >
                      {p}
                    </a>
                  </li>
                );
              })}

              <li>
                <a
                  href="#!"
                  className="next"
                  title="Next page"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pageNo < totalPage) handleChangePage(pageNo + 1);
                  }}
                  style={{
                    pointerEvents: pageNo === totalPage ? "none" : "auto",
                    opacity: pageNo === totalPage ? 0.5 : 1,
                  }}
                >
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

export default Home;
