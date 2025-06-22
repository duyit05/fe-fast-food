import React from "react";

const Help = () => {
  return (
    <div>
      <main className="bg_gray">
        <div className="container margin_30">
          <div className="page_header">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
            <h1>Help and Support</h1>
          </div>
          {/* /page_header */}
          <div className="search-input">
            <input type="text" placeholder="Search question or article..." />
            <button type="submit">
              <i className="ti-search" />
            </button>
          </div>
          {/* /search-input */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-wallet" />
                <h3>Payments</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-user" />
                <h3>Account</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-help" />
                <h3>General help</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-truck" />
                <h3>Shipping</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-eraser" />
                <h3>Cancellation</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="box_topic" href="#0">
                <i className="ti-comments" />
                <h3>Reviews</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus.
                </p>
              </a>
            </div>
          </div>
          {/*/row*/}
        </div>
        {/* /container */}
        <div className="bg_white">
          <div className="container margin_30">
            <h5>Popular Articles</h5>
            <div className="list_articles add_bottom_15 clearfix">
              <ul>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Account</strong> - Et dicit vidisse epicurei pri
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Account</strong> - Ad sit virtute rationibus
                    efficiantur
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Refund</strong> - Partem vocibus omittam pri ne
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Shipping</strong> - Case debet appareat duo cu
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Payments</strong> - Impedit torquatos quo in
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Warranty</strong> - Nec omnis alienum no
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Refund</strong> - Quo eu soleat facilisi menandri
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-file" />
                    <strong>Reviews</strong> - Et dicit vidisse epicurei pri
                  </a>
                </li>
              </ul>
            </div>
            {/* /list_articles */}
          </div>
        </div>
        {/* /bg_white */}
      </main>
    </div>
  );
};

export default Help;
