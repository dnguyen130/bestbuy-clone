import { ReactElement, useState } from "react";
import { motion } from "framer-motion";

interface SubLinkType {
  header?: string;
  title?: string;
  link?: string;
}

interface SubLinkArray {
  title: string;
  array: string[];
}

export default function SubLink(): ReactElement {
  return (
    <motion.div
      initial={{ height: 200, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{ height: 200, opacity: 0 }}
      className="submenu"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        className="menulinks"
        initial={{ opacity: 0, overflow: "hidden" }}
        animate={{
          opacity: 1,
          transitionEnd: { overflow: "auto" },
        }}
        exit={{ opacity: 0, overflow: "hidden" }}
      >
        {/* {Object.values(sublinks).map((o) => {
          if (o.header) {
            return <h4>{o.header}</h4>;
          } else if (o.link) {
            return (
              <div>
                <button>{o.title}</button>
                <div className="subarrow"></div>
              </div>
            );
          } else {
            return <button>{o.title}</button>;
          }
        })} */}
      </motion.div>
    </motion.div>
  );
}
