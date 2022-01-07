import React from 'react';
import {Container, Row} from "react-bootstrap";
import './BannerComp.scss';
import HeaderComp from "../header/HeaderComp";
import BannerImg from '../../assets/imgs/bgBanner.png';

const BannerComp = () => {
  return (
    <Container fluid className="banner-comp comp-height">
      <HeaderComp/>
      <Container className="banner-comp-container">
        <div className="left-img"/>
        <Row className="banner-comp-content d-flex justify-content-center align-items-center">
          <img src={BannerImg} alt="fallen-flower-project"/>
        </Row>
        <div className="right-img"/>
      </Container>
    </Container>
  );
};

export default BannerComp;