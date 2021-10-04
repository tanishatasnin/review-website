import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// _____ Imports all component ____ 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";

import Service from "./Components/Service/Service";
import Others from "./Components/Others/Others";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <div>
      {/* ____________________ start router ____________  */}
      <Router>
      <Header></Header>

        <Switch>
          
        
          <Route path='/home'>
<Home></Home>
          </Route>
          

          <Route path="/service">
            <Service></Service>
          </Route>
          {/* <Route path="*">
            <Error></Error>
          </Route> */}
          <Route path='/about'>
            <About></About>
          </Route>
          
          <Route path='/others'>
            <Others></Others>
          </Route>

          <Route exact path='/'>
  <Home></Home>
</Route>
<Route path="*">
        <NotFound></NotFound>
          </Route>
          
        </Switch>
        
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
