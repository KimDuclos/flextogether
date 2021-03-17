import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "./start-page.jsx";
import WelcomePage from "./welcome-page.jsx";
import WhoAreYou from "./who-are-you.jsx";
import TellMore from "./tell-more";
import Level from "./level.jsx";
import Calendar from "./calendar";
import Thanks from "./thanks.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={StartPage} />
        <Route path="/welcome-page" component={WelcomePage} />
        <Route path="/who-are-you" component={WhoAreYou} />
        <Route path="/tell-more" component={TellMore} />
        <Route path="/level" component={Level} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/thanks" component={Thanks} />
      </Router>
    </div>
  );
};

export default App;
