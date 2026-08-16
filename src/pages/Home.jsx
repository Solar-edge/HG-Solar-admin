import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PanelPicture from '../assets/product 1.jpeg';
import api from "../api.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([api.get("/products"), api.get("/categories")])
      .then(([p, c]) => {
        setProducts(p.data);
        setCategories(c.data);
      })
      .catch(() => { });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <section className="hero">
        <div className="hero-content">
          <h1>Where Solar Meets Smart</h1>
          <p>Reliable solar energy solutions that help homes and businesses enjoy clean, affordable, and dependable power every day.</p>
          <div className="hero-actions">
            <Link className="btn btn-dark" to="/products">Explore Products</Link>
            <Link className="btn btn-light" to="/contact">Talk to Us</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src={PanelPicture} alt="Panel on Gravel pictures" className="hero-image" />
        </div>
      </section>

      <section className="trust-strip">
        <span>PRODUCTS FOR</span>
        <strong>Homes</strong><strong>Businesses</strong><strong>Installations</strong><strong>Long-term energy needs</strong>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">OUR CATALOGUE</span><h2>Energy products built around your needs.</h2></div>
          <Link to="/products">View all products →</Link>
        </div>

        <div className="category-pills">
          {categories.slice(0, 5).map(c => <Link key={c.id} to={`/products?category=${c.id}`}>{c.name}</Link>)}
          {!categories.length && <span>Solar Panels · Batteries · Inverters · More</span>}
        </div>

        <div className="product-grid">
          {products.slice(0, 3).map(product => <ProductPreview key={product.id} product={product} />)}
        </div>
      </section>

      <section className="dark-section">
        <div>
          <span className="eyebrow light">WHY HG ENERGY</span>
          <h2>Simple, dependable solar solutions.</h2>
        </div>
        <div className="benefit-grid">
          <Benefit n="01" title="Quality products" text="A focused catalogue of solar products selected for real-world use." />
          <Benefit n="02" title="Practical guidance" text="We help you understand what fits your energy requirements." />
          <Benefit n="03" title="Direct support" text="Reach the team quickly when you need product or project assistance." />
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">LET'S TALK</span>
          <h2>Ready to explore a better energy setup?</h2>
        </div>
        <Link className="btn btn-dark" to="/contact">Contact HG Energy</Link>
      </section>
    </>
  );
}

function ProductPreview({ product }) {
  return (
    <Link className="product-card" to={`/products/${product.id}`}>
      <div className="product-image">
        {product.imageUrl ? <img src={product.imageUrl} alt={product.name} /> : <span>HG ENERGY</span>}
      </div>
      <div className="product-card-body">
        <span>{product.Category?.name || "Solar Product"}</span>
        <h3>{product.name}</h3>
        <strong>₦{Number(product.price).toLocaleString()}</strong>
      </div>
    </Link>
  );
}

function Benefit({ n, title, text }) {
  return <article className="benefit"><small>{n}</small><h3>{title}</h3><p>{text}</p></article>;
}