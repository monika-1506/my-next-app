import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/slideComp.module.scss";


const SliderComponent = () => {
  const [activeArrow, setActiveArrow] = useState("left");
  const sliderRef = useRef(null);

  const data = [
    { id: 1, image: "/assets/img4.jpg" },
    { id: 2, image: "/assets/img1.jpg" },
    { id: 3, image: "/assets/img6.jpg" },
    { id: 4, image: "/assets/img5.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleArrowClick = (arrow) => {
    setActiveArrow(arrow);
    if (sliderRef.current) {
      if (arrow === "left") {
        sliderRef.current.slickPrev();
      } else if (arrow === "right") {
        sliderRef.current.slickNext();
      }
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div key={item.id} className={styles.slide}>
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
        ))}
      </Slider>
      <div className={styles.navigation}>
        <button
          className={`${styles.arrowButton} ${
            activeArrow === "left" ? styles.active : ""
          }`}
          onClick={() => handleArrowClick("left")}
        >
          Left
        </button>
        <button
          className={`${styles.arrowButton} ${
            activeArrow === "right" ? styles.active : ""
          }`}
          onClick={() => handleArrowClick("right")}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
