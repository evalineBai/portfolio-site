import React from 'react';
import Contact from './Contact';
import style from '../style/about.less';

const About = () => (
  <div>
    <div className={style.about}>
      <h3>Hi, I'm Evaline.</h3>
      <p>
        I am currently a software engineer at a mission-oriented company in San Francisco. I love analytical and creative work and am dedicated to creating performant, useful, and beautiful products. I have business experience from a past life in management consulting, where I worked on technology transformations for Fortune 100 companies. And I attended The University of Chicago and have a soft spot for all things Chi-town.
      </p>
      <p>
        I live in SF with my fiancé. My favorite activities involve creating things - be it painting, coding, writing, or cooking. I believe in aligning incentives with transformation and that environmental sustainability won't come from deprivation. I believe that 'About Me' sections are hard and barely scratch the surface. Perhaps the most relevant thing to know about me, however, is that I am obsessed with learning new things and am always up for expanding my universe. Let's get in touch!
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
