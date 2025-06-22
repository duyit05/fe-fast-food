import "./App.css";
import Header from "./components/layer/Header";
import Footer from "./components/layer/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Confirm from "pages/Confirm";
import Account from "pages/Account";
import Help from "pages/Help";
import NotFound from "pages/404";
import Blog from "pages/Blog";
import ProductDetail from "pages/ProductDetail";
import CheckOut from "pages/CheckOut";
import Review from "pages/Review";
import TrackOrder from "pages/TrackOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishList from "pages/WishList";
import Order from "pages/Order";
import LeaveReview from "pages/LeaveReview";

function App() {
  return (
    <>
      <div id="page">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Account />} />
            <Route path="/detail-product/:id" element={<ProductDetail />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/help" element={<Help />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/review" element={<Review />}/>
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/my-order" element={<Order />} />
            <Route path="/leave-review" element={<LeaveReview />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
