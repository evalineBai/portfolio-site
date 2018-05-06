import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import Medium from '@fortawesome/fontawesome-free-brands/faMediumM';
import Github from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import StackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import Envelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const Contact = () => (
  <div>
    <FontAwesomeIcon icon={Envelope} size="2x" />
    <FontAwesomeIcon icon={LinkedIn} size="2x" />
    <FontAwesomeIcon icon={Github} size="2x" />
    <FontAwesomeIcon icon={Medium} size="2x" />
    <FontAwesomeIcon icon={Facebook} size="2x" />
    <FontAwesomeIcon icon={StackOverflow} size="2x" />
    <FontAwesomeIcon icon={Twitter} size="2x" />
  </div>
);

export default Contact;