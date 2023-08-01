import { ReactElement } from "react";

interface TabletDropdownItemType {
  title: string;
}

export default function TabletDropdownItem({
  title,
}: TabletDropdownItemType): ReactElement {
  return <div className="tabletdropdownitemcont">{title}</div>;
}
