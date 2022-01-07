import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CommunityComp from "../community/CommunityComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import TeamComp from "../team/TeamComp";
import FAQComp from "../faq/FAQComp";

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
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row className="faq">
        <FAQComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;