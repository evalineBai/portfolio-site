import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import style from '../style/app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.app}>
        <span className={style['col-1-10']}>Left Nav</span>
        <span className={style['col-9-10']}>Content Box</span>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;