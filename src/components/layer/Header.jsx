import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");

  // debounce: đợi 500ms sau khi người dùng ngừng gõ mới gọi onSearch
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(input.trim());
    }, 500); // 500ms

    return () => clearTimeout(delay); // clear nếu user gõ tiếp
  }, [input]);
  return (
    <div>
      <header className="version_1">
        <div className="layer" />
        {/* Mobile menu overlay mask */}
        <div className="main_header">
          <div className="container">
            <div className="row small-gutters">
              <div className="col-xl-3 col-lg-3 d-lg-flex align-items-center">
                <div id="logo">
                  <Link to="/">
                    <img src="img/logo.svg" alt="" width={100} height={35} />
                  </Link>
                </div>
              </div>
              <nav className="col-xl-6 col-lg-7">
                <a className="open_close" href="#0">
                  <div className="hamburger hamburger--spin">
                    <div className="hamburger-box">
                      <div className="hamburger-inner" />
                    </div>
                  </div>
                </a>
                {/* Mobile menu button */}
                <div className="main-menu">
                  <div id="header_menu">
                    <a href="/">
                      <img
                        src="img/logo_black.svg"
                        alt=""
                        width={100}
                        height={35}
                      />
                    </a>
                    <a href="123" className="open_close" id="close_in">
                      <i className="ti-close" />
                    </a>
                  </div>
                  <ul>
                    <li className="">
                      <Link to="/home" className="show-submenu">
                        Home
                      </Link>
                    </li>
                    <li className="megamenu">
                      <a href="#0" className="show-submenu-mega">
                        Pages
                      </a>
                      {/* /menu-wrapper */}
                    </li>
                    <li className="">
                      <a href="#0" className="show-submenu">
                        Extra Pages
                      </a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/not-found" target="_parent">
                        Buy Template
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/main-menu */}
              </nav>
              <div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-end">
                <a className="phone_top" href="tel://9438843343">
                  <strong>
                    <span>Need Help?</span>+94 423-23-221
                  </strong>
                </a>
              </div>
            </div>
            {/* /row */}
          </div>
        </div>
        {/* /main_header */}
        <div className="main_nav Sticky">
          <div className="container">
            <div className="row small-gutters">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <nav className="categories menu">
                  <ul className="clearfix">
                    <li>
                      <span>
                        <a href="#12">
                          <span className="hamburger hamburger--spin">
                            <span className="hamburger-box">
                              <span className="hamburger-inner" />
                            </span>
                          </span>
                          Categories
                        </a>
                      </span>
                      <div id="menu">
                        <ul>
                          <li>
                            <span>
                              <a href="#0">Collections</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-grid-1-full.html">Trending</a>
                              </li>
                              <li>
                                <a href="listing-grid-2-full.html">
                                  Life style
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-3.html">Running</a>
                              </li>
                              <li>
                                <a href="listing-grid-4-sidebar-left.html">
                                  Training
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-5-sidebar-right.html">
                                  View all Collections
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>
                              <a href="123">Men</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-grid-6-sidebar-left.html">
                                  Offers
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-7-sidebar-right.html">
                                  Shoes
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-1-sidebar-left.html">
                                  Clothing
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-3-sidebar-left.html">
                                  Accessories
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-4-sidebar-extended.html">
                                  Equipment
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>
                              <a href="123">Women</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-grid-1-full.html">
                                  Best Sellers
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-2-full.html">Clothing</a>
                              </li>
                              <li>
                                <a href="listing-grid-3.html">Accessories</a>
                              </li>
                              <li>
                                <a href="listing-grid-4-sidebar-left.html">
                                  Shoes
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>
                              <a href="123">Boys</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-grid-6-sidebar-left.html">
                                  Easy On Shoes
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-7-sidebar-right.html">
                                  Clothing
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-3-sidebar-left.html">
                                  Must Have
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-4-sidebar-extended.html">
                                  All Boys
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>
                              <a href="123">Girls</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-grid-1-full.html">
                                  New Releases
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-2-full.html">Clothing</a>
                              </li>
                              <li>
                                <a href="listing-grid-3.html">Sale</a>
                              </li>
                              <li>
                                <a href="listing-grid-4-sidebar-left.html">
                                  Best Sellers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>
                              <a href="123">Customize</a>
                            </span>
                            <ul>
                              <li>
                                <a href="listing-row-1-sidebar-left.html">
                                  For Men
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-2-sidebar-right.html">
                                  For Women
                                </a>
                              </li>
                              <li>
                                <a href="listing-row-4-sidebar-extended.html">
                                  For Boys
                                </a>
                              </li>
                              <li>
                                <a href="listing-grid-1-full.html">For Girls</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-6 d-none d-md-block">
                <div className="custom-search-input">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search food"
                  />
                  
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-3">
                <ul className="top_tools">
                  <li>
                    <div className="dropdown dropdown-cart">
                      <a href="cart" className="cart_bt">
                        <strong>2</strong>
                      </a>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a href="product-detail-1.html">
                              <figure>
                                <img
                                  src="img/products/product_placeholder_square_small.jpg"
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="lazy"
                                />
                              </figure>
                              <strong>
                                <span>1x Armor Air x Fear</span>$90.00
                              </strong>
                            </a>
                            <a href="123" className="action">
                              <i className="ti-trash" />
                            </a>
                          </li>
                          <li>
                            <a href="product-detail-1.html">
                              <figure>
                                <img
                                  src="img/products/product_placeholder_square_small.jpg"
                                  data-src="img/products/shoes/thumb/2.jpg"
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="lazy"
                                />
                              </figure>
                              <strong>
                                <span>1x Armor Okwahn II</span>$110.00
                              </strong>
                            </a>
                            <a href="/cart" className="action">
                              <i className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                        <div className="total_drop">
                          <div className="clearfix">
                            <strong>Total</strong>
                            <span>$200.00</span>
                          </div>
                          <a href="cart" className="btn_1 outline">
                            View Cart
                          </a>
                          <a href="/check-out" className="btn_1">
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /dropdown-cart*/}
                  </li>
                  <li>
                    <a href="/wishlist" className="wishlist">
                      <span>Wishlist</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown dropdown-access">
                      <a href="/login" className="access_link">
                        <span>Account</span>
                      </a>
                      <div className="dropdown-menu">
                        <a href="/login" className="btn_1">
                          Sign In or Sign Up
                        </a>
                        <ul>
                          <li>
                            <a href="/track-order">
                              <i className="ti-truck" />
                              Track your Order
                            </a>
                          </li>
                          <li>
                            <a href="/my-order">
                              <i className="ti-package" />
                              My Orders
                            </a>
                          </li>
                          <li>
                            <a href="profile-page.html">
                              <i className="ti-user" />
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a href="help.html">
                              <i className="ti-help-alt" />
                              Help and Faq
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /dropdown-access*/}
                  </li>
                  <li>
                    <a href="#0" className="btn_search_mob">
                      <span>Search</span>
                    </a>
                  </li>
                  <li>
                    <a href="#menu" className="btn_cat_mob">
                      <div className="hamburger hamburger--spin" id="hamburger">
                        <div className="hamburger-box">
                          <div className="hamburger-inner" />
                        </div>
                      </div>
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /row */}
          </div>
          <div className="search_mob_wp">
            <input
              type="text"
              className="form-control"
              placeholder="Search over 10.000 products"
            />
            <input
              type="submit"
              className="btn_1 full-width"
              defaultValue="Search"
            />
          </div>
          {/* /search_mobile */}
        </div>
        {/* /main_nav */}
      </header>
    </div>
  );
};

export default Header;
