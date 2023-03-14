import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromPopup,
  setItemInPopup,
} from "/Users/romanbocarov/my-app/src/Redux/card/popupReducer";

export const PopupActive = ({ bmw }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInPopup);
  const isItemInPopup = items.some((item) => item.id === bmw.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInPopup) {
      dispatch(deleteItemFromPopup(bmw.id));
    } else {
      dispatch(setItemInPopup(bmw));
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default PopupActive;
