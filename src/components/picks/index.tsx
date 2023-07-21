import { ReactElement } from "react";
import PicksBox from "./picksbox";

const Picks = [
  {
    image: "picks/1.webp",
    title: "Outdoor Living",
  },
  {
    image: "picks/2.jpg",
    title: "Electric Transportation",
  },
  {
    image: "picks/3.webp",
    title: "Air Conditioners",
  },
  {
    image: "picks/4.webp",
    title: "Travel and Luggage",
  },
  {
    image: "picks/5.webp",
    title: "Cameras, Camcorders and Drones",
  },
  {
    image: "picks/6.jpg",
    title: "Car Tech",
  },
];

export default function PicksGrid(): ReactElement {
  return (
    <div className="hocont">
      <h1 className="hotitle">Popular picks for summer</h1>
      <div className="picksgrid">
        {Picks.map((o) => {
          return (
            <div key={o.title}>
              <PicksBox title={o.title} image={o.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
