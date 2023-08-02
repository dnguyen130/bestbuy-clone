import Navbar from "./components/navbar";
import FeatureGrid from "./components/featuregrid";
import FeatureCarousel from "./components/featurecarousel";
import HottestOffers from "./components/hottestoffers";
import PicksGrid from "./components/picks";
import CategoriesGrid from "./components/categories";
import CarouselCard from "./components/carouselcard";
import QuickLink from "./components/quicklink/index.tsx";
import Footer from "./components/footer/index.tsx";

import { Carousel_1 } from "../utils/data.ts";
import { TbClockBolt } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { UseMyContext } from "../utils/provider.tsx";

export const IconLinkList = [
  {
    description: "Quick and Easy Store Pickup",
    icon: <TbClockBolt size="100%" />,
  },
  {
    description: "Free shipping over $35",
    icon: <FaTruckFast size="100%" />,
  },
  {
    description: "Low Price Guarantee",
    icon: <AiOutlineDollar size="100%" />,
  },
  {
    description: "Latest and Greatest Tech",
    icon: <BsStars size="100%" />,
  },
];

function App() {
  const { activeDropdown, setActiveDropdown } = UseMyContext();

  useEffect(() => {
    if (activeDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [activeDropdown]);

  return (
    <div
      className="appcontainer"
      onClick={() => (activeDropdown !== "" ? setActiveDropdown("") : null)}
    >
      <Navbar />
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay"
          />
        )}
      </AnimatePresence>
      <main>
        <div className="margin">
          <div className="showgrid">
            <FeatureGrid />
          </div>
          <div className="showcarousel">
            <FeatureCarousel />
            <div className="custom-featured-pagination" />
          </div>
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
      <footer>
        <div className="linkcont">
          {IconLinkList.map((o) => {
            return (
              <div className="quicklinkcont" key={o.description}>
                <QuickLink icon={o.icon} description={o.description} />
              </div>
            );
          })}
        </div>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
