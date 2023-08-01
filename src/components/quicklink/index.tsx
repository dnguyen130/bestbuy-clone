import { ReactElement } from "react";

interface QuickLinkType {
  icon: JSX.Element;
  description: string;
}

export default function QuickLink({
  icon,
  description,
}: QuickLinkType): ReactElement {
  return (
    <div className="quicklink">
      <div className="icon">{icon}</div>
      <div className="description">
        <h2>{description}</h2>
      </div>
    </div>
  );
}
