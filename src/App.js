import React from "react";
import { Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path={["/", "/login", "/register"]}>
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <GlobalStyle />
    </div>
  );
}

export default App;
