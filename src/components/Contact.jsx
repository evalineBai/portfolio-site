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
    <a href="mailto:evalinebai@gmail.com">
      <FontAwesomeIcon icon={Envelope} size="12px" className={style.icon} />
    </a>
    <a href="https://www.linkedin.com/in/evaline-bai/" target="_blank">
      <FontAwesomeIcon icon={LinkedIn} size="12px" className={style.icon} />
    </a>
    <a href="https://github.com/evalineBai" target="_blank">
      <FontAwesomeIcon icon={Github} size="12px" className={style.icon} />
    </a>
    <a href="https://medium.com/@evalinebai" target="_blank">
      <FontAwesomeIcon icon={Medium} size="12px" className={style.icon} />
    </a>
    <a href="https://www.facebook.com/evalinejbai" target="_blank">
      <FontAwesomeIcon icon={Facebook} size="12px" className={style.icon} />
    </a>
    <a href="https://twitter.com/BaiEvaline" target="_blank">
      <FontAwesomeIcon icon={Twitter} size="12px" className={style.icon} />
    </a>
  </div>
);

export default Contact;