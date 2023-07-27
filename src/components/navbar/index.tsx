import { ReactElement } from "react";
import { IoStorefront } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCart3, BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

import SearchLink from "./searchlink";
import { UseMyContext } from "../../../utils/provider";

interface PrimaryLinkType {
  title: string;
  icon: JSX.Element;
}

const SecondaryLinks: string[] = [
  "Order Status",
  "Blog",
  "Best Buy Business",
  "Français",
];

const PrimaryLinks: Record<string, PrimaryLinkType> = {
  stores: {
    title: "Stores",
    icon: <IoStorefront size="100%" />,
  },
  account: {
    title: "Account",
    icon: <CgProfile size="100%" />,
  },
  cart: {
    title: "Cart",
    icon: <BsCart3 size="100%" />,
  },
};

const SearchLinks: string[] = ["Shop", "Brands", "Deals", "Services"];

export default function Navbar(): ReactElement {
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const { activeDropdown, setActiveDropdown } = UseMyContext();

  useEffect(() => {
    if (searchQuery !== "" && searchFocus) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [searchQuery, searchFocus]);

  return (
    <header className="header">
      <div className="header-content">
        <ul>
          {SecondaryLinks.map((o: string) => {
            return <li key={o}>{o}</li>;
          })}
        </ul>
        <div className="header-mainrow">
          <a aria-label="Best Buy Clone" href="/" target="_self">
            <img
              className="desktop"
              src="bestbuy_logo.svg"
              width="82"
              height="48"
            />
            <img
              className="mobile"
              src="bestbuy_logo.svg"
              width="55"
              height="32"
            />
          </a>
          <div className="searchbox long">
            <input
              placeholder="Search Best Buy"
              type="text"
              className="searchbar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <motion.div
              className="searchclose"
              style={{ pointerEvents: !searchQuery ? "none" : "auto" }}
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: isTyping ? 1 : 0,
                x: isTyping ? 0 : 10,
                cursor: isTyping ? "pointer" : "auto",
              }}
              exit={{
                x: 10,
                opacity: 0,
              }}
              transition={{ ease: "linear", duration: 0.2 }}
            >
              <AiFillCloseCircle
                size="40%"
                onClick={() => setSearchQuery("")}
              />
              <div className="searchline" />
            </motion.div>
            <div className="searchbutton">
              <BsSearch size="40%" />
            </div>
          </div>
          <div className="primarylink-container">
            {Object.values(PrimaryLinks).map((o) => {
              return (
                <div key={o.title} className="primarylink desktop">
                  <div className="primarylink-icon">{o.icon}</div>
                  <div className="primarylink-title">{o.title}</div>
                </div>
              );
            })}
            {Object.values(PrimaryLinks).map((o) => {
              return (
                <div key={o.title} className="primarylink mobile">
                  <div className="primarylink-icon">{o.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bottombarwrapper">
        <div className="bottombar">
          <div className="searchgroup">
            {SearchLinks.map((o) => {
              return (
                <div key={o}>
                  <SearchLink
                    title={o}
                    active={activeDropdown === o}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === o ? "" : o)
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="mobilesearchgroup">
            <div
              className="searchmenu"
              style={{
                opacity: searchFocus ? 0 : 1,
                width: searchFocus ? 0 : 40,
              }}
              onClick={() =>
                setActiveDropdown(activeDropdown === "burger" ? "" : "burger")
              }
            >
              <div className="searchburger">
                {activeDropdown !== "burger" ? (
                  <RxHamburgerMenu size="100%" />
                ) : (
                  <MdOutlineClose size="100%" />
                )}
                <h3 className="searchtitle">Menu</h3>
              </div>
            </div>
            <div className="searchbox short">
              <input
                placeholder="Search Best Buy"
                type="text"
                className="searchbar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              <motion.div
                className="searchclose"
                style={{ pointerEvents: !searchQuery ? "none" : "auto" }}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: isTyping ? 1 : 0,
                  x: isTyping ? 0 : 10,
                  cursor: isTyping ? "pointer" : "auto",
                }}
                exit={{
                  x: 10,
                  opacity: 0,
                }}
                transition={{ ease: "linear", duration: 0.2 }}
              >
                <AiFillCloseCircle
                  size="40%"
                  onClick={() => setSearchQuery("")}
                />
                <div className="searchline" />
              </motion.div>
              <div className="searchbutton">
                <BsSearch size="40%" />
              </div>
            </div>
            <div
              className="searchcancel"
              style={{
                width: searchFocus ? 60 : 0,
                opacity: searchFocus ? 1 : 0,
              }}
            >
              Cancel
            </div>
          </div>
          <div className="desktopsearchgroup">
            <div
              className="searchmenu"
              onClick={() =>
                setActiveDropdown(activeDropdown === "burger" ? "" : "burger")
              }
            >
              <div className="searchburger">
                {activeDropdown !== "burger" ? (
                  <RxHamburgerMenu size="100%" />
                ) : (
                  <MdOutlineClose size="100%" />
                )}
                <h3 className="searchtitle">Menu</h3>
              </div>
            </div>
            <div className="searchbox short">
              <input
                placeholder="Search Best Buy"
                type="text"
                className="searchbar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              <motion.div
                className="searchclose"
                style={{ pointerEvents: !searchQuery ? "none" : "auto" }}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: isTyping ? 1 : 0,
                  x: isTyping ? 0 : 10,
                  cursor: isTyping ? "pointer" : "auto",
                }}
                exit={{
                  x: 10,
                  opacity: 0,
                }}
                transition={{ ease: "linear", duration: 0.2 }}
              >
                <AiFillCloseCircle
                  size="40%"
                  onClick={() => setSearchQuery("")}
                />
                <div className="searchline" />
              </motion.div>
              <div className="searchbutton">
                <BsSearch size="40%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
