import React, { useState } from "react";
import styles from "../styles/arrows.module.scss";
import { useMediaQuery } from "@mui/material";
const Arrows = () => {
  const mx600 = useMediaQuery("( max-width:600px )");

  const [activeArrow, setActiveArrow] = useState("left");

  const handleArrowClick = (arrow) => {
    setActiveArrow(arrow);
  };

  return (
    <>
      
      <div className={styles.container}>
        <div>
            {mx600 && (
        <h6
          style={{
            textAlign: "center",
            color: "Black",
            font: 'italic 600 24px "Arial", sans-serif',
          }}
        >
          {" "}
          This is Given Task{" "}
        </h6>
      )}
        </div>
        <div>Slider</div>
        <div className={styles.btns}>
        <button
          onClick={() => handleArrowClick("left")}
          style={{ color: activeArrow === "left" ? "black" : "grey" }}
          className={styles.left}
        >
          Left Arrow
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          style={{ color: activeArrow === "right" ? "black" : "grey" }}
          className={styles.left}
        >
          Right Arrow
        </button>
        </div>
      </div>
    </>
  );
};

export default Arrows;
