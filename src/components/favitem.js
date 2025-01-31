import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./cart.css";
import { addfavitem,removeFav } from "../store/favSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function Favitem() {
  const favProducts = useSelector((state) => state.favitem);
  console.log(favProducts)
  const dispatch = useDispatch(); // Import and initialize useDispatch

  const handleRemove =(id) =>{
    console.log(id)
    dispatch(removeFav(id));
  }
 

  return (
    <>
    <div className="container1">
      <h1>favitem</h1>
      {favProducts.length === 0 ? (
        <p className="empty-message">Your bag is empty.</p>
      ) : (
        <ul>
          {favProducts.map((product, index) => (
            <li className="list1" key={index}>
              <img src={product.image} alt={product.title} />
              <div>
                <p>{product.title}</p>
                <p className="price">${product.price}</p>
                   <FontAwesomeIcon
                                  onClick={() => {
                                    handleRemove(product.id);
                                  
                                  }}
                                  style={{color:"red"}}
                                  icon={faHeart}
                                />
              </div>
               
                              
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}

export default Favitem;
