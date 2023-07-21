import { ReactElement } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarCalc = (rating: number) => {
  const array: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating && i + 1 < rating) {
      array.push("full");
    } else if (i < rating && i + 1 > rating) {
      array.push("half");
    } else {
      array.push("empty");
    }
  }
  return array;
};

interface CarouselItemType {
  rating: number;
}

export default function CarouselItem({
  rating,
}: CarouselItemType): ReactElement {
  return (
    <div className="carouselitem">
      <img src="/outlet/1.jpeg" />
      <div className="carouseltext">
        <p className="itemname">
          Refurbished (Excellent) - Dyson Official Outlet - Airwrap Styler
          Complete Long - Vinca Blue/Rose - (1 Year Dyson Warranty)
        </p>
        <div className="carouselrating">
          {StarCalc(rating).map((o, i) => {
            if (o === "full") {
              return <BsStarFill key={i} className="starfill" />;
            } else if (o === "half") {
              return <BsStarHalf key={i} className="starfill" />;
            } else {
              return <BsStar key={i} className="star" />;
            }
          })}
        </div>
        <p className="itemreview">(0 Reviews)</p>
        <p className="itemsale">SAVE $248</p>
        <p className="itemprice">$399.99</p>
      </div>
    </div>
  );
}
