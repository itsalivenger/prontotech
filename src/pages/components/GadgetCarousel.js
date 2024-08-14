import React, { useState } from "react";
import "../../assets/styles/gadgetCarousel.module.css";

export default function GadgetCarousel() {
  const [index, setIndex] = useState(0);

  const carousels = [
    "./images/popular_1.png",
    "./images/popular_2.png",
    "./images/popular_3.png"
  ];

  const onNext = () => {
    console.log(carousels.length);

    if (index < carousels.length - 1) {
      let i = index + 1;
      setIndex(i);
    } else {
      setIndex(0);
    }
  };

  const onPrev = () => {
    if (index > 0 && index < carousels.length) {
      let i = index - 1;
      setIndex(i);
    } else {
      setIndex(carousels.length - 1);
    }
  };

  return (
    <div className="carousel">
      {carousels.map((item, i) =>
        i === index ? (
          <div className="carousel-item" key={i}>
            <img src={item} alt={item} />
          </div>
        ) : null
      )}

      <a className="prev" onClick={onPrev}>
        Prev
      </a>
      <a className="next" onClick={onNext}>
        Next
      </a>
    </div>
  );
}