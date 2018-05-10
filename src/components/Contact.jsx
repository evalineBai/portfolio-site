import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import Medium from '@fortawesome/fontawesome-free-brands/faMediumM';
import Github from '@fortawesome/fontawesome-free-brands/faGithub';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import StackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import Envelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import style from '../style/contact.less';

const Contact = () => (
  <div>
    <FontAwesomeIcon icon={Envelope} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={LinkedIn} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={Github} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={Medium} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={Facebook} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={StackOverflow} size="10px" className={style.icon} />
    <FontAwesomeIcon icon={Twitter} size="10px" className={style.icon} />
  </div>
);

export default Contact;