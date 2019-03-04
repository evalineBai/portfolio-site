import React from 'react';
import Contact from './Contact';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hi, I'm Evaline.</h3>
      <p>
        I am currently a software engineer at an energy-tech startup. I love analytical and creative work and enjoy building everything from web and mobile products to internal tools. I have business experience from a past life in management consulting at Accenture, where I worked on technology transformations for Fortune 100 companies. And I attended The University of Chicago ('16), where I explored my love for behavioral economics and environmental policy.
      </p>
      <p>
        I live in Mission Bay, San Francisco with my fiancé. My favorite activities involve creating things - be it painting, coding, writing, or cooking - and my current tools of choice are React, CSS preprocessors, Node.js, Python, and my Instant Pot. Perhaps the most significant thing to know about me, however, is that I am obsessed with learning new things and am always up for expanding my universe. Let's get in touch!
      </p>
      <div>
        Email me directly if you are interested in obtaining an updated resume.
      </div>
      <div className={style.smallContact}>
        <Contact/>
      </div>
    </div>
  </div>
);

export default About;
