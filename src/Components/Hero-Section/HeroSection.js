import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import heroImg from "../../assests/images/banner-new-hp.png";

const HeroSection = () => {
  return (
    <section>
      <div className="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__titles">Anjali Sethy</p>
              <p className="hero__overline">Learn with</p>
              <h1 className="hero__title">
                India's most trusted education platform</h1>
              <p className="hero__desc">
              Power ahead in your career with certified online courses and degrees from world-class universities.
              </p>

              <ul className="hero-text-item">
                <li className="hero-text__item one">
                <p className="hero__add-text">4 Million+ Learners</p>
                </li>
                
                <li className="hero-text__item two">
                  <p className="hero__add-text">66% Alumni Career Transitions</p>
                </li>

                <li className="hero-text__item three">
                  <p className="hero__add-text">7800+ Companies Hire from Us*</p>
                </li>
              </ul>
            </div>
            
           
           <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='secondary'></i>
              </button>
              
              <button className="view-btn">
                VIEW COURSE<i className="secondary"></i>
              </button>
            </div>

            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>

          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>.
      </Container>
      </div>
    </section>
  );
};

export default HeroSection;