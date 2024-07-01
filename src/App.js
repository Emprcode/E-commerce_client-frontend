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
import Headwares from "./pages/Headwares";
import Accessories from "./pages/Accessories";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public Route */}

          <Route path="/" element={<HomePage />} />
          <Route path="/men-tops" element={<MenTops />} />
          <Route path="/men-bottoms" element={<MenBottoms />} />
          <Route path="/men-footwares" element={<MenFootwares />} />
          <Route path="/men-headwares" element={<Headwares />} />
          <Route path="/men-accessories" element={<Accessories />} />
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
