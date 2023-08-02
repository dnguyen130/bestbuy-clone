import { ReactElement } from "react";
import CarouselComponent from "./carousel";
import { CarouselItemType } from "./carouselitem";

interface CarouselCardType {
  CarouselArray: CarouselItemType[];
  banner: string;
  dark: boolean;
  header: string;
  subheader: string;
  buttontext: string;
}

export default function CarouselCard({
  CarouselArray,
  banner,
  dark,
  header,
  subheader,
  buttontext,
}: CarouselCardType): ReactElement {
  return (
    <div className={dark ? "carouselcarddark" : "carouselcard"}>
      <div className={dark ? "textsidedark" : "textside"}>
        <img src={banner} className="banner" alt="banner" />
        <h2>{header}</h2>
        <p>{subheader}</p>
        <button className={dark ? "lightbutton" : "darkbutton"}>
          {buttontext}
        </button>
      </div>
      <div className="carouselcont">
        <CarouselComponent CarouselArray={CarouselArray} />
        <div className="custom-featured-pagination2" />
      </div>
    </div>
  );
}
