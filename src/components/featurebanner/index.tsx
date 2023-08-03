import { ReactElement } from "react";

interface FeatureBannerType {
  fontsize: string;
}

export default function FeatureBanner({
  fontsize = "28px",
}: FeatureBannerType): ReactElement {
  return (
    <div className="featurebanner">
      <h3 style={{ fontSize: fontsize }}>
        Best Buy <strong>Outlet</strong>
      </h3>
      <h4>SALE ON NOW</h4>
    </div>
  );
}
