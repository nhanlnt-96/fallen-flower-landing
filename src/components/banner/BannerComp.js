import React from 'react';
import {Container} from "react-bootstrap";
import './BannerComp.scss';
import HeaderComp from "../header/HeaderComp";

const BannerComp = () => {
  return (
    <Container fluid className="banner-comp comp-height">
      <HeaderComp/>
      <Container className="banner-comp-container"></Container>
    </Container>
  );
};

export default BannerComp;