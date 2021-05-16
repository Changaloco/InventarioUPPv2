import React from "react";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./context/UserContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/login/register";
import Dashboard from "./components/dashboard/Dashboard";
import Menu from "./pages/menuPage";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
      
      <Route exact path="/" component={Login} />
        <Switch>
        
          <Route path="/register" component={Register} />
          <Route path="/menu" component={Dashboard} />
          <Route path="/header" component={Menu}/>
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


