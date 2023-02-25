import LoginFormPage from "./components/LoginFormPage";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello from App</h1>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>}

    </div>
  );
}

export default App;
