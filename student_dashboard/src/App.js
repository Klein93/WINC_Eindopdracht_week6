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
import Diagram from "./Diagram"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar
    }
    this.getEvaluationsByStudentName = this.getEvaluationsByStudentName.bind(this)
    this.getAllEvaluations = this.getAllEvaluations.bind(this)
  }

  getAllEvaluations() {
    this.setState({
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar
    })
  }

  getEvaluationsByStudentName(studentname) {
    const moeilijkEvaluaties = [];
    const leukEvaluaties = [];
    const objectsFilteredByName = evaluationData.filter(object => object.naam == studentname);
    objectsFilteredByName.forEach(item => {
      const newMoeilijkEvaluation = {
        x: item.opdracht,
        y: item.moeilijk
      }
      moeilijkEvaluaties.push(newMoeilijkEvaluation)

      const newLeukEvaluation = {
        x: item.opdracht,
        y: item.leuk
      }
      leukEvaluaties.push(newLeukEvaluation)

    })
    this.setState({
      leukEvaluaties: leukEvaluaties,
      moeilijkEvaluaties: moeilijkEvaluaties
    })

    //console.log(moeilijkEvaluaties)
    //console.log(leukEvaluaties)
  }



  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home" onClick={() => this.getAllEvaluations()}>Home</Link>
              </li>
              <li>
                <Link to="/Evelyn" onClick={() => this.getEvaluationsByStudentName("Evelyn")}>evaluation of Evelyn</Link>
              </li>
              <li>
                <Link to="/Aranka" onClick={() => this.getEvaluationsByStudentName("Aranka")}>evaluation of Aranka</Link>
              </li>
              <li>
                <Link to="/Floris" onClick={() => this.getEvaluationsByStudentName("Floris")}>evaluation of Floris</Link>
              </li>
              <li>
                <Link to="/Hector" onClick={() => this.getEvaluationsByStudentName("Hector")}>evaluation of Hector</Link>
              </li>
              <li>
                <Link to="/Martina" onClick={() => this.getEvaluationsByStudentName("Martina")}>evaluation of Martina</Link>
              </li>
              <li>
                <Link to="/Maurits" onClick={() => this.getEvaluationsByStudentName("Maurits")}>evaluation of Maurits</Link>
              </li>
              <li>
                <Link to="/Rahima" onClick={() => this.getEvaluationsByStudentName("Rahima")}>evaluation of Rahima</Link>
              </li>
              <li>
                <Link to="/Sandra" onClick={() => this.getEvaluationsByStudentName("Sandra")}>evaluation of Sandra</Link>
              </li>
              <li>
                <Link to="/Wietske" onClick={() => this.getEvaluationsByStudentName("Wietske")}>evaluation of Wietske</Link>
              </li>
              <li>
                <Link to="/Storm" onClick={() => this.getEvaluationsByStudentName("Storm")}>evaluation of Storm</Link>
              </li>

            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/home">
                <Home moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Evelyn">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />

              </Route>
              <Route path="/Aranka">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Floris">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Hector">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Martina">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Maurits">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Rahima">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Sandra">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Wietske">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
              <Route path="/Storm">
                <Diagram moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}


export default App;
