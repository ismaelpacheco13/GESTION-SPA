import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Inicio from "./components/Inicio";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink exact to="/" className="btn btn-dark" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/login" className="btn btn-dark" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/dashboard" className="btn btn-dark" activeClassName="active">
            Dashboard
          </NavLink>
        </div>
        <hr />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Inicio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
