import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import car from "/Users/romanbocarov/my-app/src/slide/car2.jpg";
import car2 from "/Users/romanbocarov/my-app/src/slide/car11.jpg";
import car3 from "/Users/romanbocarov/my-app/src/slide/car3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" height="700" src={car} alt="Car" />
          <Carousel.Caption>
            <h3>Gautam Sudarsanr</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" height="700" src={car2} alt="Car" />
          <Carousel.Caption>
            <h3>Jae Park</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" height="700" src={car3} alt="Car" />
          <Carousel.Caption>
            <h3>Marria Geller</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
