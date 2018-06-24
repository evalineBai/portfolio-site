import React from 'react';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hi, I'm Evaline.</h3>
      <p>
        I am a software developer, specializing in web development, interested in finding technological solutions to public problems. I have business experience from my time in management consulting at Accenture, where I worked on technology transformations for Fortune 100 companies. And I studied social science at The University of Chicago ('16), where I explored my love for behavioral economics and the city of Chicago.
      </p>
      <p>
        Today I'm busy leveling up in blockchain development, contributing to open source projects, trying to live sustainably, and exploring beautiful Los Angeles. My favorite activities involve creating things - be it painting, writing, coding, or cooking - and my current tools of choice are Javascript, React, Node.js, the Ethereum stack, and the Instant Pot. Perhaps the most significant thing to know about me, however, is that I am obsessed with learning new things and am always up for expanding my universe. Let's get in touch!
      </p>
      <div>
        You can download a copy of my resume <a href="https://drive.google.com/file/d/1t5IdRI7ZCULPQ4kjRW1q6xVqeXKOBzvG/view?usp=sharing" target="_blank">here</a>.
      </div>
    </div>
  </div>
);

export default About;
