import React from 'react';
import style from '../style/portfolio.less';

const Portfolio = () => (
  <div className={style.portfolio}>
    <div>
      <h3>
        BlockBallot | <a href="http://blockballot.us/" target="_blank">blockballot.us</a> | <a href="https://github.com/blockballot/blockballot" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div className={style.description}>
        <h5>A voting platform built on the Ethereum network</h5>
      </div>
    </div>
    <hr/>
    <div>
      <h3>
        Meet Sean Mills | <a href="http://www.seanmills.website/" target="_blank">seanmills.website</a> | <a href="https://github.com/evalineBai/smm-personal-site" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.four} />
        <div className={style.five} />
        <div className={style.six} />
      </div>
      <div className={style.description}>
        <h5>A pared-down personal site for a Caltech astronomer and cool dude</h5>
      </div>
    </div>
    <hr/>
    <div>
      <h3>
        Cartblanched | <a href="https://cartblanched.herokuapp.com/" target="_blank">cartblanched.herokuapp.com</a> | <a href="https://github.com/cartblanched/cartblanched" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.seven} />
        <div className={style.eight} />
        <div className={style.nine} />
      </div>
      <div className={style.description}>
        <h5>Automatically populate an online shopping cart and order groceries based on the ingredient lists of your favorite recipes</h5>
      </div>
    </div>
    <hr />
    <div>
      <h3>
        Locastore | <a href="https://locastore.herokuapp.com/" target="_blank">locastore.herokuapp.com</a> | <a href="https://github.com/Locastore/locastore" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.ten} />
        <div className={style.eleven} />
        <div className={style.twelve} />
      </div>
      <div className={style.description}>
        <h5>A platform to connect consumers to the locally-owned business ecosystems around them</h5>
      </div>
    </div>
  </div>
);


export default Portfolio;