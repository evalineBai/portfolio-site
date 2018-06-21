import React from 'react';
import style from '../style/portfolio.less';

const Portfolio = () => (
  <div className={style.portfolio}>
    <div>
      <h3>BlockBallot</h3>
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
      <h3>Meet Sean Mills!</h3>
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
      <h3>Cartblanched</h3>
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
      <h3>Locastore</h3>
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