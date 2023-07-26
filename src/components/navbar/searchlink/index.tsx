import { ReactElement, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

interface SearchLinkType {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function SearchLink({
  title,
  active,
  onClick,
}: SearchLinkType): ReactElement {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div
      className="dropdowncont"
      onClick={() => {
        setMenuActive(!menuActive);
      }}
    >
      <div className="searchlink" onClick={onClick}>
        <div className="searchtitle">{title}</div>
        <div className="searcharrow">
          {active ? <BsChevronUp size="100%" /> : <BsChevronDown size="100%" />}
        </div>
      </div>
      <div className={menuActive ? "dropdownmenuactive" : "dropdownmenu"}></div>
    </div>
  );
}
