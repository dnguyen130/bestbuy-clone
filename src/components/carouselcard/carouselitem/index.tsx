import { ReactElement } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";

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
  image: string;
  rating: number;
  name: string;
  reviews: number;
  saveAmount?: string;
  price: string;
  isMarketplace: boolean;
  ehf?: string;
}

export default function CarouselItem({
  image,
  rating,
  name,
  reviews,
  saveAmount,
  price,
  isMarketplace,
  ehf,
}: CarouselItemType): ReactElement {
  return (
    <div className="carouselitem">
      <img src={image} />
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
        {saveAmount && <p className="itemsale">SAVE ${saveAmount}</p>}
        <p className={saveAmount ? "itempricesale" : "itemprice"}>${price}</p>
        {isMarketplace && (
          <div className="itemmarketplace">
            <BiSolidShoppingBags className="marketicon" size="100%" />
            <p>Marketplace seller</p>
          </div>
        )}
        {ehf && <p className="itemehf">Plus ${ehf} EHF</p>}
      </div>
    </div>
  );
}
