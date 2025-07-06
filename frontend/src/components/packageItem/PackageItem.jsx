import { useEffect, useRef } from "react";
import "./packageItem.scss";
const PackageItem = ({ item, selected, setSelected }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) return;

    const updateAnimation = () => {
      const currentAngle = parseFloat(
        boxElement.style.getPropertyValue("--angle") || "0"
      );

      const newAngle = (currentAngle + 0.5) % 360;

      boxElement.style.setProperty("--angle", `${newAngle}deg`);
      requestAnimationFrame(updateAnimation);
    };
    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <>
      {item === selected ? (
        <div
          style={{
            "--angle": "0deg",
            "--border-color":
              "linear-gradient(var(--angle),#4169e1,#e6a960,#5f9261,orangered,#ffe86e,#9747ff,teal,orange,#4b0082)",
          }}
          onClick={() => setSelected(item)}
          ref={boxRef}
          className={
            item === selected ? "package-item selected" : "package-item"
          }
        >
          {item}
        </div>
      ) : (
        <div
          onClick={() => setSelected(item)}
          className={
            item === selected ? "package-item selected" : "package-item"
          }
        >
          {item}
        </div>
      )}
    </>
  );
};

export default PackageItem;
