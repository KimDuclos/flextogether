import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import StartPage from "./start-page.jsx";
import WelcomePage from "./welcome-page.jsx";

class App extends Component {
  constructor() {
    super();
    this.state={};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={StartPage} />
          <Route path="/welcome-page" component={WelcomePage} />
        </Router>
      </div>
    );
  }
}
  
  

export default App;
