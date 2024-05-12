import React from "react";
import ProductsItems from "./ProductsItems";

const Filter = ({ showFilter }) => {
  return (
    <div className="filter-products-container">
      {/* filter */}
      
      {showFilter && (
        <div className="filter-container">
          <div className="filter-items">
            <input type="checkbox" className="checkbox" />
            <h3>CUSTOMIZBLE</h3>
          </div>
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              IDEAL FOR <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              OCCASION <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              WORK <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              FABRIC <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />

          <hr />
          {/* details */}
          <details className="details">
            <summary>
              SEGMENT <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              SUITABLE FOR <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
          <hr />
          {/* details */}
          <details className="details">
            <summary>
              RAW MATERIALS<p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />

          <hr />
          {/* details */}
          <details className="details">
            <summary>
              PATTERN <p>All</p>
            </summary>

            <p className="unselect-all">Unselect all</p>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Men</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Women</p>
            </div>
            <div className="filter-values">
              <input type="checkbox" className="filter-checkbox" />
              <p className="catergoy">Baby & Kids</p>
            </div>
          </details>
          <hr />
        </div>
      )}
      {/* products */}
      <div className="products-container">
        <ProductsItems showFilter={showFilter} />
      </div>
    </div>
  );
};

export default Filter;
