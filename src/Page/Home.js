import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBox from "/Users/romanbocarov/my-app/src/Components/CarouselBox.js";
import Cards from "/Users/romanbocarov/my-app/src/Components/Cards.js";
import Video from "/Users/romanbocarov/my-app/src/Components/bmw.mp4";

export default class element extends Component {
  render() {
    return (
      <>
        <div>
          <video
            src={Video}
            width="100%"
            height="auto"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div>
          <Cards />
        </div>
      </>
    );
  }
}
