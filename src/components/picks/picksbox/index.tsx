import { ReactElement } from "react";

interface PicksBoxType {
  title: string;
  image: string;
}

export default function PicksBox({ title, image }: PicksBoxType): ReactElement {
  return (
    <div className="pickscont">
      <a>
        <img src={image} />
        <div className="pickstitle">{title}</div>
      </a>
    </div>
  );
}
