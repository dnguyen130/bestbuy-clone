import { ReactElement } from "react";
import CarouselComponent from "./carousel";
import { CarouselItemType } from "./carouselitem";

interface CarouselCardType {
  CarouselArray: CarouselItemType[];
  banner: string;
}

export default function CarouselCard({
  CarouselArray,
  banner,
}: CarouselCardType): ReactElement {
  return (
    <div className="carouselcard">
      <div className="textside">
        <img src={banner} className="banner" alt="banner" />
        <h2>Save big on outlet tech.</h2>
        <p>
          Experience outstanding deals on refurbished and open box products.
        </p>
        <button className="darkbutton">Shop deals</button>
      </div>
      <div className="carouselcont">
        <CarouselComponent CarouselArray={CarouselArray} />
      </div>
    </div>
  );
}
