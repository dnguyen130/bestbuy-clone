import { ReactElement } from "react";
import Slider from "react-slick";
import CarouselItem from "../carouselitem";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2.3,
  slidesToScroll: 1,
};

export default function CarouselComponent(): ReactElement {
  return (
    <Slider {...settings}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Slider>
  );
}
