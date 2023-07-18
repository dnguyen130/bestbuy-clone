import { ReactElement } from "react";

interface ProductBoxType {
  image: string;
  description: string;
  sub: string;
  link: string;
}

export default function ProductBox({
  image,
  description,
  sub,
  link,
}: ProductBoxType): ReactElement {
  return (
    <div className="productcont">
      <a>
        <img src={image} />
        <p className="boxdesc">{description}</p>
        <p className="boxsub">{sub}</p>
        <div className="link">{link}</div>
      </a>
    </div>
  );
}
