import React from "react"
import TeamCard from "../Team/TeamCard"
import "../Team/team.css"
import { Container, Row, Col } from "reactstrap";
import teamImg1 from "../../assests/images/t1.png";
import teamImg2 from "../../assests/images/t2.png";
import teamImg3 from "../../assests/images/t3.png";
import teamImg4 from "../../assests/images/t4.png";
import teamImg5 from "../../assests/images/t4.png";
import teamImg6 from "../../assests/images/t3.png";
import teamImg7 from "../../assests/images/t2.png";
import teamImg8 from "../../assests/images/t1.png";

const TeamData = [
  {
    id: "01",
    title: "DEVELOPER AND LEAD INSTRUCTOR",
    imgUrl: teamImg1,
  },

  {
    id: "02",
    title: "DEVELOPER AND LEAD INSTRUCTOR",
    imgUrl: teamImg2,
  },

  {
    id: "03",
    title: "DEVELOPER AND LEAD INSTRUCTOR",
    imgUrl: teamImg3,
  },

{
  id: "04",
  title: "DEVELOPER AND LEAD INSTRUCTOR",
  imgUrl: teamImg4,
},


{
  id: "05",
  title: "DEVELOPER AND LEAD INSTRUCTOR",
  imgUrl: teamImg5,
},


{
  id: "06",
  title: "DEVELOPER AND LEAD INSTRUCTOR",
  imgUrl: teamImg6,
},

{
  id: "07",
  title: "DEVELOPER AND LEAD INSTRUCTOR",
  imgUrl: teamImg7,
},

{
  id: "08",
  title: "DEVELOPER AND LEAD INSTRUCTOR",
  imgUrl: teamImg8,
},
];

const Team = () => {
  return (
    <>
    <section>
      <div className="team">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="team__top d-flex justify-content-between align-items-center">
        
              <div className="team__top__left w-50">
                <h2>Our Team</h2>
                
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
                </p>
                
              </div>
            </div>
          </Col>

          {TeamData.map((item) => (
            <Col lg="3" md="4" sm="">
              <TeamCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </section>
    </>
  );
};

export default Team