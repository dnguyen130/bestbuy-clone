import Navbar from "./components/navbar";
import FeatureGrid from "./components/featuregrid";
import HottestOffers from "./components/hottestoffers";

import { TbClockBolt } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import PicksGrid from "./components/picks";
import CategoriesGrid from "./components/categories";
import CarouselCard from "./components/carouselcard";

import { Carousel_1 } from "../utils/data.ts";

const IconLinkList = [
  {
    title: "Quick and Easy Store Pickup",
    subtitle: "Get your order in as a little as 1 hour.",
    icon: <TbClockBolt size="100%" />,
  },
  {
    title: "Low Price Guarantee",
    subtitle: "We won't be beat on price.",
    icon: <AiOutlineDollar size="100%" />,
  },
  {
    title: "Fast, free shipping",
    subtitle: "On orders over $35*.",
    icon: <FaTruckFast size="100%" />,
  },
  {
    title: "Knowledgeable Advice",
    subtitle: "Answers to your tech questions.",
    icon: <BsPersonCircle size="100%" />,
  },
];

function App() {
  return (
    <div className="AppContainer">
      <Navbar />
      <main>
        <div className="margin">
          <FeatureGrid />
          <HottestOffers />
          <PicksGrid />
          <CategoriesGrid />
          <CarouselCard
            banner="banner/outlet.png"
            CarouselArray={Carousel_1}
            dark={false}
            header="Save big on outlet tech."
            subheader="Experience outstanding deals on refurbished and open box products."
            buttontext="Shop Deals"
          />
          <CarouselCard
            banner="banner/marketplace.png"
            CarouselArray={Carousel_1}
            dark
            header="Save big on outlet tech."
            subheader="Experience outstanding deals on refurbished and open box products."
            buttontext="Shop Deals"
          />
          <CarouselCard
            banner="banner/star.png"
            dark={false}
            CarouselArray={Carousel_1}
            header="Latest and Greatest Tech."
            subheader="Check out the latest product launches and get inspired by the tech of tomorrow."
            buttontext="Explore Latest and Greatest Tech"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
