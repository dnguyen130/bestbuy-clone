import { ReactElement, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface AccordionPieceType {
  key: string;
  title: string;
}

export default function AccordionPiece({
  key,
  title,
}: AccordionPieceType): ReactElement {
  const [activeSubMenu, setActiveSubMenu] = useState("");

  return (
    <button className="accordionpiece" onClick={() => setActiveSubMenu(key)}>
      <p>{title}</p>
      <div className="accordionarrow">
        <BsChevronDown size="100%" />
      </div>
    </button>
  );
}
