import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row>
        <BannerComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;