import { ReactElement, useState } from "react";
import AccordionPiece from "./accordionpiece";

import { FooterLinks } from "../../../../utils/data";

import { LinkType } from "./accordionpiece";

export default function FooterAccordion(): ReactElement {
  const CalcSubMenu = (key: string): LinkType[] => {
    for (let i = 0; i < FooterLinks.length; i++) {
      if (key === FooterLinks[i].key) {
        return FooterLinks[i].links;
      }
    }
    return [];
  };

  return (
    <div className="footeraccordion">
      {FooterLinks.map((o) => {
        return (
          <AccordionPiece
            title={o.title}
            key={o.key}
            subarray={CalcSubMenu(o.key)}
          />
        );
      })}
    </div>
  );
}