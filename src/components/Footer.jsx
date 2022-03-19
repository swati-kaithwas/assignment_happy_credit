import React from "react";
import "./Footer.css";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="Footer_box">
      {/* <div className="hed"> */}
      <h2>Klarna.</h2>
      {/* </div> */}
      <div>
        <select className="select_country">
          <option>Featured</option>
          <option>A-Z</option>
          <option value="Newest">Newest</option>
          <option value="Featured">Featured</option>
          <option value="A-Z">A-Z</option>
          <option value="Newest">Newest</option>
          <option value="Featured">Featured</option>
          <option value="A-Z">A-Z</option>
          <option value="Newest">Newest</option>
        </select>
      </div>

      <div className="footer_grid">
        <div>
          <GrFacebookOption className="footer_icon" />
          <FaInstagram className="footer_icon" />
          <GrLinkedinOption className="footer_icon" />
          <FaTwitter className="footer_icon" />
        </div>
        <div>
          <li>Klarna</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Legal</li>
          <li>Press</li>
          <li>Extra O blog</li>
          <li>Privacy</li>
          <li>Email connect</li>
          <li>Sustainability</li>
        </div>
        <div>
          <li>Customer </li>
          <li>Buy now pay later</li>
          <li>Contact us via app</li>
          <li>Customer service</li>
          <li>Klarna stores</li>
          <li>Shopping app</li>
          <li>Rewards club</li>
          <li>Buyer Protection Policy</li>
          <li>Feedback and complaints</li>
          <li>Shopping inspiration</li>
        </div>
        <div>
          <li>Business</li>
          <li>Sell with Klarna</li>
          <li>Payment methods</li>
          <li>Platforms and partners</li>
          <li>Partner program</li>
          <li>Business login</li>
          <li>Business support</li>
          <li>Operational status</li>
        </div>
      </div>
      <div className="footer_last">
        <p className="footer_last1">
          Monthly financing through Klarna is issued by WebBank, member FDIC.
          Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street,
          Third Floor, Columbus, OH 43215. Other CA resident loans made or
          arranged pursuant to a California Finance Lenders Law license.
        </p>
        <div className="footer_last2">
          <p>Legal</p>
          <p>Terms</p>
          <p>Privacy policy</p>
          <p>Cookies</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};
