import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './components/product';
import Navbar from './components/navbar';
import Cart from './components/cart';
import Singin from './components/singin';
import Login from './components/login';
import Favitem from './components/favitem';
import Singleproduct from './components/singleproduct';

function App() {
  return (
   <>
   <div>

  </div>
<Router>
<Navbar />

      <div>
    
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singing" element={<Singin />} />
          <Route path="/loging" element={<Login />} />
          <Route path="/favitem" element={<Favitem />} />
          <Route path="products/:id" element={<Singleproduct />} />
        </Routes>
      </div>
  
    </Router>
 
    </>
  );
}

export default App;
