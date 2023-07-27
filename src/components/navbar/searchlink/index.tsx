import { ReactElement, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";

interface SearchLinkType {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function SearchLink({
  title,
  active,
  onClick,
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 300, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="dropdownmenu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menuarrow" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
