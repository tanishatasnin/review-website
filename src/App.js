import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
