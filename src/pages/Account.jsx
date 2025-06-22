import React from "react";

const Account = () => {
  return (
    <div>
      <main className="bg_gray">
        <div className="container margin_30">
          <div className="page_header">
            <h1>Sign In or Create an Account</h1>
          </div>
          {/* /page_header */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="box_account">
                <h3 className="client">Already Client</h3>
                <div className="form_container">
                  <div className="row no-gutters">
                    <div className="col-lg-6 pr-lg-1">
                      <a href="#0" className="social_bt facebook">
                        Login with Facebook
                      </a>
                    </div>
                    <div className="col-lg-6 pl-lg-1">
                      <a href="#0" className="social_bt google">
                        Login with Google
                      </a>
                    </div>
                  </div>
                  <div className="divider">
                    <span>Or</span>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password_in"
                      id="password_in"
                      defaultValue=""
                      placeholder="Password*"
                    />
                  </div>
                  <div className="clearfix add_bottom_15">
                    <div className="checkboxes float-start">
                      <label className="container_check">
                        Remember me
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="float-end">
                      <a href="abc" id="forgot">
                        Lost Password?
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      defaultValue="Log In"
                      className="btn_1 full-width"
                    />
                  </div>
                  <div id="forgot_pw">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email_forgot"
                        id="email_forgot"
                        placeholder="Type your email"
                      />
                    </div>
                    <p>A new password will be sent shortly.</p>
                    <div className="text-center">
                      <input
                        type="submit"
                        defaultValue="Reset Password"
                        className="btn_1"
                      />
                    </div>
                  </div>
                </div>
                {/* /form_container */}
              </div>
              {/* /box_account */}
              <div className="row">
                <div className="col-md-6 d-none d-lg-block">
                  <ul className="list_ok">
                    <li>Find Locations</li>
                    <li>Quality Location check</li>
                    <li>Data Protection</li>
                  </ul>
                </div>
                <div className="col-md-6 d-none d-lg-block">
                  <ul className="list_ok">
                    <li>Secure Payments</li>
                    <li>H24 Support</li>
                  </ul>
                </div>
              </div>
              {/* /row */}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="box_account">
                <h3 className="new_client">New Client</h3>{" "}
                <small className="float-right pt-2">* Required Fields</small>
                <div className="form_container">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email_2"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password_in_2"
                      id="password_in_2"
                      defaultValue=""
                      placeholder="Password*"
                    />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label
                      className="container_radio"
                      style={{ display: "inline-block", marginRight: 15 }}
                    >
                      Private
                      <input
                        type="radio"
                        name="client_type"
                        defaultChecked=""
                        defaultValue="private"
                      />
                      <span className="checkmark" />
                    </label>
                    <label
                      className="container_radio"
                      style={{ display: "inline-block" }}
                    >
                      Company
                      <input
                        type="radio"
                        name="client_type"
                        defaultValue="company"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="private box">
                    <div className="row no-gutters">
                      <div className="col-6 pr-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-6 pl-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name*"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Address*"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row no-gutters">
                      <div className="col-6 pr-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City*"
                          />
                        </div>
                      </div>
                      <div className="col-6 pl-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal Code*"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row no-gutters">
                      <div className="col-6 pr-1">
                        <div className="form-group">
                          <select
                            id="country"
                            className="form-select"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Country*
                            </option>
                            <option value="Europe">Europe</option>
                            <option value="United States">United States</option>
                            <option value="Asia">Asia</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 pl-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telephone *"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                  {/* /private */}
                  <div className="company box" style={{ display: "none" }}>
                    <div className="row no-gutters">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company Name*"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Address"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row no-gutters">
                      <div className="col-6 pr-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City*"
                          />
                        </div>
                      </div>
                      <div className="col-6 pl-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal Code*"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                    <div className="row no-gutters">
                      <div className="col-6 pr-1"></div>
                      <div className="col-6 pl-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telephone *"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                  {/* /company */}
                  <hr />
                  <div className="form-group">
                    <label className="container_check">
                      Accept <a href="#0">Terms and conditions</a>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      defaultValue="Register"
                      className="btn_1 full-width"
                    />
                  </div>
                </div>
                {/* /form_container */}
              </div>
              {/* /box_account */}
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    </div>
  );
};

export default Account;
