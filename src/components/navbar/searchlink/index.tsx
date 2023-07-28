import { ReactElement, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";

interface LinksType {
  title?: string;
  header?: string;
  link?: string;
  last?: boolean;
}

interface SearchLinkType {
  title: string;
  active: boolean;
  onClick: () => void;
  links: LinksType[];
}

export default function SearchLink({
  title,
  active,
  onClick,
  links,
}: SearchLinkType): ReactElement {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div
      className="dropdowncont"
      onClick={(e) => {
        e.stopPropagation();
        setMenuActive(!menuActive);
      }}
    >
      <div className="searchlink" onClick={onClick}>
        <div className="searchtitle">{title}</div>
        <div className="searcharrow">
          {active ? <BsChevronUp size="100%" /> : <BsChevronDown size="100%" />}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 200, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{ height: 200, opacity: 0 }}
            className="dropdownmenu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menuarrow" />
            <motion.div
              className="menulinks"
              initial={{ opacity: 0, overflow: "hidden" }}
              animate={{
                opacity: 1,
                transitionEnd: { overflow: "auto" },
              }}
              exit={{ opacity: 0, overflow: "hidden" }}
            >
              {Object.values(links).map((o) => {
                if (o.header) {
                  return <h4>{o.header}</h4>;
                } else if (o.last) {
                  return (
                    <div>
                      <p>{o.title}</p>
                      <div className="divider" />
                    </div>
                  );
                } else {
                  return <p>{o.title}</p>;
                }
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
