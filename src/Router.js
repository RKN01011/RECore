import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import App from "./App"
import Kurs from "./components/kurs"


export default class castomRouter extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/user" component={Kurs}/>
            </Switch>


        </Router>
        )
    }

}