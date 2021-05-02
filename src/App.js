import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  *{
    font-family:"Roboto",sans-serif;
    box-sizing:border-box;
    padding:0;
    margin:0;
  }
  body{
    background-color:#f5f5f5
  }
`;

export default App;
