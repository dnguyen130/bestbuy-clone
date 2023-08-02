import { ReactElement } from "react";

import { BsChevronRight } from "react-icons/bs";

interface TabletDropdownItemType {
  icon: ReactElement;
  title: string;
}

export default function TabletDropdownItem({
  icon,
  title,
}: TabletDropdownItemType): ReactElement {
  return (
    <div className="dropdownitemcont">
      <div className="dropdownleft">
        <div className="dropdownicon">{icon}</div>
        <p className="dropdowntitle">{title}</p>
      </div>
      <div className="dropdownicon">
        <BsChevronRight size="60%" />
      </div>
    </div>
  );
}
