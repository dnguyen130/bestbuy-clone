import { ReactElement } from "react";
import CarouselComponent from "./carousel";
import { CarouselItemType } from "./carouselitem";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface CarouselCardType {
  CarouselArray: CarouselItemType[];
  CarouselNumber: string;
  banner: string;
  dark: boolean;
  header: string;
  subheader: string;
  buttontext: string;
}

export default function CarouselCard({
  CarouselArray,
  CarouselNumber,
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
        <div className={`custom-prev-nav${CarouselNumber} custom-prev-nav`}>
          <div className="arrow-circle" />
          <BsChevronLeft size="100%" style={{ zIndex: 10 }} />
        </div>
        <CarouselComponent
          CarouselArray={CarouselArray}
          CarouselNumber={CarouselNumber}
        />
        <div className={`custom-next-nav${CarouselNumber} custom-next-nav`}>
          <div className="arrow-circle" />
          <BsChevronRight size="100%" style={{ zIndex: 10 }} />
        </div>
        <div
          className={`custom-pagination${CarouselNumber} custom-pagination`}
        />
      </div>
    </div>
  );
}
