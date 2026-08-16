import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api.js";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/products/${id}`).then(r => setProduct(r.data)).catch(e => setError(e.response?.data?.error || "Product could not be loaded."));
  }, [id]);

  if (error) return <section className="section page-top"><p className="error">{error}</p></section>;
  if (!product) return <section className="section page-top"><p className="loading">Loading product…</p></section>;

  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "2348000000000";
  const message = `Hello HG Energy, I am interested in ${product.name}.`;
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <section className="section page-top">
      <Link className="back-link" to="/products">← Back to products</Link>
      <div className="detail">
        <div className="detail-image">
          {product.imageUrl ? <img src={product.imageUrl} alt={product.name} /> : <span>HG ENERGY</span>}
        </div>
        <div className="detail-content">
          <span className="eyebrow">{product.Category?.name || "Solar Product"}</span>
          <h1>{product.name}</h1>
          <div className={product.availability ? "detail-status available-text" : "detail-status unavailable-text"}>
            {product.availability ? "● Available" : "● Currently unavailable"}
          </div>
          <strong className="detail-price">₦{Number(product.price).toLocaleString()}</strong>
          <p className="detail-description">{product.description || "Contact us for product information and suitability."}</p>

          {product.specifications && (
            <div className="specs">
              <h3>Specifications</h3>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div className="spec-row" key={key}><span>{key}</span><strong>{String(value)}</strong></div>
              ))}
            </div>
          )}

          <a className="btn btn-dark wide-btn" href={whatsapp}>Ask about this product</a>
        </div>
      </div>
    </section>
    </>

    
  );
}