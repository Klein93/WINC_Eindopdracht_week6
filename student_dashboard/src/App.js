import React from 'react';
import './App.css';
//import * as V from "victory";
import evaluationData from "./evaluationData"
//import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import allAssignmentNames from "./allAsignmentNames"
import dataLeukBar from "./dataLeukBar"
import dataMoeilijkBar from "./dataMoelijkBar"
import Home from "./Home"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar
    }
  }

  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/Evelyn">evaluation of Evelyn</Link>
              </li>
              <li>
                <Link to="/Aranka">evaluation of Aranka</Link>
              </li>
              <li>
                <Link to="/Floris">evaluation of Floris</Link>
              </li>
              <li>
                <Link to="/Hector">evaluation of Hector</Link>
              </li>
              <li>
                <Link to="/Martina">evaluation of Martina</Link>
              </li>
              <li>
                <Link to="/Maurits">evaluation of Maurits</Link>
              </li>
              <li>
                <Link to="/Rahima">evaluation of Rahima</Link>
              </li>
              <li>
                <Link to="/Sandra">evaluation of Sandra</Link>
              </li>
              <li>
                <Link to="/Wietske">evaluation of Wietske</Link>
              </li>
              <li>
                <Link to="/Storm">evaluation of Storm</Link>
              </li>

            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/home">
                <Home moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Evelyn">
                <h2>evelyn</h2>
              </Route>
              <Route path="/Aranka">
                <h2>aranka</h2>
              </Route>
              <Route path="/Floris">
                <h2>floris</h2>
              </Route>
              <Route path="/Hector">
                <h2>hector</h2>
              </Route>
              <Route path="/Martina">
                <h2>martina</h2>
              </Route>
              <Route path="/Maurits">
                <h2>maurits</h2>
              </Route>
              <Route path="/Rahima">
                <h2>rahima</h2>
              </Route>
              <Route path="/Sandra">
                <h2>sandra</h2>
              </Route>
              <Route path="/Wietske">
                <h2>wietske</h2>
              </Route>
              <Route path="/Storm">
                <h2>storm</h2>
              </Route>


            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}


export default App;
