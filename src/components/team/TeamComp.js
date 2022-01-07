import React from 'react';
import {Container, Row} from "react-bootstrap";
import './TeamComp.scss';
import {teamData} from "../../configs/teamData";
import Footer from '../../assets/imgs/memberFooter.svg';

const TeamComp = () => {
  return (
    <Container fluid className="team-comp comp-height">
      <Container className="team-comp-container">
        <div className="left-img"/>
        <div className="right-img"/>
        <Row className="team-comp-content">
          <div className="team-comp-title">
            <h6 className="title">Out team</h6>
          </div>
          <div className="team-comp-members">
            {
              teamData.map((val, index) => (
                <>
                  <div key={index} className="item-container">
                    <div className="member-ava">
                      <img src={val.ava} alt=""/>
                    </div>
                    <div className="member-info ">
                      <p className="member-name">{val.name}</p>
                      <p className="member-position">{val.title}</p>
                      <div className="member-social d-flex justify-content-center align-items-center">
                        <p className="social-id">{val.social}</p>
                        {val.socialIcon && (<img src={val.socialIcon} alt=""/>)}
                      </div>
                    </div>
                    <ul className="member-about">
                      {
                        val.about.map((item, key) => (
                          <li key={key} className="desc">{item}</li>
                        ))
                      }
                    </ul>
                    <div className="member-footer d-flex justify-content-center align-items-center">
                      <img className="img-footer" src={Footer} alt="fallen-flower-project"/>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </Row>
        <div className="team-footer"/>
      </Container>
    </Container>
  );
};

export default TeamComp;