import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import SmallNav from './SmallNav';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Painting from './Painting';
import style from '../style/app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.app}>
        <SmallNav/>
        <div className={style.side}>
          <Nav/>
        </div>
        <div className={style.main}>
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
          <Route
            path="/portfolio"
            render={() => (
              <Portfolio />
            )}
          />
          <Route
            path="/painting"
            render={() => (
              <Painting />
            )}
          />
          <Route
            path="/resume"
            render={() => (
              <About />
            )}
          />
        </div>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;