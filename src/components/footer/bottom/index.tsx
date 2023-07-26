import { ReactElement } from "react";

const BottomLinks = [
  {
    title: "Term & Conditions",
    link: "#",
  },
  {
    title: "Conditions of Use",
    link: "#",
  },
  {
    title: "Online Policies",
    link: "#",
  },
  {
    title: "Internet-Based Ads",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Accessibility Policy",
    link: "#",
  },
  {
    title: "Geek Squad Terms & Conditions",
    link: "#",
  },
  {
    title: "Product Recalls",
    link: "#",
  },
  {
    title: "Credits",
    link: "#",
  },
];

export default function BottomBar(): ReactElement {
  return (
    <div className="bottomcont">
      <p>
        © Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC
        V5Y 1L3
      </p>
      <ul>
        {BottomLinks.map((o) => {
          return <li>{o.title}</li>;
        })}
      </ul>
    </div>
  );
}
