import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './AboutComp.scss';
import AboutImg from '../../assets/imgs/aboutImg.png';
import {aboutData} from "../../configs/aboutData";

const AboutComp = () => {
  return (
    <Container fluid className="about-comp comp-height">
      <Container className="about-comp-container">
        <div className="cloud-bg"/>
        <Row className="about-comp-content d-flex justify-content-center align-items-center">
          <Col xl={5} lg={4} md={5} sm={12} className="content-img">
            <img src={AboutImg} alt="about-fallen-flower"/>
          </Col>
          <Col xl={7} lg={8} md={7} sm={12} className="content-desc d-flex flex-column justify-content-center">
            <h6 className="title">fallen flowers project</h6>
            {
              aboutData.map((val, index) => (
                <p key={index} className="desc">{val}</p>
              ))
            }
          </Col>
        </Row>
        <div className="nft-img"/>
      </Container>
    </Container>
  );
};

export default AboutComp;