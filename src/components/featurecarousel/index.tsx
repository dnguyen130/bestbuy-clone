import { ReactElement } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
  slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       slidesToShow: 1.2,
  //     },
  //   },
  //   // {
  //   //   breakpoint: 910,
  //   //   settings: {
  //   //     slidesToShow: 1.1,
  //   //   },
  //   // },
  //   // {
  //   //   breakpoint: 800,
  //   //   settings: {
  //   //     slidesToShow: 1.05,
  //   //   },
  //   // },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2.5,
  //     },
  //   },
  // ],
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
