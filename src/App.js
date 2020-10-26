import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import './assets/library/css/animate.css';
import './assets/library/css/grid.css';
import './styles/style.scss';
import './styles/fonts.scss';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
