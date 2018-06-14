import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import style from '../style/nav.less';

const Nav = () => (
  <div className={style.nav}>
    <div>
      <h1 className={style.header}>
        <span className={style.first}>evaline </span>
        <span className={style.last}>bai</span>
      </h1>
      <h4 className={style.subheader}>Software Developer</h4>
    </div>
    <div>
      <ul className={style.list}>
        <li>
          <NavLink
            exact={true}
            to="/"
            activeClassName="selected"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            to="/about"
            activeClassName="selected"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            to="/portfolio"
            activeClassName="selected"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            to="/painting"
            activeClassName="selected"
          >
            PAINTING
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            to="/resume"
            activeClassName="selected"
          >
            RESUME
          </NavLink>
        </li>
      </ul>
    </div>
    <hr className={style.bar} />
    <div>
      <Contact />
    </div>
  </div>
);

export default Nav;