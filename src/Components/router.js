import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./home";
import DashBoard from "./dashBoard";


export default class Routers extends Component{
    render() {
        return (
           <Router>
              <div>
                 <h2>Routes Content</h2>
                 <hr/>
                 <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/dashBoard/:id' component={DashBoard}/>
                 </Switch>
              </div>
           </Router>
        );
     }
}