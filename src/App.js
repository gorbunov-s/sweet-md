import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Menu from "./Components/Menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        
        <Route exact path="/" component={CommonComponent} />
        <Route path="/about" component={CommonComponent} />
        <Route path="/topics" component={CommonComponent} />
        <Route path="/tolstovki/" component={CommonComponent} />
        <Route path="/svitera/" component={CommonComponent} />
        <Route path="/delivery/" component={CommonComponent} />
        <Route path="/contacts/" component={CommonComponent} />
      </div>
    </Router>
  );
}

// TODO: Temporary component. Should be deleted.
function CommonComponent ({ match }) {
  function createHeader () {
    return match.url.slice(1);
  }
  
  return(
    <h1 className={'header'}>{createHeader()}</h1>
  )
}

export default App;
