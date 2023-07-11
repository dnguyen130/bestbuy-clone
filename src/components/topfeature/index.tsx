import { ReactElement } from "react";
import Countdown from "react-countdown";

export default function TopFeature(): ReactElement {
  return (
    <div className="topcont">
      <figure>
        <img src="48hr.webp" alt="featureimage" />
      </figure>
      <div className="column">
        <caption>So many savings. Such little time.</caption>
        <h4>Sale ends in:</h4>
        <Countdown className="topcontcountdown" date={Date.now() + 100000000} />
        <button className="topcontbutton">Shop Now</button>
        <p>
          *Offers valid, unless otherwise noted, from July 11 to 12, 2023.
          Offers may begin before a sale duration and may continue or change
          after.
        </p>
      </div>
    </div>
  );
}
