import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import LoginPageComp from './components/LoginPageComp';
import RagisterComp from './components/RagisterComp';
import HomeComp from './components/HomeComp';
import ProductComp from './components/ProductComp';

import './styles/main.scss';

import './styles/main.scss';

function App() {
  return (
    <div className="wrapper">
      <HeaderComp />
      <Switch>
        <Route exact path="/" component={HomeComp}></Route>
        <Route path="/ragister" component={RagisterComp}></Route>
        <Route path="/login" component={LoginPageComp}></Route>
        <Route path="/product" component={ProductComp}></Route>
      </Switch>
      <FooterComp />
    </div>
  );
}
ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("app"));
if (module.hot) {
  module.hot.accept()
}