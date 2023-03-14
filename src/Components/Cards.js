import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardF from "/Users/romanbocarov/my-app/src/Components/home1.jpeg";
import Card2 from "/Users/romanbocarov/my-app/src/Components/pexels-stephan-louis-5432071.jpg";
import Pod1 from "/Users/romanbocarov/my-app/src/Components/pod1.jpg";
import Pod2 from "/Users/romanbocarov/my-app/src/Components/pod2.jpg";
import Pod3 from "/Users/romanbocarov/my-app/src/Components/pod3.jpg";
import "/Users/romanbocarov/my-app/src/index.css";

export default class element extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row xs={1} md={2} lg={2} className="g-0">
          {Array.from({ length: 1 }).map((_) => (
            <Col>
              <Card className="cards h-100">
                <CardImg variant="top" src={CardF} />
                <Card.Body>
                  <Card.Title>
                    <h4>
                      <strong>WELCOME TO BMW GROUP CLASSIC</strong>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    BMW Group Classic is the branch of the BMW Group responsible
                    for all activities concerning the history of the company and
                    its four brands BMW, BMW Motorrad, MINI and Rolls-Royce
                    Motor Cars. It comprises the BMW Museum, BMW Group Classic
                    Services and the BMW Group Archive. Another important
                    element of BMW Group Classic’s brief is participation in
                    top-class national and international events. And it also
                    manages and oversees the technical preservation of every
                    model in a collection now spanning more than 1,400 vehicles,
                    ensuring they are ready to appear in engagements worldwide.
                    <br />
                    <br />
                  </Card.Text>
                  <Button
                    className="btnCard"
                    href="https://www.bmwgroup-classic.com/en.html"
                    variant="outline-dark"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {Array.from({ length: 1 }).map((_) => (
            <Col>
              <Card className="cards h-100">
                <CardImg variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title>
                    <h4>
                      <strong>TRAVEL WITH THE BMW</strong>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Living more conscientiously is not a trend. It's an
                    attitude. And the joy of a sustainable vision. The joy of
                    looking closer at where the products and luxury foods we
                    enjoy in our everyday lives actually come from. The joy of
                    traveling to destinations and accommodations that are
                    thinking about tourism in a new way and with the environment
                    in mind. At BMW, this joy and holistic awareness of where
                    products come from begins on a small scale – when we select
                    ingredients for the BMW cafeteria – and extends all the way
                    up to manufacturing automobiles. For example, the
                    <br />
                    <br />
                  </Card.Text>
                  <Button
                    className="btnCard"
                    href="https://www.bmwgroup-classic.com/en.html"
                    variant="outline-dark"
                  >
                    Read more
                  </Button>
                  {""}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="cardsPodcast">
          <Row xs={2} md={2} lg={4} className="g-0">
            {Array.from({ length: 1 }).map((_) => (
              <Col>
                <Card bg="dark" className="cardPodcast">
                  <Card.Body>
                    <Card.Title>
                      <h1>
                        THE BMW PODCAST: <br />
                        CHANGING LANES
                      </h1>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        "Changing Lanes” is the official podcast of BMW.
                        Featuring new episodes each week, in which our hosts
                        take you on exciting journeys and talk about innovative
                        technologies, lifestyle, design, cars and more. Find and
                        subscribe to Changing Lanes on all major podcasting
                        platforms.
                      </p>
                    </Card.Text>
                    <Button
                      className="btn__podcast"
                      href="https://podcasts.apple.com/de/podcast/the-bmw-podcast-changing-lanes/id1502221185"
                      variant="outline-light"
                    >
                      Listen now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_) => (
              <Col>
                <Card bg="dark" className="cardPodcast animation">
                  <a href="https://podcasts.apple.com/de/podcast/72-the-future-is-now-interview-with-ilka-horstmeier/id1502221185?i=1000543545435">
                    {" "}
                    <CardImg variant="top" src={Pod1} />
                  </a>

                  <Card.Body>
                    <Card.Title>Young leaders</Card.Title>
                    <Card.Text>
                      The future is now. Acting today, changing tomorrow
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_) => (
              <Col>
                <Card bg="dark" className="cardPodcast animation">
                  <a href="https://podcasts.apple.com/de/podcast/71-concept-cars-you-need-to-know-bmw-podcast/id1502221185?i=1000542140607">
                    {" "}
                    <CardImg variant="top" src={Pod2} />
                  </a>

                  <Card.Body>
                    <Card.Title>Hidden gems</Card.Title>
                    <Card.Text>
                      The BMW concept cars you need to know. Hidden
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {Array.from({ length: 1 }).map((_) => (
              <Col>
                <Card bg="dark" className="cardPodcast animation">
                  <a href="https://podcasts.apple.com/de/podcast/065-kitesurfer-roderick-pijls-the-ix3-and/id1502221185?i=1000533067769">
                    {" "}
                    <CardImg variant="top" src={Pod3} />
                  </a>

                  <Card.Body>
                    <Card.Title>Sustainability</Card.Title>
                    <Card.Text>
                      {" "}
                      Roderick Pijls: kitesurfing at one with the elements
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
