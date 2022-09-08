import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

//Css
import "./ProductList.css";

import iconHeart from "../../assets/products/hearticon.png";
import ButtonCustom from "../sub-components/Button/ButtonCustom";

const listProduct = [];
for (let i = 1; i <= 25; i++) {
  if (i < 10) {
    listProduct.push({ img: require(`../../assets/products/img-0${i}.png`) });
  } else {
    listProduct.push({ img: require(`../../assets/products/img-${i}.png`) });
  }
}

const renderProductList = listProduct.map((img) => {
  return (
    <Col md={2} className="product-list--col-cf product-list__item">
      <Card className="product-list__item-card">
        <div className="product-list__item-img">
          <Card.Img
            variant="top"
            src={img.img}
            className="img-fluid"
            alt="product-item"
          />
        </div>
        <Card.Body className="product-list__item-card-body">
          <Card.Text className="product-list__item-card-content">
            <p className="item-name"> [what happen] How to create </p>
            <div className="item-info">
              <p> 2,500 won </p>
              <div className="like-icon">
                <img
                  alt="heart-icon"
                  src={iconHeart}
                  className="img-fluid px-2"
                />{" "}
                <p> 236 </p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

export default function ProductList() {
  return (
    <div className="product-list">
      <Container>
        <Row>{renderProductList}</Row>
        <ButtonCustom />
      </Container>
    </div>
  );
}
