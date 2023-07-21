import { ReactElement } from "react";
import CarouselComponent from "./carousel";

export default function CarouselCard(): ReactElement {
  return (
    <div className="carouselcard">
      <div className="textside">
        <div className="featurebanner">
          <h3>
            Best Buy <strong>Outlet</strong>
          </h3>
          <h4>SALE ON NOW</h4>
        </div>
        <h2>Save big on outlet tech.</h2>
        <p>
          Experience outstanding deals on refurbished and open box products.
        </p>
        <button className="darkbutton">Shop deals</button>
      </div>
      <div className="carouselcont">
        <CarouselComponent />
      </div>
    </div>
  );
}
