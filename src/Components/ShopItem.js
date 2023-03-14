import React, { useState } from "react";
import "./card-block.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../Components/Shop/ShopItem.css";
import BMWBuy from "../Redux/BMW-buy/BMW-buy";
import { BiInfoCircle } from "react-icons/bi";
import Popup from "./Popup/Popup";
import { useDispatch } from "react-redux";
import { setCurrentBmw } from "../Redux/card/popupReducer";
import InfoPopup from "./Shop/infoPopup";

const ShopItem = ({ bmw }) => {
  const [popupActive, setPopupActive] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBmw(bmw));
  };
  return (
    <div className="container">
      <Row xs={2} md={3} lg={4} className=" g-4">
        {bmw.map((bmw) => (
          <Col className={bmw.className} key={bmw.id}>
            <Card className="card_item g-5">
              <h5 id="block1" className="name">
                {bmw.series}
              </h5>
              <CardImg
                className="card_item_img
            "
                variant="top"
                src={bmw.image}
              />
              <button
                className="info__button"
                onClick={() => setPopupActive(true)}
              >
                <BiInfoCircle
                  onClick={() => setPopupActive(true)}
                  className="card__info"
                />
              </button>

              <Card.Body className="card_body">
                <Card.Title className="card_item_title">
                  <h4>
                    <strong>{bmw.title}</strong>
                  </h4>
                </Card.Title>
                <Card.Text>{bmw.description}</Card.Text>
                <BMWBuy bmw={bmw} />
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Popup active={popupActive} setActive={setPopupActive} />;
      </Row>
    </div>
  );
};

export default ShopItem;
