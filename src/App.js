import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer'
import banner_men from './Assets/banner_mens.png'
import banner_women from './Assets/banner_women.png'
import banner_kids from './Assets/banner_kids.png'
import Product from './Pages/Product';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/shopCategory';
import { ShopContextProvider } from './Context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
                        <Route
                            path="/"
                            element={<Shop />}
                        ></Route>
                        <Route
                            path="/men"
                            element={<ShopCategory banner={banner_men}  category="men"/>}
                        ></Route>
                        <Route
                            path="/women"
                            element={<ShopCategory banner={banner_women}  category="women"/>}
                        ></Route>
                        <Route
                            path="/kids"
                            element={<ShopCategory banner={banner_kids}  category="kid"/>}
                        ></Route>
                        <Route
                            path="/login"
                            element={<Login />}
                        ></Route>
                        <Route
                            path='/signup'
                            element={<SignUp/>}
                          ></Route>
                        <Route
                            path="/cart"
                            element={<Cart />}
                        ></Route>
                        <Route
                          path='/product'
                          element={<Product/>}
                        >
                          <Route
                            path=':productId'
                            element={<Product/>}
                          ></Route>
                        </Route>

                    </Routes>
                    <Footer/>
      </BrowserRouter>
    </div>
    </ShopContextProvider>
  );
}

export default App;
