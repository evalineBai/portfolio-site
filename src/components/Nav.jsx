import React from 'react';
import { Navlink } from 'react-router-dom';
import Contact from './Contact';
import style from '../style/nav.less';

const Nav = () => (
  <div className={style.nav}>
    <div>
      <h1 className={style.header}>
        <span className={style.first}>evaline </span>
        <span className={style.last}>bai</span>
      </h1>
    </div>
    <div>
      <ul className={style.list}>
        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>BLOG</li>
        <li>RESUME</li>
      </ul>
    </div>
    <hr className={style.bar} />
    <div>
      <Contact />
    </div>
  </div>
);

export default Nav;