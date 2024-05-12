import React  from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { TiTick } from "react-icons/ti";

const Recommend = ({showFilter, setShowFilter}) => {

    const onClickshow = () => {
        setShowFilter(!showFilter);
      };
    
      const onClickHide = () => {
        setShowFilter(!showFilter);
      };
  return (
    <div>
    <hr />
    <div className="recommended-container">
      <div className="items-container">
        <p className="items">3425 ITEMS</p>
        {showFilter ?   (
          <div className="hide-container" onClick={onClickHide}>
            <IoIosArrowBack />
            <p className="filter-heading">HIDE FILTER</p>
          </div>
        ): (
            <div className="hide-container" onClick={onClickshow}>
              <IoIosArrowForward />
              <p className="filter-heading">SHOW FILTER</p>
            </div>
          )}
      </div>
      <select className="select-container">
        <option className="recom">
          <TiTick /> RECOMMENDED
        </option>
        <option className="option">Newest first</option>
        <option className="option">popular</option>
        <option className="option">Price : high to low</option>
        <option className="option">Price : low to high</option>
      </select>
    </div>
    <hr />
  </div>
  )
}

export default Recommend