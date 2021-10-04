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
import Error from "./Components/Error/Error"
import Service from "./Components/Service/Service";
function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      {/* <Home></Home> */}

        <Switch>
          <Route path='/home'>
<Home></Home>
          </Route>

          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
