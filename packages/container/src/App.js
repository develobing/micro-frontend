import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  );
};
