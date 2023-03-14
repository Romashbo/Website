import React from "react";
import { Button } from "react-bootstrap";
import { culcTotalPrice } from "./totalPrice";
import "../Components/cartBall.css";

export const CartBall = ({ items, onClick }) => {
  return (
    <div className="cartMenu">
      <div className="cartMenu_CarList">
        {items.length > 0
          ? items.map((bmw) => (
              <li>
                {bmw.title}
                {"\n"}
                {bmw.price}$
                <img className="img_ball" src={bmw.image} width="80px"></img>
              </li>
            ))
          : "Choose your BMW"}
      </div>
      {items.length > 0 ? (
        <div className="cartMenuAr">
          <div className="totalPrice">
            <span>TOTAL:</span>
            <span>{culcTotalPrice(items)}$</span>
          </div>
          <Button variant="primary" onClick={onClick}>
            Checkout
          </Button>
        </div>
      ) : null}
    </div>
  );
};
