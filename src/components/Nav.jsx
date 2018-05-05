import React from 'react';
import { Navlink } from 'react-router-dom';
import Contact from './Contact';

const Nav = () => (
  <div>
    <div>
      Evaline Bai
    </div>
    <div>
      <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Resume</li>
      </ul>
    </div>
    <div>
      <Contact />
    </div>
  </div>
);

export default Nav;