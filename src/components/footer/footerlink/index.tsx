import { ReactElement } from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

interface LinksType {
  title: string;
  link: string;
  icon?: string;
}

interface FooterLinksType {
  title: string;
  links: LinksType[];
}

export default function FooterLinks({
  title,
  links,
}: FooterLinksType): ReactElement {
  if (links[0].icon) {
    return (
      <div className="footerlinkcont">
        <h3>{title}</h3>
        <ul>
          {Object.values(links).map((o) => {
            return (
              <div className="row" key={o.title}>
                <div className="icon">
                  {o.icon === "android" && <AiFillAndroid />}
                  {o.icon === "ios" && <AiFillApple />}
                </div>
                <li>{o.title}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="footerlinkcont">
        <h3>{title}</h3>
        <ul>
          {Object.values(links).map((o) => {
            return <li key={o.title}>{o.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
