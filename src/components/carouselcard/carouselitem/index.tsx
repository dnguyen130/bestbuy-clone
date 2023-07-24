import { ReactElement } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarCalc = (rating: number) => {
  const array: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating && i == 4) {
      array.push("full");
    } else if (i < rating && i + 1 < rating) {
      array.push("full");
    } else if (i < rating && i + 1 > rating) {
      array.push("half");
    } else {
      array.push("empty");
    }
  }
  return array;
};

export interface CarouselItemType {
  rating: number;
  name: string;
  reviews: number;
  onSale: boolean;
  saveAmount: number;
  price: number;
}

export default function CarouselItem({
  rating,
  name = "Name",
  reviews = 0,
  onSale = true,
  saveAmount = 248,
  price = 399.99,
}: CarouselItemType): ReactElement {
  return (
    <div className="carouselitem">
      <img src="/outlet/1.jpeg" />
      <div className="carouseltext">
        <p className="itemname">{name}</p>
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
        <p className="itemreview">({reviews} Reviews)</p>
        {onSale && <p className="itemsale">SAVE ${saveAmount}</p>}
        <p className={onSale ? "itempricesale" : " itemprice"}>${price}</p>
      </div>
    </div>
  );
}
