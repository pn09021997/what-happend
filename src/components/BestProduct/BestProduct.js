import React from "react";

import { Row, Col, Carousel } from "react-bootstrap";
//Css
import "./BestProduct.css";

import product1 from "../../assets/products/best-image-01.png";
import product2 from "../../assets/products/best-image-02.png";
import product3 from "../../assets/products/best-image-03.png";

import btnGo from "../../assets/header/go-icon.png";

export default function BestProduct() {
  return (
    <div className="best-product">
      <div className="best-product__title">
        <h2>Best Product</h2>
        <p>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first{" "}
        </p>
      </div>
      <div className="best-product__list">
        <BestProductList />
      </div>
    </div>
  );
}

function BestProductList() {
  return (
    <div>
      <div className="best-product-list--pc-ver">
        <Row>
          <Col lg={4} className="px-0">
            <div className="product-item">
              <div className="product-item__number-track">01</div>
              <img
                alt="product"
                src={product1}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Col>
          <Col lg={4} className="px-0">
            <div className="product-item">
              <div className="product-item__number-track">02</div>
              <img
                alt="product"
                src={product2}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Col>
          <Col lg={4} className="px-0">
            <div className="product-item">
              <div className="product-item__number-track">03</div>
              <img
                alt="product"
                src={product3}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="best-product-list--mb-ver">
        <Carousel>
          <Carousel.Item className="product-item--cf-p">
            <div className="product-item">
              <div className="product-item__number-track">01</div>
              <img
                alt="product"
                src={product1}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="product-item--cf-p">
            <div className="product-item">
              <div className="product-item__number-track">02</div>
              <img
                alt="product"
                src={product2}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="product-item--cf-p">
            <div className="product-item">
              <div className="product-item__number-track">03</div>
              <img
                alt="product"
                src={product3}
                className="d-inline-block align-top img-fluid"
              />{" "}
              <div className="product-item__tools">
                <p className="content"> How to create mobile-optimized</p>
                <img
                  alt=""
                  src={btnGo}
                  className="d-inline-block align-top img-fluid btn-go"
                />{" "}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
