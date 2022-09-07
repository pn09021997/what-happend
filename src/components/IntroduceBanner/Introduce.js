import React from "react";

import { Container, Row, Col } from "react-bootstrap";

//Css
import "./Introduce.css";

export default function Introduce() {
  return (
    <div className="introduce-banner">
      <div className="introduce-banner__content">
        <Container>
          <Row>
            <Col md={6}>
              <h2> What Happened! </h2>
              <p>
                {" "}
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first step to your brand's success. How to create
                mobile-optimized videos in minutes.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
