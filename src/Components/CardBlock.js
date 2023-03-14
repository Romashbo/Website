import React, { useState } from "react";
import "./card-block.css";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartBall } from "./CartBall";
import ItemsIn from "../Components/ItemsIn/Items.js";
import Popup from "./Popup/Popup";

export const CardBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="cardBlock">
      <ItemsIn quantity={items.length} />

      <BiCartAlt
        size={25}
        className="cardBlockIcon "
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {isCartMenuVisible && <CartBall items={items} onClick={() => null} />}
    </div>
  );
};

export default CardBlock;
