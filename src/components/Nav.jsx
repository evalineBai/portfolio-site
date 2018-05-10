import React from 'react';
import { Navlink } from 'react-router-dom';
import Contact from './Contact';
import style from '../style/nav.less';

const Nav = () => (
  <div className={style.nav}>
    <div className={style.header}>
      <h1>
        <span className={style.first}>Evaline </span>
        <span className={style.last}>Bai</span>
      </h1>
    </div>
    <div>
      <ul className={style.list}>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Resume</li>
      </ul>
    </div>
    <hr className={style.bar}/>
    <div>
      <Contact />
    </div>
  </div>
);

export default Nav;