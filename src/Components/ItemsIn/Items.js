import React from "react";
import "/Users/romanbocarov/my-app/src/Components/ItemsIn/Items.css";

export const ItemsIn = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items_in">{quantity}</div> : null;
};

export default ItemsIn;
