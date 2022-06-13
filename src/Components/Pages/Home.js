import React, { Fragment } from "react";
import HeroSection from "../Hero-Section/HeroSection";
import CompanySection from "../Company-section/Company";
import HAbout from "../Pages/HAbout";
import HCourses from "../Pages/HCourses";
import HChooseUs from "../Pages/HChooseUs";
import Features from "../Feature-section/Features";
import FreeCourse from "../Free-course-section/FreeCourse";
import Testimonials from "../Testimonial/Testimonials";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <CompanySection />
      <HAbout />
      <HCourses />
      <HChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default Home;