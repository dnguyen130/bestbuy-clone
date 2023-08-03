import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeatureBanner from "../featurebanner";

const FeaturedSlides = [
  {
    title: "Save on more tech you'll love",
    titleColor: "black",
    buttonText: "Shop outlet deals",
    bgColor: "#f4f6fa",
    buttonType: "darkbutton",
    picture: "/product1.webp",
    feature: true,
  },
  {
    title: "The Big Summer Sale",
    subtitle: "Soak up the savings.",
    subtitleColor: "white",
    titleColor: "#fecf0a",
    buttonText: "Shop Now",
    bgColor: "#003da6",
    buttonType: "lightbutton",
    picture: "/product2.webp",
    feature: false,
  },
  {
    title: "Find the best offers from our latest sales, all in one place.",
    titleColor: "#f4f6fa",
    buttonText: "Shop Now",
    buttonType: "lightbutton",
    bgColor: "#003da6",
    picture: "/product4.png",
    feature: false,
  },
  {
    title: "Save up to $200 on select smart TVs.",
    buttonText: "Shop Now",
    buttonType: "darkbutton",
    bgColor: "#f4f6fa",
    picture: "/product3.webp",
    feature: false,
  },
];

export default function FeatureCarousel(): ReactElement {
  return (
    <Swiper
      slidesPerView="auto"
      pagination={{ el: ".custom-featured-pagination", clickable: true }}
      modules={[Pagination]}
    >
      {FeaturedSlides.map((o) => {
        return (
          <SwiperSlide
            className="featuredslide"
            style={{ backgroundColor: o.bgColor }}
          >
            <div className="featuretext">
              {o.feature && <FeatureBanner fontsize="28px" />}
              <h3 style={{ color: o.titleColor }}>{o.title}</h3>
              {o.subtitle && (
                <h3 style={{ color: o.subtitleColor }}>{o.subtitle}</h3>
              )}
              <div className="featureimagemobile">
                <img src={o.picture} />
              </div>
              <button className={o.buttonType}>{o.buttonText}</button>
            </div>
            <div className="featureimage">
              <img src={o.picture} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
