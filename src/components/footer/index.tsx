import { ReactElement } from "react";

import FooterLinks from "./footerlink";
import Socials from "./socials";

import {
  CustomerSupport,
  Account,
  Services,
  Aboutus,
  Internationalsites,
  Mobileapps,
} from "../../../utils/data";
import BottomBar from "./bottom";

export default function Footer(): ReactElement {
  return (
    <div className="footerwrapper">
      <div className="footercont">
        <div className="linkswrapper">
          <FooterLinks
            title={CustomerSupport.title}
            links={CustomerSupport.links}
          />
          <FooterLinks title={Account.title} links={Account.links} />

          <FooterLinks title={Services.title} links={Services.links} />

          <FooterLinks title={Aboutus.title} links={Aboutus.links} />
          <FooterLinks
            title={Internationalsites.title}
            links={Internationalsites.links}
          />
          <FooterLinks title={Mobileapps.title} links={Mobileapps.links} />
        </div>
        <Socials />
      </div>
      <BottomBar />
    </div>
  );
}
