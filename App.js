import React from 'react';
import './App.css';
import Home from "./Home";
import Title1 from "./Title1";
import Title2 from "./Title2";
import Title3 from "./Title3";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/1" component={Title1} />
            <Route path="/2" component={Title2} />
            <Route path="/3" component={Title3} />
        </Router>
    );
  }
}

export default App;
