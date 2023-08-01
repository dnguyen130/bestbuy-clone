import { ReactElement, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { motion } from "framer-motion";

export interface LinkType {
  key: string;
  title: string;
  link: string;
  icon?: string;
}
interface AccordionPieceType {
  key: string;
  title: string;
  subarray: LinkType[];
}

export default function AccordionPiece({
  title,
  subarray,
}: AccordionPieceType): ReactElement {
  const [active, setActive] = useState(false);

  return (
    <button className="accordionpiece">
      <div className="accordionheader" onClick={() => setActive(!active)}>
        <p>{title}</p>
        <div className="accordionarrow">
          {active ? <BsChevronUp size="100%" /> : <BsChevronDown size="100%" />}
        </div>
      </div>
      <motion.div
        className="subarraycont"
        initial={{
          height: 0,
        }}
        animate={{
          height: active ? "auto" : 0,
          padding: active ? "0 0 16px 0" : 0,
        }}
        exit={{
          height: 0,
        }}
      >
        {subarray.map((o) => {
          if (o.icon) {
            return (
              <motion.div className="subarray" key={o.key}>
                <a>
                  <div className="arrayicon">
                    {o.icon === "android" && <AiFillAndroid size="100%" />}
                    {o.icon === "ios" && <AiFillApple size="100%" />}
                  </div>
                  {o.title}
                </a>
              </motion.div>
            );
          } else {
            return (
              <motion.div className="subarray" key={o.key}>
                <a>{o.title}</a>
              </motion.div>
            );
          }
        })}
      </motion.div>
    </button>
  );
}
