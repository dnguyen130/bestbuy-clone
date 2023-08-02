import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedSlides = [
  {
    title: "Save on more tech you'll love",
    buttonText: "Shop outlet deals",
    bgColor: "#f4f6fa",
    buttoncolor: "#003da6",
    picture: "/product1.webp",
  },
  {
    title: "Save on more tech you'll love",
    buttonText: "Shop outlet deals",
    bgColor: "#f4f6fa",
    buttoncolor: "#003da6",
    picture: "/product1.webp",
  },
  {
    title: "Save on more tech you'll love",
    buttonText: "Shop outlet deals",
    bgColor: "#f4f6fa",
    buttoncolor: "#003da6",
    picture: "/product1.webp",
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
          ></SwiperSlide>
        );
      })}
    </Swiper>
  );
}
