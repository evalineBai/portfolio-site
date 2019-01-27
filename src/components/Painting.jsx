import React from 'react';
import style from '../style/painting.less';

const Painting = () => (
  <div className={style.artro}>
    <p>
      I like to paint when I have the time and have a fascination with portraiture. I'm available for commissions if you like illustrative, hyper-literal images.
    </p>
    <div className={style.art}>
      <div className={style.one}>
        <div className={style.title}>
          <h3>Ceremonial Dance</h3>
          <h5>oil on canvas</h5>
        </div>
      </div>
      <div className={style.two}>
        <div className={style.title}>
          <h3>Pagoda</h3>
          <h5>oil on canvas</h5>
        </div>
      </div>
      <div className={style.three}>
        <div className={style.title}>
          <h3>Grandpa</h3>
          <h5>acrylic on canvas</h5>
        </div>
      </div>
      <div className={style.four}>
        <div className={style.title}>
          <h3>Migrant Mother</h3>
          <h5>graphite on paper</h5>
        </div>
      </div>
      <div className={style.five}>
        <div className={style.title}>
          <h3>Primarily Mao</h3>
          <h5>acrylic on canvas</h5>
        </div>
      </div>
      <div className={style.six}>
        <div className={style.title}>
          <h3>Sean</h3>
          <h5>oil on canvas</h5>
        </div>
      </div>
    </div>
  </div>
);

export default Painting;