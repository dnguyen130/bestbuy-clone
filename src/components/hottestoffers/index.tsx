import { ReactElement } from "react";
import ProductBox from "./productbox";

const Products = [
  {
    image: "hottestoffers/laptop.webp",
    description:
      "Save on select laptops, PCs, tablets, and computer accessories for your workspace upgrades.",
    link: "Shop Now",
  },
  {
    image: "hottestoffers/aircon.webp",
    description: "Save up to $200 on select air conditioners.",
    link: "Shop Now",
  },
  {
    image: "hottestoffers/giftcard.webp",
    description:
      "Get up to a $200 bonus gift card on select cell phones with plans.*",
    sub: "Plus get more exclusive deals in-store.",
    link: "Explore the deals",
  },
  {
    image: "hottestoffers/appliance.webp",
    description:
      "Take up to $1,000 off when you buy 2 or more eligible major kitchen appliances of the same brand.*",
    sub: "Plus get free local delivery and haul away.",
    link: "Shop now",
  },
];

export default function HottestOffers(): ReactElement {
  return (
    <div className="hocont">
      <h1 className="hotitle">Our hottest offers</h1>
      <div className="productboxgrid">
        {Products.map((o) => {
          return (
            <div key={o.description}>
              <ProductBox
                image={o.image}
                description={o.description}
                sub={o.sub ? o.sub : ""}
                link={o.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
