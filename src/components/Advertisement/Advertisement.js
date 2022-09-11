import React from "react";
import { v4 } from "uuid";

//Components
import ButtonCustom from "../sub-components/Button/ButtonCustom";

//Css
import "./Advertisement.css";

///Img
import mainImg from "../../assets/body/advertisement/video.png";

const listSubImg = [];

for (let i = 1; i <= 9; i+=1) {
    listSubImg.push({
        id: v4(),
        imgTrackNumber: i,
        img: require(`../../assets/body/advertisement/video-object-0${i}.png`),
    });
}

const renderListSubImg = listSubImg.map((img) => {
    return (
        <img
            key={img.id}
            src={img.img}
            alt="advertisement-sub-img"
            className={`advertisement__content-sub-img--cf-position advertisement__sub-img-${img.imgTrackNumber} img-fluid`}
        />
    );
});

export default function Advertisement() {
  return (
    <div className="advertisement">
      <div className="advertisement__title">
        <h2> WHAT HAPPENED </h2>
        <p className="advertisement__title-content">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <ButtonCustom> SEE MORE </ButtonCustom>
      </div>
      <div className="advertisement__content">
        <img
            src={mainImg}
            alt="advertisement-main-img"
            className="img-fluid advertisement__content-main-img"
        />
      </div>

      { renderListSubImg }
    </div>
  );
}
