import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assests/images/Deposit.png";
import chooseImg1 from "../../assests/images/learners.png";
import "../Choose-us/choose-us.css";
import ReactPlayer from "react-player";

const HChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <p class="section-overline">Here are more reasons</p>
              <h2>Why Choose Us</h2>
              <p>
              
              Weekly mentorship sessions with Industry Experts along with Personalized attention in small groups of 5-15 learners. Gain hands-on exposure through industry-relevant projects
                    
              </p>
           
              <p>
                
              We offer mock interviews to prep for your dream job. Participate in hackathons and career fairs to stay ahead of others. 
                    
              </p>

              <p>
                
              Grow your professional network with peer interactions, sessions with industry leaders, and get access to a dedicated program manager to solve your queries. 
                    
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
            {showVideo ? (
                <ReactPlayer
                  url="https://videos.ctfassets.net/wp1lcwdav1p1/FplyBr1kooQUceICMesoC/2089b35516f9a8da344b645afad84d9e/learning-experience.mp4"
                  controls
                  autoplay="" muted="" loop="" aria-hidden="true" tabindex="-1"
                  width="100%"
                  height="350px"
                />
            ): 
              (
                <img src={chooseImg} alt="" className="w-100" />
              )
            } 

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="choose__img1">
      <div class="section-head">
        <p class="section-overline">Providing online education for</p>
        <h2 class="section-title">
            Learners across 170+ countries 
        </h2>
        </div>
              <img src={chooseImg1} alt="" className="w-100" />
            </div>
            
    </section>
  );
};

export default HChooseUs;