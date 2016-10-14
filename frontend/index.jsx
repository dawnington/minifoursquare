import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import hashHistory from 'react-router/lib/hashHistory';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import VenueDetail from './components/VenueDetail.jsx';

import MapStore from './stores/MapStore';
window.MapStore = MapStore;

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="venues/:id" component={VenueDetail} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(routes, root);
});
