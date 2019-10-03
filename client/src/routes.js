//Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

//Compponents
import App from './components/App';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';
import NoMatch from './components/pages/NoMatch';



const AppRoutes = () => 
  <App>
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
      <Route exact component={NoMatch} />
    </Switch>
  </App>;
    
export default AppRoutes;
