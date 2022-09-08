import React from "react";

import { Row, Col } from "react-bootstrap";

//Css
import "./Introduce.css";

export default function Introduce() {
  return (
    <div className="introduce-banner">
      <div className="introduce-banner__content">
          <Row>
            <Col lg={6}>
              <h2 className="title"> What Happened! </h2>
              <p className="content">
                {" "}
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first step to your brand's success. How to create
                mobile-optimized videos in minutes.{" "}
              </p>
            </Col>
          </Row>
      </div>
    </div>
  );
}
