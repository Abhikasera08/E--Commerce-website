import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.css'; // Import the CSS file

const Singleproduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id, 'id');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!product) return <p className="error">Product not found.</p>;

  return (
    <div className="container">
      <div className="product-card">
        <h1 className="product-title">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default Singleproduct;
