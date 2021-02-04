import React from 'react';
import Contact from './Contact';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hi, I'm Evaline.</h3>
      <p>
        I am currently a software engineer at a mission-oriented company in San Francisco. I love analytical and creative work and am dedicated to creating performant, useful, and beautiful products. I have business experience from a past life in management consulting, where I worked on technology transformations for Fortune 100 companies. I did my undergrad at The University of Chicago and am currently pursuing an MS in Computer Science with The Georgia Institute of Technology.
      </p>
      <p>
        I live in SF with my fiancé. My favorite activities involve creating things - be it painting, coding, writing, or cooking. If you get to know me, we might talk about travel, environmental sustainability, economics, design, or Animal Crossing! Perhaps the most relevant thing to know about me, however, is that I am driven by the pursuit of learning and new experiences. Let's get in touch.
      </p>
      <div>
        Email me directly if you are interested in obtaining an updated resume.
      </div>
      <div className={style.smallContact}>
        <Contact />
      </div>
    </div>
  </div>
);

export default About;
