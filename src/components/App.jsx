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
        Hello, It Me!
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;