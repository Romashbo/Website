import React, { Component } from "react";
export default class slide extends Component {
  render() {
    return (
      <div class="containerSad">
        <div class="sidebar">
          <div className="back1">
            <h1>THE BMW iX - start of a new era</h1>
            <p>
              A vision is turning into reality, as the BMW Vision iNEXT becomes
              the BMW iX. Find out more about the BMW Group’s new technology
              flagship.
            </p>
          </div>
          <div className="back2">
            <h1>BMW M440i</h1>
            <p>
              BMW M440i convertible is comfortable for cruising, sporty around
              corners and classy all the while.
            </p>
          </div>
          <div className="back3">
            <h1>BMW 840i xDrive Cabrio</h1>
            <p>
              Engage your inner performance enthusiast with the standard M Sport
              Package. Design enhancements include exclusive wheels and
              upholstery styles, an Aerodynamic Kit, and more.
            </p>
          </div>
          <div className="back4">
            <h1>
              E-MOBILITY WITHOUT COMPROMISE. BMW CONCEPT i4. <br />
            </h1>
            <p>
              UP TO 600 KM RANGE (BASED ON WLTP). <br />
              UP TO 530 HP. <br />
              5TH GENERATION BMW eDRIVE WITHOUT ANY RARE EARTHS. <br />
              BUILT IN MUNICH.
            </p>
          </div>
        </div>
        <div class="main-slide">
          <div>
            <img src="https://images.drive.ru/i/0/5e5e1937ec05c4a701000038.jpg"></img>
          </div>
          <div>
            <img src="https://cdn.bmwblog.com/wp-content/uploads/2019/07/BMW-M850i-Convertible-21-of-30.jpg"></img>
          </div>
          <div>
            <img src="https://mediapool.bmwgroup.com/cache/P9/202005/P90390034/P90390034-bmw-m440i-xdrive-arctic-race-blue-rim-19-styling-797-m-06-2020-2250px.jpg"></img>
          </div>
          <div>
            <img src="https://dvizhok.su/i/files2/auto/2021/03/BMW_iX_2021_specs_2.jpg"></img>
          </div>
        </div>
        <div class="controls">
          <button class="down-button">
            <i class="fas fa-arrow down"></i>
          </button>
          <button class="up-button">
            <i class="fas arrow up"></i>
          </button>
        </div>
      </div>
    );
  }
}
