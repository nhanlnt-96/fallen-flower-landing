import React from 'react';
import {Container, Row} from "react-bootstrap";
import './CommunityComp.scss';
import {communityData} from "../../configs/communityData";

const CommunityComp = () => {
  return (
    <Container fluid className="community-comp comp-height">
      <Container className="community-comp-container">
        <Row className="community-comp-content">
          <div className="community-comp-title d-flex justify-content-center align-items-center">
            <h6 className="title">Community</h6>
          </div>
          <div className="community-comp-desc">
            <div className="left"/>
            <div className="right"/>
            <p className="desc">Unlike many projects launching fast 10k pfp collections; we are limiting ourselves to
              2800 and only telling communities we think will provide meaningful engagement. Believing a slow burn will
              allow us time to build. We take vision from many sources and communities. We think by keeping the cost low
              this is the perfect chance for those who are new to the nft space if you want to get on the ground level
              of something. We talked about charging more with our limited release to afford more Features later down
              the line, but felt we didn't want to keep anyone from the community.</p>
          </div>
          <div className="community-comp-img">
            {
              communityData.map((val, index) => (
                <img key={index} src={val} alt="fallen-flower-community"/>
              ))
            }
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default CommunityComp;