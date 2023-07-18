import Navbar from "./components/navbar";
import FeatureGrid from "./components/featuregrid";
import HottestOffers from "./components/hottestoffers";

import { TbClockBolt } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import PicksGrid from "./components/picks";

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
        </div>
      </main>
    </div>
  );
}

export default App;
