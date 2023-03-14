import React from "react";

import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBmw } from "../../Redux/card/popupReducer";

import "../Popup/Popup.css";
import ShopItem from "../ShopItem";

const Popup = ({ active, setActive }) => {
  const bmw = useSelector((state) => state.popup.currentBmw);

  if (!bmw) return null;

  return (
    <div
      className={active ? "popup active" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <video className="popup__video" src="">
          car Video
        </video>
        <div className="aboute__car">
          <h3 className="aboute__car__title">{bmw.title}</h3>
          <p className="aboute__car__content">ddd</p>
        </div>
        <GrClose className="popup__close" onClick={() => setActive(false)} />
      </div>
    </div>
  );
};

export default Popup;
