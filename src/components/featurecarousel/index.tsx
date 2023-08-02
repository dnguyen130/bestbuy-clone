import { ReactElement } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
  slidesToScroll: 1,
};

const FeaturedSlides = {
  title: "Save on more tech you'll love",
  buttonText: "Shop outlet deals",
  bgColor: "#f4f6fa",
  buttoncolor: "#003da6",
  picture: "/product1.webp",
};

export default function FeatureCarousel(): ReactElement {
  return (
    <Slider {...settings}>
      <div className="featuredslide"></div>
      <div className="featuredslide"></div>
      <div className="featuredslide"></div>
    </Slider>
  );
}
