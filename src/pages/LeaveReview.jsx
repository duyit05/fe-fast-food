import React from 'react'

const LeaveReview = () => {
  return (
    <div id="page">
  <main>
    <div className="container margin_60_35">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="write_review">
            <h1>Write a review for Armor Air X Fear</h1>
            <div className="rating_submit">
              <div className="form-group">
                <label className="d-block">Overall rating</label>
                <span className="rating mb-0">
                  <input type="radio" className="rating-input" id="5_star" name="rating-input" defaultValue="5 Stars" /><label htmlFor="5_star" className="rating-star" />
                  <input type="radio" className="rating-input" id="4_star" name="rating-input" defaultValue="4 Stars" /><label htmlFor="4_star" className="rating-star" />
                  <input type="radio" className="rating-input" id="3_star" name="rating-input" defaultValue="3 Stars" /><label htmlFor="3_star" className="rating-star" />
                  <input type="radio" className="rating-input" id="2_star" name="rating-input" defaultValue="2 Stars" /><label htmlFor="2_star" className="rating-star" />
                  <input type="radio" className="rating-input" id="1_star" name="rating-input" defaultValue="1 Star" /><label htmlFor="1_star" className="rating-star" />
                </span>
              </div>
            </div>
            {/* /rating_submit */}
            <div className="form-group">
              <label>Title of your review</label>
              <input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
            </div>
            <div className="form-group">
              <label>Your review</label>
              <textarea className="form-control" style={{height: 180}} placeholder="Write your review to help others learn about this online business" defaultValue={""} />
            </div>
            <div className="form-group">
              <label>Add your photo (optional)</label>
              <div className="fileupload"><input type="file" name="fileupload" accept="image/*" /></div>
            </div>
            <div className="form-group">
              <div className="checkboxes float-left add_bottom_15 add_top_15">
                <label className="container_check">Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <a href="confirm.html" className="btn_1">Submit review</a>
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
    {/* /container */}
  </main>
  {/*/main*/}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h3 data-bs-target="#collapse_1">Quick Links</h3>
          <div className="collapse dont-collapse-sm links" id="collapse_1">
            <ul>
              <li><a href="about.html">About us</a></li>
              <li><a href="help.html">Faq</a></li>
              <li><a href="help.html">Help</a></li>
              <li><a href="account.html">My account</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contacts.html">Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 data-bs-target="#collapse_2">Categories</h3>
          <div className="collapse dont-collapse-sm links" id="collapse_2">
            <ul>
              <li><a href="listing-grid-1-full.html">Clothes</a></li>
              <li><a href="listing-grid-2-full.html">Electronics</a></li>
              <li><a href="listing-grid-1-full.html">Furniture</a></li>
              <li><a href="listing-grid-3.html">Glasses</a></li>
              <li><a href="listing-grid-1-full.html">Shoes</a></li>
              <li><a href="listing-grid-1-full.html">Watches</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 data-bs-target="#collapse_3">Contacts</h3>
          <div className="collapse dont-collapse-sm contacts" id="collapse_3">
            <ul>
              <li><i className="ti-home" />97845 Baker st. 567<br />Los Angeles - US</li>
              <li><i className="ti-headphone-alt" />+94 423-23-221</li>
              <li><i className="ti-email" /><a href="#0">info@allaia.com</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 data-bs-target="#collapse_4">Keep in touch</h3>
          <div className="collapse dont-collapse-sm" id="collapse_4">
            <div id="newsletter">
              <div className="form-group">
                <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                <button type="submit" id="submit-newsletter"><i className="ti-angle-double-right" /></button>
              </div>
            </div>
            <div className="follow_us">
              <h5>Follow Us</h5>
              <ul>
                <li><a href="#0"><i className="bi bi-facebook" /></a></li>
                <li><a href="#0"><i className="bi bi-twitter-x" /></a></li>
                <li><a href="#0"><i className="bi bi-instagram" /></a></li>
                <li><a href="#0"><i className="bi bi-tiktok" /></a></li>
                <li><a href="#0"><i className="bi bi-whatsapp" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <hr />
      <div className="row add_bottom_25">
        <div className="col-lg-6">
          <ul className="footer-selector clearfix">
            <li>
              <div className="styled-select lang-selector">
                <select>
                  <option value="English" selected>English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Russian">Russian</option>
                </select>
              </div>
            </li>
            <li>
              <div className="styled-select currency-selector">
                <select>
                  <option value="US Dollars" selected>US Dollars</option>
                  <option value="Euro">Euro</option>
                </select>
              </div>
            </li>
            <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/cards_all.svg" alt="" width={198} height={30} className="lazy" /></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul className="additional_links">
            <li><a href="#0">Terms and conditions</a></li>
            <li><a href="#0">Privacy</a></li>
            <li><span>© 2024 Allaia</span></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/*/footer*/}
</div>

  )
}

export default LeaveReview
