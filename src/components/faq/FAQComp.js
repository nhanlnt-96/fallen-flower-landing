import React from 'react';
import {Container, Row} from "react-bootstrap";
import './FAQCom.scss';
import {faqData} from "../../configs/faqData";

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp comp-height">
      <Container className="faq-comp-container d-flex justify-content-center align-items-center">
        <Row className="faq-comp-content">
          <div data-aos="fade-up" className="faq-comp-title">
            <h6 className="title">FAQ</h6>
          </div>
          {
            faqData.map((val, index) => (
              <div className="faq-content">
                <div data-aos="fade-left" className="faq-question">
                  <p className="question">{val.question}</p>
                </div>
                <div data-aos="fade-right" className="faq-answer">
                  <p className="answer">{val.answer}</p>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default FaqComp;