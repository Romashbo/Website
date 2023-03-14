import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setCurrentBmw } from "../../Redux/card/popupReducer";
import Popup from "../Popup/Popup";
import "./infoPopup.css";
import "../Popup/Popup.css";

export const InfoPopup = ({ bmw, active, setActive }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBmw(bmw));
  };
  if (!bmw) return null;
  return (
    <div>
      <button onClick={handleClick} className="info">
        info
      </button>
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
    </div>
  );
};
export default InfoPopup;
