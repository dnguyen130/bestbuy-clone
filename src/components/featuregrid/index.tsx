import { ReactElement } from "react";

export default function FeatureGrid(): ReactElement {
  return (
    <div className="featuregrid">
      <div className="gridelement">
        <img src="product1.webp" />
        <div className="featurebanner">
          <h3>
            Best Buy <strong>Outlet</strong>
          </h3>
          <h4>SALE ON NOW</h4>
        </div>
        <h2>Save on more tech you'll love</h2>
        <button className="darkbutton">Shop outlet deals</button>
      </div>
      <div className="gridelement landscape">
        <div className="column">
          <div className="title">
            <strong>The Big Summer Sale</strong>
          </div>
          <div className="subtitle">Soak up the savings.</div>
          <button className="lightbutton">Shop Now</button>
        </div>
        <img src="product2.webp" />
      </div>
      <div className="gridelement">
        <div className="topdeal">
          <h4>
            Top <br />
            Deals
          </h4>
        </div>
        <div className="description">
          Find the best offers from our latest sales, all in one place.
        </div>
        <button className="lightbutton">Shop Now</button>
      </div>
      <div className="gridelement">
        <img src="product3.webp" />
        <div className="description">Save up to $200 on select smart TVs.</div>
        <button className="lightbutton">Shop Now</button>
      </div>
    </div>
  );
}
