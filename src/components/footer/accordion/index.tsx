import { ReactElement } from "react";
import AccordionPiece from "./accordionpiece";

import {
  CustomerSupport,
  Account,
  Services,
  Aboutus,
  Internationalsites,
  Mobileapps,
  FooterLinks,
} from "../../../../utils/data";

export default function FooterAccordion(): ReactElement {
  return (
    <div className="footeraccordion">
      {FooterLinks.map((o) => {
        return <AccordionPiece title={o.title} key={o.key} />;
      })}
    </div>
  );
}
