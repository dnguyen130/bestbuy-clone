import { ReactElement } from "react";

interface LinksType {
  title: string;
  link: string;
}

interface FooterLinksType {
  title: string;
  links: LinksType[];
}

export default function FooterLinks({
  title,
  links,
}: FooterLinksType): ReactElement {
  return (
    <div className="footerlinkcont">
      <h3>{title}</h3>
      <ul>
        {Object.values(links).map((o) => {
          return <li>{o.title}</li>;
        })}
        {/* <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li>
        <li>Contact Us</li> */}
      </ul>
    </div>
  );
}
