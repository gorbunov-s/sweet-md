import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Route exact path="/" component={CommonComponent} />
      <Route path="/about" component={CommonComponent} />
      <Route path="/topics" component={CommonComponent} />
      <Route path="/catalog/" component={CommonComponent} />
      <Route path="/tolstovki/" component={CommonComponent} />
      <Route path="/svitera/" component={CommonComponent} />
      <Route path="/delivery/" component={CommonComponent} />
      <Route path="/contacts/" component={CommonComponent} />
    </main>
  );
}

// TODO: Temporary component. Should be deleted.
function CommonComponent({ match }) {
  function createHeader() {
    return match.url.slice(1) || "home";
  }

  return <h1 className="header">{createHeader()}</h1>;
}

export default App;
