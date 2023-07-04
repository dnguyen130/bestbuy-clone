import { ReactElement } from "react";

const SecondaryLinks: string[] = [
  "Order Status",
  "Blog",
  "Best Buy Business",
  "Français",
];

export default function Navbar(): ReactElement {
  return (
    <header className="header">
      <div className="header-content">
        <ul>
          {SecondaryLinks.map((o: string) => {
            return <li>{o}</li>;
          })}
        </ul>
        <a aria-label="Best Buy Clone" href="/" target="_self">
          <img src="bestbuy_logo.svg" width="82" height="48" />
        </a>
      </div>
    </header>
  );
}
