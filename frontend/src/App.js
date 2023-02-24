import LoginFormPage from "./components/LoginFormPage";
import React from "react";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
    <Switch>
      <Route exact path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
