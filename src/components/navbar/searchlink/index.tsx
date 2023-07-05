import { ReactElement } from "react";
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
  return (
    <div className="searchlink" onClick={onClick}>
      <div className="searchtitle">{title}</div>
      <div className="searcharrow">
        {active ? <BsChevronUp size="100%" /> : <BsChevronDown size="100%" />}
      </div>
    </div>
  );
}
