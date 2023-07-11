import { ReactElement } from "react";

interface IconLinkType {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export default function IconLink({
  icon,
  title,
  subtitle,
}: IconLinkType): ReactElement {
  return (
    <div className="iconlinkcont">
      <div className="icon">{icon}</div>
      <div className="column">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
