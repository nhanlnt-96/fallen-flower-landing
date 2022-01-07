import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CommunityComp from "../community/CommunityComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="community">
        <CommunityComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;