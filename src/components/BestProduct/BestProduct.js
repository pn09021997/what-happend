import React from "react";

import { Row, Col } from "react-bootstrap";
//Css
import "./BestProduct.css";

import product1 from "../../assets/products/best-image-01.png";
import product2 from "../../assets/products/best-image-02.png";
import product3 from "../../assets/products/best-image-03.png";

export default function BestProduct() {
  return (
    <div className="best-product">
      <h2>Best Product</h2>
      <p>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </p>

      <div className="best-product__list">
        <Row className="no-gutter">
          <Col lg={4} className="px-0">
            <div className="product-item">
              <img
                alt="product"
                src={product1}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p> How to create mobile-optimized</p>
                <button>GO</button>
              </div>
            </div>
          </Col>
          <Col lg={4} className="px-0">
            <div className="product-item">
              <img
                alt="product"
                src={product2}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p> How to create mobile-optimized</p>
                <button>GO</button>
              </div>
            </div>
          </Col>
          <Col lg={4} className="px-0">
            <div className="product-item">
              <img
                alt="product"
                src={product3}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p> How to create mobile-optimized</p>
                <button>GO</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
