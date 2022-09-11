import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 } from "uuid";

//Css
import "./BrandStory.css";

//Components
import ButtonCustom from "../sub-components/Button/ButtonCustom";

//Imgs
let listSubImg = [];
for (let i = 1; i <= 7; i+=1) {
  listSubImg.push({
    id: v4(),
    imgTrackNumber: i,
    img: require(`../../assets/body/brand-story/object-0${i}.png`),
  });
}

const renderSubImg = listSubImg.map((img) => {
  return (
    <img
      key={img.id}
      src={img.img}
      alt="brand-story-sub-img"
      className={`brand-story__sub-img--cf-position brand-story__sub-img-${img.imgTrackNumber} img-fluid`}
    />
  );
});


export default function BrandStory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="brand-story">
      <div className="brand-story__title">
        <h2> BRAND STORY </h2>
        <p className="brand-story__title-content">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className="brand-story__content">
        <div className="brand-story__content-main">
          <div className="content">
            <div className="brand-story__content-main--pc-ver">
              <h5> WHAT HAPPENED'S BRAND STORY</h5>
              <p>
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </p>
              <ButtonCustom> SEE MORE </ButtonCustom>
            </div>
            <div className="brand-story__content-main--mb-ver">
              <h5> WHAT HAPPENED'S BRAND STORY </h5>
              <div className="btn-show-modal--centered">
              <div className="brand-story-btn-show">
            <div className="brand-story-btn-show--img">
                <img src="http://paul-themes.com/html/moonex/assets/img/root/call-to-action.png" alt="" className="img-fluid"/>
                <p className="gradient-text brand-story-btn-show--link" onClick={handleShow}>Click <br/> Me</p>
            </div>
        </div>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                className="brand-story__content-main-modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body className="brand-story__content-main-modal-body">
                  <h5> WHAT HAPPENED'S BRAND STORY </h5>
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      { renderSubImg }
    </div>
  );
}
