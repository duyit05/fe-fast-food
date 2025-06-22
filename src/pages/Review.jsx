import React from "react";

const Review = () => {
  return (
  
    <div className="tabs_product">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="review_content">
            <div className="clearfix add_bottom_10">
              <span className="rating">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <em>5.0/5.0</em>
              </span>
              <em>Published 54 minutes ago</em>
            </div>
            <h4>"Commpletely satisfied"</h4>
            <p>
              Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
              scaevola sea. Et nec tantas accusamus salutatus, sit commodo
              veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
              essent fuisset ut. Viderer petentium cu his.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="review_content">
            <div className="clearfix add_bottom_10">
              <span className="rating">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star empty" />
                <i className="icon-star empty" />
                <em>4.0/5.0</em>
              </span>
              <em>Published 1 day ago</em>
            </div>
            <h4>"Always the best"</h4>
            <p>
              Et nec tantas accusamus salutatus, sit commodo veritus te, erat
              legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut.
              Viderer petentium cu his.
            </p>
          </div>
        </div>
      </div>
      {/* /row */}
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="review_content">
            <div className="clearfix add_bottom_10">
              <span className="rating">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star empty" />
                <em>4.5/5.0</em>
              </span>
              <em>Published 3 days ago</em>
            </div>
            <h4>"Outstanding"</h4>
            <p>
              Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
              scaevola sea. Et nec tantas accusamus salutatus, sit commodo
              veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
              essent fuisset ut. Viderer petentium cu his.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="review_content">
            <div className="clearfix add_bottom_10">
              <span className="rating">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <em>5.0/5.0</em>
              </span>
              <em>Published 4 days ago</em>
            </div>
            <h4>"Excellent"</h4>
            <p>
              Sit commodo veritus te, erat legere fabulas has ut. Rebum laudem
              cum ea, ius essent fuisset ut. Viderer petentium cu his.
            </p>
          </div>
        </div>
      </div>
      {/* /row */}
      <p className="text-end">
        <a href="/leave-review" className="btn_1">
          Leave a review
        </a>
      </p>
      
    </div>
    
  );
};

export default Review;
