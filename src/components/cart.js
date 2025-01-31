import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { removeCart } from "../store/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    total = total + cartProducts[i].price;
  }

  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeCart(id));
  };

  return (
    <>
      <div className="container1">
        <h1>My Bag</h1>
        <div className="container3">
          {cartProducts.length === 0 ? (
            <p className="empty-message">Your bag is empty.</p>
          ) : (
            <ul>
              {cartProducts.map((product, index) => (
                <li className="list1" key={index}>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <p>{product.title}</p>
                    <p className="price">${product.price}</p>
                    <button
                      className="btn1"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cartProducts.length > 0 && (
            <div className="order-summary">
              <h4 className="text-center">Order Summary</h4>
              <div className="summaryitem">
                <p>Subtotal</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summaryitem">
                <p>Shipping Estimate</p>
                <span>$10.00</span>
              </div>
              <div className="summaryitem">
                <p>Tax Estimate</p>
                <span>$0.00</span>
              </div>
              <div className="summaryitem">
                <p>Order Total</p>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
