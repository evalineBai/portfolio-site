import React from 'react';
import style from '../style/contact.less';

const Contact = () => (
  <div>
    <a href="mailto:evalinebai@gmail.com">
      <i className={`${style.icon} fas fa-envelope`} />
    </a>
    <a href="https://www.linkedin.com/in/evaline-bai/" target="_blank">
      <i className={`${style.icon} fab fa-linkedin`} />
    </a>
    <a href="https://github.com/evalineBai" target="_blank">
      <i className={`${style.icon} fab fa-github`} />
    </a>
    <a href="https://medium.com/@evalinebai" target="_blank">
      <i className={`${style.icon} fab fa-medium`} />
    </a>
    <a href="https://www.facebook.com/evalinejbai" target="_blank">
      <i className={`${style.icon} fab fa-facebook`} />
    </a>
    <a href="https://twitter.com/BaiEvaline" target="_blank">
      <i className={`${style.icon} fab fa-twitter`} />
    </a>
  </div>
);

export default Contact;