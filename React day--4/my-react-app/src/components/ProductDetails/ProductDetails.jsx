import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg rounded-4 p-4"
        style={{ maxWidth: "900px" }}
      >
        <div className="row g-4">
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded-3"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold mb-3">{product.title}</h3>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-success fw-bold mb-4">${product.price}</h4>
            <div className="mt-4">
              <button className="btn btn-success me-3">Add to Cart</button>
              <Link to="/portfolio" className="btn btn-outline-secondary">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
