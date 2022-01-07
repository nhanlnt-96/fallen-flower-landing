import React from 'react';
import {Container, Row} from "react-bootstrap";
import './RoadmapComp.scss';
import TitleFooter from '../../assets/imgs/roadmapTitleFooter.svg';
import {roadmapData} from "../../configs/roadmapData";
import FooterRoadmap from '../../assets/imgs/subRoadmapImg5.svg';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <div className="bg-left-top"/>
        <div className="bg-right-top"/>
        <div className="bg-center-top"/>
        <div className="bg-center-bottom"/>
        <Row className="roadmap-comp-content">
          <div className="roadmap-comp-title d-flex flex-column justify-content-center align-items-center">
            <h6 className="title">ROADMAP</h6>
            <img src={TitleFooter} alt="fallen-flower-project"/>
          </div>
          <div className="roadmap-comp-detail">
            {
              roadmapData.map((val, index) => (
                <div className="roadmap-item">
                  <div className="progress-container d-flex justify-content-center align-items-center">
                    <p className="detail d-flex justify-content-center align-items-center">{val.progress}</p>
                  </div>
                  <div className="content-container">
                    <p className="content">{val.content}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </Row>
        <Row className="roadmap-comp-footer d-flex justify-content-center align-items-center">
          <div className="footer-left"/>
          <img src={FooterRoadmap} alt="fallen-flower-project"/>
          <div className="footer-right"/>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;