import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenTops from "./pages/MenTops";
import MenBottoms from "./pages/MenBottoms";
import MenFootwares from "./pages/MenFootwares";
import Cart from "./pages/Cart";
import { ProductPage } from "./pages/ProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import ThankYou from "./pages/ThankYou";
import Profile from "./pages/Profile";
import { RequireAuth } from "./components/utils/RequireAuth";
import Accessories from "./pages/Accessories";
import ScrollToTop from "./pages/ScrollToTop";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* public Route */}

          <Route path="/" element={<HomePage />} />
          <Route path="/kits-jerseys" element={<MenTops />} />
          <Route path="/kits-shorts" element={<MenBottoms />} />
          <Route path="/kits-boots" element={<MenFootwares />} />
          <Route path="/kits-accessories" element={<Accessories />} />
          <Route path="/all-kits" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/myaccount/login" element={<Login />} />
          <Route path="/myaccount/register" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* private route */}

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />{" "}
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
