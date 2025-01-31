import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, removeCart } from "../store/cartSlice";
import { addfavitem, removeFav } from "../store/favSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonStates, setButtonStates] = useState({});
  const [HeartStates, setHeartStates] = useState({});

  const [favitem, setFavitem] = useState("black");

  const handleFavorite = (product) => {
    const isFavored = HeartStates[product.id]?.color === "red";

    setHeartStates((prevStates) => ({
      ...prevStates,
      [product.id]: { color: isFavored ? "black" : "red" },
    }));

    if (isFavored) {
      dispatch(removeFav(product.id));
    } else {
      dispatch(addfavitem(product));
    }
  };
  const changeColor = () => {
    setFavitem((pervColor) => (pervColor === "black" ? "red" : "black"));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    const isInCart = buttonStates[product.id]?.color === "red";

    if (isInCart) {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [product.id]: { color: "green", text: "Add to Cart" },
      }));
      dispatch(removeCart(product.id));
    } else {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [product.id]: { color: "red", text: "Remove from Cart" },
      }));
      dispatch(add(product));
    }
  };

  return (
    <>
      <h1 style={styles.h1}>Product Dashboard</h1>
      <div style={{ padding: "15px"  }}>
        {loading ? (
          <p style={{marginLeft:"650px"}}>Loading products...</p>
        ) : (
          <div style={styles.productContainer}>
            {products.map((product) => (
              <div key={product.id} style={styles.card}>
              <Link to={`/products/${product.id}`}>
  <img 
    src={product.image}
    alt={product.title}
    style={styles.image}
  />
</Link>

                <FontAwesomeIcon
                  onClick={() => {
                    handleFavorite(product);
                    changeColor();
                  }}
                  style={{ color: HeartStates[product.id]?.color||"black" }}
                  icon={faHeart}
                />

                <h3 style={styles.title}>{product.title}</h3>
                <p style={styles.price}>${product.price}</p>
                <div style={styles.buttonContainer}>
                  <button
                    style={{
                      backgroundColor:
                        buttonStates[product.id]?.color || "green",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "4px",
                      cursor:"pointer"
                    }}
                    onClick={() => addToCart(product)}
                  >
                    {buttonStates[product.id]?.text || "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "20px",
  },
  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: "4px",
  },
  h1: {
    textAlign: "center",
  },
  title: {
    fontSize: "1.0rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#2e8b57",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
};

export default Product;
