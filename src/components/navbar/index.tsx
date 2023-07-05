import { ReactElement } from "react";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

interface PrimaryLinkType {
  title: string;
  icon: JSX.Element;
}

const SecondaryLinks: string[] = [
  "Order Status",
  "Blog",
  "Best Buy Business",
  "Français",
];

const PrimaryLinks: Record<string, PrimaryLinkType> = {
  stores: {
    title: "Stores",
    icon: <IoStorefront size="100%" />,
  },
  account: {
    title: "Account",
    icon: <CgProfile size="100%" />,
  },
  cart: {
    title: "Cart",
    icon: <BsCart3 size="100%" />,
  },
};

export default function Navbar(): ReactElement {
  return (
    <header className="header">
      <div className="header-content">
        <ul>
          {SecondaryLinks.map((o: string) => {
            return <li>{o}</li>;
          })}
        </ul>
        <div className="header-mainrow">
          <a aria-label="Best Buy Clone" href="/" target="_self">
            <img src="bestbuy_logo.svg" width="82" height="48" />
          </a>
          <div className="searchbar"></div>
          <div className="primarylink-container">
            {Object.values(PrimaryLinks).map((o) => {
              return (
                <div className="primarylink">
                  <div className="primarylink-icon">{o.icon}</div>
                  <div className="primarylink-title">{o.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
