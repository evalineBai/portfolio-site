import React from 'react';
import style from '../style/portfolio.less';

const Portfolio = () => (
  <div className={style.portfolio}>
    <div>
      <h3>BlockBallot | <a href="http://blockballot.us/" target="_blank">blockballot.us</a></h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div>
        <h5>A voting platform built on the Ethereum network</h5>
      </div>
    </div>
    <hr/>
    <div>
      <h3>Meet Sean Mills | <a href="http://www.seanmills.website/" target="_blank">seanmills.website</a></h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div>
        <h5>A voting platform built on the Ethereum network</h5>
      </div>
    </div>
    <hr />
    <div>
      <h3>Cartblanched | <a href="https://cartblanched.herokuapp.com/" target="_blank">cartblanched.herokuapp.com</a></h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div>
        <h5>A voting platform built on the Ethereum network</h5>
      </div>
    </div>
    <hr />
    <div>
      <h3>Locastore | <a href="https://locastore.herokuapp.com/" target="_blank">locastore.herokuapp.com</a></h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div>
        <h5>A voting platform built on the Ethereum network</h5>
      </div>
    </div>
  </div>
);


export default Portfolio;