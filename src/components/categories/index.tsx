import { ReactElement } from "react";
import PicksBox from "../picks/picksbox";

const Categories1 = [
  {
    image: "categories/1.webp",
    title: "TVs, Home Theatre, and Accessories",
  },
  {
    image: "categories/2.webp",
    title: "Computers and Tablets",
  },
  {
    image: "categories/3.webp",
    title: "Computer Accessories",
  },
  {
    image: "categories/4.webp",
    title: "Smart Home",
  },
  {
    image: "categories/5.webp",
    title: "Cell Phones and Plans",
  },
  {
    image: "categories/6.webp",
    title: "Headphones and Portable Speakers",
  },
];

const Categories2 = [
  {
    image: "categories/7.webp",
    title: "Major Appliances",
  },
  {
    image: "categories/8.webp",
    title: "Small Kitchen Appliances",
  },
  {
    image: "categories/9.jpg",
    title: "Video Games, Consoles, and Accessories",
  },
  {
    image: "categories/10.webp",
    title: "PC Gaming",
  },
  {
    image: "categories/11.webp",
    title: "Wearable Technology",
  },
  {
    image: "categories/12.webp",
    title: "Vacuums",
  },
];

export default function CategoriesGrid(): ReactElement {
  return (
    <div className="hocont">
      <h1 className="hotitle">Shop by category</h1>
      <div className="picksgrid spacedrow">
        {Categories1.map((o) => {
          return (
            <div key={o.title}>
              <PicksBox title={o.title} image={o.image} />
            </div>
          );
        })}
      </div>
      <div className="picksgrid">
        {Categories2.map((o) => {
          return (
            <div key={o.title}>
              <PicksBox title={o.title} image={o.image} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
