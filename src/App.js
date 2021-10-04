import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      {/* <Home></Home> */}

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
