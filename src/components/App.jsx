import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import style from '../style/app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.app}>
        <span className={style.side}>
          <Nav />
        </span>
        <span className={style.main}>
          <Route
            exact
            path="/"
            render={() => (
              <Landing />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About />
            )}
          />
        </span>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;