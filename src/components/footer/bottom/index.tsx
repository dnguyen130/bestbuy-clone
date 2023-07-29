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
        This is a website created strictly for practicing web development. I do
        not own any assets used on this website. All Rights Reserved by © Best
        Buy Canada Ltd. Email any questions and concerns at
        dannytnguyen.dev@gmail.com
      </p>
      <ul>
        {BottomLinks.map((o) => {
          return <li>{o.title}</li>;
        })}
      </ul>
    </div>
  );
}
