import { ReactElement } from "react";

interface QuickLinkType {
  icon: JSX.Element;
  description1: string;
  description2: string;
}

export default function QuickLink({
  icon,
  description1,
  description2,
}: QuickLinkType): ReactElement {
  return (
    <div className="quicklink">
      <div className="icon">{icon}</div>
      <div className="description">
        <h2>{description1}</h2>
        <h2>{description2}</h2>
      </div>
    </div>
  );
}
