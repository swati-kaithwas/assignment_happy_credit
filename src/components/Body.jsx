import React, { useState } from "react";
import "./Body.css";
import { GrFormSearch } from "react-icons/gr";
import { Pic } from "./Pic";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Body = () => {
  const [s, setS] = useState("block");
  const [s1, setS1] = useState("block");
  return (
    <div>
      <div className="heading_paragraph">
        <p className="heading_body">All deals and coupons.</p>
        <p className="body_pargraph">
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </p>
      </div>
      <div className="body_half">
        <div className="body_half1">
          <h3>Categories</h3>
          <li>All</li>
          <li>Babies & Kids</li>
          <li>Clothing & Apparel</li>
          <li>Computers & Accessories</li>
          <li>Consumer Electronics</li>
          <li>Gifts</li>
          <li>Health & Beauty</li>
          <li>Holidays & Occasions</li>
          <li>Household</li>
          <li>Media</li>
          <li>Womens</li>
          <li>Sporting Goods</li>
          <li>Office</li>
          <hr />
          <div className="filter">
            <h2>Filter</h2>
            {/* <button >Reset</button> */}
          </div>
          <div>
            <div className="typ_b">
              <div className="typ">Type</div>

              <div
                onClick={() => {
                  setS1(s1 == "none" ? "block" : "none");
                }}
              >
                {s1 == "none" ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
            </div>

            <div style={{ display: `${s1}` }}>
              <input type="checkbox" id="onlycoupons"></input>
              <label for="onlycoupons">Only Coupons</label>
              <br />
              <input type="checkbox" id="exclusives"></input>
              <label for="exclusives">Exclusives</label>
              <br />
              <input type="checkbox" id="bogo"></input>
              <label for="bogo">BOGO and more</label>
            </div>
          </div>
          <hr />
          <div>
            <div className="typ_b">
              <div className="dis">Discount</div>

              <div
                onClick={() => {
                  setS(s == "none" ? "block" : "none");
                }}
              >
                {s == "none" ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
            </div>

            <div style={{ display: `${s}` }}>
              <input type="checkbox" id="discount1"></input>
              <label for="discount1">0-49% off</label>
              <br />

              <input type="checkbox" id="discount2"></input>
              <label for="discount2">50-80% off</label>
            </div>

            <hr />
          </div>
        </div>

        <div className="body_half2">
          <div className="searchdiv">
            <GrFormSearch />
            <input
              type="name"
              className="searchbar"
              placeholder="Search"
              onChange={() => {}}
            />
          </div>
          <div className="pic_grid">
            <Pic />
          </div>
        </div>
      </div>
    </div>
  );
};
