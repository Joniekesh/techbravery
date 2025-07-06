import { useState } from "react";
import PackageItem from "../packageItem/PackageItem";
import "./packages.scss";
const Packages = () => {
  const [selected, setSelected] = useState("Basic");
  return (
    <div className="packages">
      <h1>Our Packages</h1>
      <div className="package-list">
        {["Basic", "Premium", "Enterprise"].map((item) => (
          <PackageItem
            key={item}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;
