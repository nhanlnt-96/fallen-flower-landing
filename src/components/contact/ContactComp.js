import React from 'react';
import {Container, Row} from "react-bootstrap";
import FollowUs from '../../assets/imgs/followUs.svg';
import {SiDiscord, SiTwitter} from "react-icons/all";
import Discord from '../../assets/icons/discord.svg';
import Twitter from '../../assets/icons/whiteTwitter.svg';

import './ContactComp.scss';

const ContactComp = () => {
  return (
    <Container fluid className="contact-comp comp-height">
      <Container className="contact-comp-container">
        <Row className="contact-detail">
          <img src={FollowUs} alt="fallen-flower-project"/>
          <p className="contact-item">metagascar links to check out the space we will build in photo attached to see a
            strip of land</p>
          <p className="contact-item">we plan to buy a minimum of 10 plots of land or 1 street but may increase this to
            20
            depending on plans</p>
          <p className="contact-url space-content">https://metagascar.com/?s=09</p>
          <p className="contact-item">@metagascarNFT</p>
          <p className="contact-url space-content">https://hubs.mozilla.com/e7YinhQ/20-sierra-sky-dr-metagascar?s=09</p>
          <p className="contact-url">https://hubs.mozilla.com/iGxxFNA/2-sniper-st-metagascar</p>
          <p className="contact-url">https://hubs.mozilla.com/xMJdqkV/4-degen-st-metagascar?s=09</p>
          <p className="contact-url">https://hubs.mozilla.com/LvN9NGG/snoopy-eminent-place?s=09</p>
          <p className="contact-item space-content">to read more about the asm on chain A.I. brains</p>
          <p className="contact-url">https://www.alteredstatemachine.xyz/?s=09</p>
          <p className="contact-item">@altstatemachine</p>
          <p className="contact-item space-content">Those are some links for the concept and further research.</p>
        </Row>
        <Row className="contact-social">
          <div className="bg-left"/>
          <div className="social d-flex flex-column justify-content-center align-items-center">
            <div className="social-item d-flex justify-content-center align-items-center">
              <a href="#">
                <img src={Discord} alt="discord-fallen-flower"/>
              </a>
              <a href="#">
                <img src={Twitter} alt="discord-fallen-flower"/>
              </a>
            </div>
            <p className="copyright">2021 copyrights reserved by Astrodogs</p>
          </div>
          <div className="bg-right"/>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactComp;