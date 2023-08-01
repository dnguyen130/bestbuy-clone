import { ReactElement } from "react";
import Slider from "react-slick";
import CarouselItem from "../carouselitem";
import { CarouselItemType } from "../carouselitem";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 3,
  variableWidth: true,
};

interface CarouselComponentType {
  CarouselArray: CarouselItemType[];
}

export default function CarouselComponent({
  CarouselArray,
}: CarouselComponentType): ReactElement {
  return (
    <Slider {...settings}>
      {Object.values(CarouselArray).map((o) => {
        return (
          <CarouselItem
            image={o.image}
            rating={o.rating}
            name={o.name}
            reviews={o.reviews}
            saveAmount={o.saveAmount}
            price={o.price}
            isMarketplace={o.isMarketplace}
            ehf={o.ehf}
          />
        );
      })}
    </Slider>
  );
}
