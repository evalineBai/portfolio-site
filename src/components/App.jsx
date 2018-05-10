import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import style from '../style/app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.app}>
        <span className={style['col-1-10']}>
          <Nav />
        </span>
        <span className={style['col-9-10']}>
          <Landing />
        </span>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;