import React from "react";
import { Row, Col } from "react-bootstrap";
import { v4 } from "uuid";

//Css
import "./Footer.css";

//Img
const listSocialIcon = [];
for (let i = 1; i <= 3; i += 1) {
  listSocialIcon.push({
    id: v4(),
    icon: require(`../../assets/footer/snsicon-0${i}.png`),
  });
}

const renderSocialsIcon = listSocialIcon.map((icon) => {
  return (
    <li className="footer__social-item" key={v4()}>
      <img
        key={icon.id}
        src={icon.icon}
        alt="footer-social-icon"
        className="img-fluid footer__social-icon"
      />
    </li>
  );
});

export default function FooterCustom() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <Row>
          <Col md={6}>
            <p className="footer__title">what happened</p>
            <ul className="footer__content">
              <li className="footer__content-item item1" key={v4()}>
                [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남
                스토어 영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내
                [공지] iOS 10 이하 버전 지원 중단 안내 [공지] 개인 정보 처리
                방침 변경 사전 안내
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <div className="footer__about">
              <Row>
                <Col md={3}>
                  <div className="footer__content-item--float-right">
                    <p className="footer__title">about us</p>
                    <ul className="footer__content">
                      <li className="footer__content-item item2" key={v4()}>
                        회사 소개 인재 채용 상시 할인 혜택
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  {" "}
                  <div className="footer__content-item--float-right">
                    <p className="footer__title">my order</p>
                    <ul className="footer__content">
                      <li className="footer__content-item item3" key={v4()}>
                        내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역
                        증빙 서류 발급
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  {" "}
                  <div className="footer__content-item--float-right">
                    <p className="footer__title">my account</p>
                    <ul className="footer__content">
                      <li className="footer__content-item item4" key={v4()}>
                        회원 정보 수정 회원 등급 마일리지 현황 쿠폰
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={3}>
                  {" "}
                  <div className="footer__content-item--float-right">
                    <p className="footer__title">help</p>
                    <ul className="footer__content">
                      <li className="footer__content-item item5" key={v4()}>
                        1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문
                        고객의 소리
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer__corp-content">
        <Row>
          <Col md={7}>
            <p className="footer__corp">
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </Col>
          <Col md={5}>
            <div className="footer__social">
              <ul className="footer__social-content">{renderSocialsIcon}</ul>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
