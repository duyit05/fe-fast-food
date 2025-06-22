import React from "react";

const NotFound = () => {
  return (
    <div>
      <main className="bg_gray">
        <div id="error_page">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-7 col-lg-9">
                <img
                  src="img/404.svg"
                  alt=""
                  className="img-fluid"
                  width={400}
                  height={212}
                />
                <p>The page you're looking is not founded!</p>
                <form>
                  <div className="search_bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you looking for?"
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
        {/* /error_page */}
      </main>
    </div>
  );
};

export default NotFound;
