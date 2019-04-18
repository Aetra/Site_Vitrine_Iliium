import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Project from './Project/Project';
import Team from './Team/Team';
import Contact from './Contact/Contact';

const Page = () => {
  return(
  <div className="stPage">
    <AboutUs/>
    <Project/>
    <Team/>
    <Contact/>
  </div>
   );
};

export default Page;
