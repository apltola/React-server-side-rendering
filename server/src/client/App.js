import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';

import Header from './components/Header';

const App = ({ route }) =>
  <div style={app}>
    <header><Header /></header>
    {renderRoutes(route.routes)}
  </div>

const app = { fontFamily: 'sans-serif' }

export default {
  component: App,
  //destrcuture the dispatch method from store
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}