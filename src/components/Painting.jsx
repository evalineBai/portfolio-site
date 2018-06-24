import React from 'react';
import style from '../style/painting.less';

const Painting = () => (
  <div className={style.artro}>
    <p>
      I like to paint when I have the time (although hard to come by) and have a fascination with portraiture. I'm available for commissions if you like rather illustrative images.
    </p>
    <div className={style.art}>
      <div className={style.one}/>
      <div className={style.two}/>
      <div className={style.three}/>
      <div className={style.four} />
      <div className={style.five} />
      <div className={style.six} />
    </div>
  </div>
);

export default Painting;