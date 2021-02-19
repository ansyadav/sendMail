import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComp from './components/HeaderComp';
import LoginPageComp from './components/LoginPageComp';
import FooterComp from './components/FooterComp';
import './styles/main.scss';

function App(){
  return (
    <div className="wrapper">
        <HeaderComp />
        <LoginPageComp />
        <FooterComp />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
if (module.hot) {
  module.hot.accept()
}