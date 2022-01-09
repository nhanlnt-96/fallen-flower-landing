import React from 'react';
import { Container, Row } from "react-bootstrap";
import FollowUs from '../../assets/imgs/followUs.svg';
import { SiDiscord, SiTwitter } from "react-icons/all";
import Discord from '../../assets/icons/discord.svg';
import Twitter from '../../assets/icons/whiteTwitter.svg';

import './ContactComp.scss';

const ContactComp = () => {
  return (
    <Container fluid className="contact-comp comp-height">
      <Container className="contact-comp-container">
        <Row className="contact-detail">
          <img data-aos="fade-up" src={FollowUs} alt="fallen-flower-project" />
          <p data-aos="fade-up" className="contact-item">metagascar links to check out the space we will build in photo
            attached to see a
            strip of land</p>
          <p data-aos="fade-up" className="contact-item">we plan to buy a minimum of 10 plots of land or 1 street but
            may increase this to
            20
            depending on plans</p>
          <p data-aos="fade-up" className="contact-url space-content">https://metagascar.com/?s=09</p>
          <p data-aos="fade-up" className="contact-item">@metagascarNFT</p>
          <p data-aos="fade-up"
            className="contact-url space-content">https://hubs.mozilla.com/e7YinhQ/20-sierra-sky-dr-metagascar?s=09</p>
          <p data-aos="fade-up" className="contact-url">https://hubs.mozilla.com/iGxxFNA/2-sniper-st-metagascar</p>
          <p data-aos="fade-up" className="contact-url">https://hubs.mozilla.com/xMJdqkV/4-degen-st-metagascar?s=09</p>
          <p data-aos="fade-up" className="contact-url">https://hubs.mozilla.com/LvN9NGG/snoopy-eminent-place?s=09</p>
          <p data-aos="fade-up" className="contact-item space-content">to read more about the asm on chain A.I.
            brains</p>
          <p data-aos="fade-up" className="contact-url">https://www.alteredstatemachine.xyz/?s=09</p>
          <p data-aos="fade-up" className="contact-url">https://youtu.be/Mh6s94NAeDk</p>
          <p data-aos="fade-up" className="contact-item">@altstatemachine</p>
          <p data-aos="fade-up" className="contact-item space-content">Those are some links for the concept and further
            research.</p>
        </Row>
        <Row className="contact-social">
          <div className="bg-left" />
          <div className="social d-flex flex-column justify-content-center align-items-center">
            <div className="social-item d-flex justify-content-center align-items-center">
              <a href="#">
                <img src={Discord} alt="discord-fallen-flower" />
              </a>
              <a href="#">
                <img src={Twitter} alt="discord-fallen-flower" />
              </a>
            </div>
            {/*<p className="sub-footer">All donations will also go in our Easter Egg hunt as well more fair and engaging manner than a giveaway. So please use this as an opportunity to send us your art or any undesired tokens to fallenflower.eth. We will leave it hidden for anyone to find. This is to recycle our community's excess and give it out to members in hopes of reaching a wider audience. ALL eth and nft assets sent to this address will be hidden in our museum for anyone in the community to find and keep as a part of our digital Easter Egg hunt. (We advise you to add it on zerion because we keep all proof of donation on the chain!)</p>*/}
          </div>
          <div className="bg-right" />
        </Row>
      </Container>
    </Container>
  );
};

export default ContactComp;