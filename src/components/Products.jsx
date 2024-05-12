import React, { useState } from "react";
import "../styles/Products.css";
import Recommend from "./Recommend";
import Filter from "./Filter";

const Products = () => {
    const [showFilter, setShowFilter] = useState(true);

  return (
    <div className="products-container">
      <ul className="mobie-home-container">
        <li className="mobie-home">HOME |</li>
        <li className="mobile-shop">SHOP</li>
      </ul>
      {/* product heading */}
      <div className="product-heading">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h4>
      </div>
      {/* recommended */}
      <Recommend showFilter={showFilter} setShowFilter={setShowFilter}/>
      {/* filter and products */}
      <Filter showFilter={showFilter} setShowFilter={setShowFilter}/>
    </div>
  );
};

export default Products;
