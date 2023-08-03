import { ReactElement } from "react";
import { CarouselItemType } from "../carouselitem";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarouselComponentType {
  CarouselArray: CarouselItemType[];
  CarouselNumber: string;
}

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

export default function CarouselComponent({
  CarouselArray,
  CarouselNumber,
}: CarouselComponentType): ReactElement {
  return (
    <Swiper
      slidesPerView="auto"
      breakpoints={{
        400: {
          slidesPerGroup: 2,
        },
        768: {
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerGroup: 3,
        },
      }}
      pagination={{
        el: `.custom-pagination${CarouselNumber}`,
        clickable: true,
      }}
      navigation={{
        prevEl: `.custom-prev-nav${CarouselNumber}`,
        nextEl: `.custom-next-nav${CarouselNumber}`,
      }}
      modules={[Pagination, Navigation]}
    >
      {Object.values(CarouselArray).map((o) => {
        return (
          <SwiperSlide className="carouselitem">
            <img src={o.image} />
            <div className="carouseltext">
              <p className="itemname">{o.name}</p>
              <div className="carouselrating">
                {StarCalc(o.rating).map((o, i) => {
                  if (o === "full") {
                    return <BsStarFill key={i} className="starfill" />;
                  } else if (o === "half") {
                    return <BsStarHalf key={i} className="starfill" />;
                  } else {
                    return <BsStar key={i} className="star" />;
                  }
                })}
              </div>
              <p className="itemreview">({o.reviews} Reviews)</p>
              {o.saveAmount && <p className="itemsale">SAVE ${o.saveAmount}</p>}
              <p className={o.saveAmount ? "itempricesale" : "itemprice"}>
                ${o.price}
              </p>
              {o.isMarketplace && (
                <div className="itemmarketplace">
                  <BiSolidShoppingBags className="marketicon" size="100%" />
                  <p>Marketplace seller</p>
                </div>
              )}
              {o.ehf && <p className="itemehf">Plus ${o.ehf} EHF</p>}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
