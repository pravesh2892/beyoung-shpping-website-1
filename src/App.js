
import './App.css';
import Nav from './Navbar/Nav';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Categories from './Components/Categories';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Product from './Components/Product';
import BrandCategories from './Components/BrandCategories';
import Account  from './Components/Account';
import Orders from './Components/Orders';
import Wallet from './Components/Wallet';
import Address from './Components/Address';
import Profile from './Components/Profile';
import ResCategories from './Components/ResCategories';
import NotAvailable from './Components/NotAvailable';
import Payment from './Components/Payment';
import OrderInfo from './Components/OrderInfo';
import SearchResult from './Components/SearchResult';
import ContactUs from './Components/ContactUs';
import PlaceOrder from './Components/PlaceOrder';

function App() {
  return (
    <>
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Product />}/>
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/Wishlist" element={<Wishlist/>}/>
    <Route path="/Cart" element={<Cart />}/>
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />}/>
    <Route path="/subcategories/:gender/:id" element={<Categories/>}/>
    <Route path="/brand/:gender/:special" element={<BrandCategories />}/>
    <Route path="/Account" element={<Account />}/>
    <Route path="/Orders" element={<Orders />}/>
    <Route path="/Wallet" element={<Wallet />}/>
    <Route path="/Address" element={<Address/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/ResCategory/:id" element={<ResCategories/>}/>
    <Route path="/NotAvailable" element={<NotAvailable/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/OrderInfo/:id" element={<OrderInfo/>}/>
    <Route path= '/SearchResult/:id' element={<SearchResult />}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
