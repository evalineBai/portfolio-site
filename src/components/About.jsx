import React from 'react';
import Contact from './Contact';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hi, I'm Evaline.</h3>
      <p>
        I am a software developer, specializing in web development, interested in finding technological solutions to public problems. I have business experience from my time in management consulting at Accenture, where I worked on technology transformations for Fortune 100 companies. And I attended The University of Chicago ('16), where I explored my love for behavioral economics and environmental policy.
      </p>
      <p>
        Today I'm busy working at a startup that is transforming our urban energy landscape, contributing to civic open source projects, and exploring NYC. My favorite activities involve creating things - be it painting, writing, coding, or cooking - and my current tools of choice are React, Node.js, Django, the Ethereum stack, and cast iron cookware. Perhaps the most significant thing to know about me, however, is that I am obsessed with learning new things and am always up for expanding my universe. Let's get in touch!
      </p>
      <div>
        {/* You can download a copy of my resume <a href="https://drive.google.com/file/d/1N8RGO3ZtCb7jMbQuv-ZdDYAimUBJue01/view?usp=sharing" target="_blank">here</a>. */}
        Email me directly if you are interested in obtaining an updated resume.
      </div>
      <div className={style.smallContact}>
        <Contact/>
      </div>
    </div>
  </div>
);

export default About;
