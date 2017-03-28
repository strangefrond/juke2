import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';


ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/Albums" component={Albums} />
        <Route path="/Album/:albumId" component={Album} />
        <IndexRedirect to="/Albums" />
      </Route>
    </Router>
  </div>,
document.getElementById('app')
);
