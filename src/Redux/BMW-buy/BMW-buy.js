import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "/Users/romanbocarov/my-app/src/Components/Shop/ShopItem.css";
import { Card } from "react-bootstrap";
import { deleteItemFromCart, setItemInCart } from "../card/reducer";

export const BMWBuy = ({ bmw }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === bmw.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(bmw.id));
    } else {
      dispatch(setItemInCart(bmw));
    }
  };
  return (
    <div className="bmw_buy">
      <Card.Text className="card_item_price">{bmw.price}$ </Card.Text>
      <Button
        variant={isItemInCart ? "outline-danger" : "outline-dark"}
        onClick={handleClick}
      >
        {isItemInCart ? "Cancellations" : "Buy"}
      </Button>
    </div>
  );
};

export default BMWBuy;
