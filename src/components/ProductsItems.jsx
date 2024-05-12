import React, { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";

import heart from "../assets/heart.png";

import "../styles/ProductsItems.css";

const ProductsItems = ({ showFilter }) => {
  const [likes, setLikes] = useState({});
  const [productsData, setProductsData] = useState([]); 

  const likeImg = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id]
    }));
  };
  const getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    const initialLikes = {};
   
    data.forEach((product) => {
      initialLikes[product.id] = false;
    });
    setLikes(initialLikes);
    setProductsData(data);
  };

  
  useEffect(() => {
    getData();
  }, []);

  return (
    
      <div className={`${showFilter ? "productsItems-container" : "hide-items"}`}>
        {productsData.map((each) => (
          <li key={each.id} className="li-container">
            <img src={each.image} alt={`Picture of ${each.title}`} className="products-image" />
            <p className="title">{each.title}</p>
            <div className="heart-container">
              <p className="sin">
                <span>Sign in</span> or Create an account to see pricing
              </p>
              {likes[each.id] ? (
                <img src={heart} alt="liked" onClick={() => likeImg(each.id)} className="heart-color" />
              ) : (
                <GoHeart onClick={() => likeImg(each.id)} className="heart" />
              )}
            </div>
          </li>
        ))}
      </div>
  
  );
};

export default ProductsItems;
