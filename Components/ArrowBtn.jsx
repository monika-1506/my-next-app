import React, { useState } from "react";
import styles from "../styles/arrowBtn.module.scss";
import { Link } from "next/link";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { IoMdArrowForward } from "react-icons/io";

IoMdArrowForward

BiArrowBack

const ArrowBtn = () => {
  const [activeArrow, setActiveArrow] = useState("left");

  const handleArrowClick = (arrow) => {
    setActiveArrow(arrow);
  };

  return (
    <>
      <div className={styles.home4} id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div className={activeArrow === "left" ? styles.active : ""}>
              <BiArrowBack
                onClick={() => handleArrowClick("left")}
                className={styles.arrowButton}
              />
              <p>Left Arrow</p>
            </div>
            <div className={activeArrow === "right" ? styles.active : ""}>
              <IoMdArrowForward
                onClick={() => handleArrowClick("right")}
                className={styles.arrowButton}
              />
              <p>Right Arrow</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ArrowBtn;
