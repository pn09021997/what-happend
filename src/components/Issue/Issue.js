import React from "react";
import { v4 } from "uuid";
import { Row, Col, Carousel } from "react-bootstrap";
import ButtonCustom from "../sub-components/Button/ButtonCustom";

//Css
import "./Issue.css";

//Imgs
import issueMainImg from "../../assets/body/news-img-01.png";
import issueSubImg6 from "../../assets/body/news-object-06.png";
import issueSubImg2 from "../../assets/body/news-object-02.png";

const listBrand = [];
const listSubImg = [];
for (let i = 2; i <= 5; i++) {
  let brandName = "";
  switch (i) {
    case 2:
      brandName = "B BRAND";
      break;
    case 3:
      brandName = "C BRAND";
      break;
    case 4:
      brandName = "D BRAND";
      break;
    case 5:
      brandName = "E BRAND";
      break;
    default:
      break;
  }

  listBrand.push({
    id: v4(),
    brandName: brandName,
    img: require(`../../assets/body/news-img-0${i}.png`),
  });

  if (i !== 2) {
    listSubImg.push({
      id: v4(),
      imgTrackNumber: i,
      img: require(`../../assets/body/news-object-0${i}.png`),
    });
  }
}

const renderBrands = listBrand.map((brand) => {
  return (
    <Col md={2} className="issue--col-cf" key={brand.id}>
      <div className="issue__content-box">
        <div className="content--centered">
          <div
            className={
              brand.brandName === "D BRAND"
                ? "issue__content-brand-title issue__content-brand-title--special-bg"
                : "issue__content-brand-title"
            }
          >
            <p> {brand.brandName} </p>
          </div>
          <img
            src={brand.img}
            alt="issue-img"
            className="img-fluid issue__content-brand-img"
          />
        </div>
      </div>
    </Col>
  );
});

const renderBrand_MBVer = listBrand.map((brand) => {
  return (
    <Carousel.Item className="">
      <div className="issue__content-box">
        <div className="content--centered">
          <div className="issue__content-brand-title">
            <p> {brand.brandName} </p>
          </div>
          <img
            key={brand.id}
            src={brand.img}
            alt="issue-img"
            className="img-fluid issue__content-brand-img"
          />
        </div>
      </div>
    </Carousel.Item>
  );
});

const renderSubImg = listSubImg.map((img) => {
  return (
    <img
      key={img.id}
      src={img.img}
      alt="issue-sub-img"
      className={`issue__content-sub-img--cf-position issue__sub-img-${img.imgTrackNumber} img-fluid`}
    />
  );
});

export default function Issue() {
  return (
    <div className="issue">
      <div className="issue__title">
        <h2> HAPPENED'S ISSUE </h2>
        <p className="issue__title-content">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <ButtonCustom> SEE MORE </ButtonCustom>
      </div>
      <div className="issue-brand--pc-ver">
        <div className="issue__content">
          <Row className="issue--row-full-w">
            <Col md={2} className="issue--col-cf">
              <div className="issue__content-box issue__content-main">
                <div className="content--centered">
                  <p className="issue__content-main-title"> WHPN ISSUE </p>
                  <img
                    src={issueMainImg}
                    alt="issue-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
            {renderBrands}
          </Row>
          {renderSubImg}
        </div>
      </div>
      <div className="issue-brand--mb-ver">
        <Carousel>
          { renderBrand_MBVer }
        </Carousel>
      </div>
      <img
        key={v4()}
        src={issueSubImg6}
        alt="issue-sub-img"
        className="issue__content-sub-img--cf-position issue__sub-img-6 img-fluid"
      />
      <img
        key={v4()}
        src={issueSubImg2}
        alt="issue-sub-img"
        className="issue__content-sub-img--cf-position issue__sub-img-2 img-fluid"
      />
    </div>
  );
}
