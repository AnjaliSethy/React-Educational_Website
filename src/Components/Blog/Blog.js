import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
import { Container, Row, Col } from "reactstrap";
import blogImg from "../../assests/images/Blog.png";
import blogImg1 from "../../assests/images/b1.png";
import blogImg2 from "../../assests/images/b2.png";
import blogImg3 from "../../assests/images/b3.png";
import blogImg4 from "../../assests/images/b4.png";
import blogImg5 from "../../assests/images/b5.png";
import blogImg6 from "../../assests/images/b6.png";

const blogsData = [
  {
    id: "01",
    title: "Build your Dream Software & Engineering Career",
    students: 14.5,
    imgUrl: blogImg1,
  },

  {
    id: "02",
    title: "Build your Dream Software & Engineering Career",
    students: 14.5,
    imgUrl: blogImg2,
  },

  {
    id: "03",
    title: "Build your Dream Software & Engineering Career",
    students: 14.5,
    imgUrl: blogImg3,
  },

{
  id: "04",
  title: "Build your Dream Software & Engineering Career",
  students: 14.5,
  imgUrl: blogImg4,
},


{
  id: "05",
  title: "Build your Dream Software & Engineering Career",
  students: 14.5,
  imgUrl: blogImg5,
},


{
  id: "06",
  title: "Build your Dream Software & Engineering Career",
  students: 14.5,
  imgUrl: blogImg6,
},
];

const Blog = () => {
  return (
    <>
    <section>
    <div className="blogg__img">
              <img src={blogImg} alt="" className="w-100" />
            </div>

      <div className="blog">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="blog__top d-flex justify-content-between align-items-center">
        
              <div className="blog__top__left w-50">
                <h2>Blog Posts</h2>
                
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
                </p>
                
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {blogsData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <BlogCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </section>
    </>
  );
};

export default Blog