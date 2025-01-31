import React from 'react'
import Product from './product'
import { Link } from 'react-router-dom'
import './navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartProducts = useSelector(state => state.cart);
  return (
   <>
  <div className='nav-main'>
  <h1>E-Commerce</h1>
   <ul className='ul-listitem'>
    <li><Link to ="/" className='listitem1'>Product</Link></li>
    <li><Link to ="/favitem" className='listitem1'>favcart</Link></li>
    <li><Link to ="/cart" className='listitem1'>My Bag {cartProducts.length}</Link></li>
    <button  className='btn' ><Link to="/loging">Log-in</Link></button>
   
   <button className='btn' ><Link to="/singing" >Sing-in</Link></button>
   </ul>
   

   

  </div>
   {/* <Product/> */}
    </>
  )
}


export default Navbar
