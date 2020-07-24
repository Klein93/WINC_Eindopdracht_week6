import React from 'react';
import './App.css';
//import * as V from "victory";
import evaluationData from "./evaluationData"
//import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allAssignmentNames from "./allAsignmentNames"
import allStudentNames from "./allStudentNames"
import dataLeukBar from "./dataLeukBar"
import dataMoeilijkBar from "./dataMoelijkBar"
import Home from "./Home"
import Diagram from "./Diagram"
import DropMenu from "./DropMenu"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar,
      categories: allAssignmentNames
    }
    this.getEvaluationsByStudentName = this.getEvaluationsByStudentName.bind(this)
    this.getAllEvaluations = this.getAllEvaluations.bind(this)
    this.getStudentEvaluationsByAssignmentName = this.getStudentEvaluationsByAssignmentName.bind(this)
  }

  getAllEvaluations() {
    this.setState({
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar,
      categories: allAssignmentNames
    })
  }

  // componentDidMount() {
  //   this.getAllEvaluations()
  // }

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
      moeilijkEvaluaties: moeilijkEvaluaties,
      categories: allAssignmentNames
    })

  }

  getStudentEvaluationsByAssignmentName(event) {
    const moeilijkEvaluaties = [];
    const leukEvaluaties = [];
    const objectsFilteredByName = evaluationData.filter(object => object.opdracht === event.target.value);
    objectsFilteredByName.forEach(item => {
      const newMoeilijkEvaluation = {
        x: item.naam,
        y: item.moeilijk
      }
      moeilijkEvaluaties.push(newMoeilijkEvaluation)

      const newLeukEvaluation = {
        x: item.naam,
        y: item.leuk
      }
      leukEvaluaties.push(newLeukEvaluation)

    })
    this.setState({
      leukEvaluaties: leukEvaluaties,
      moeilijkEvaluaties: moeilijkEvaluaties,
      categories: allStudentNames
    })

  }


  render() {
    return (
      <div>
        <DropMenu getEvaluations={this.getStudentEvaluationsByAssignmentName} />
        <Router>
          <div>
            <nav>
              <ul className="navBar">
                <li>
                  <Link to="/home" onClick={() => this.getAllEvaluations()}>Home</Link>
                </li>
                <li>
                  <Link to="/Evelyn" onClick={() => this.getEvaluationsByStudentName("Evelyn")}>Evelyn</Link>
                </li>
                <li>
                  <Link to="/Aranka" onClick={() => this.getEvaluationsByStudentName("Aranka")}>Aranka</Link>
                </li>
                <li>
                  <Link to="/Floris" onClick={() => this.getEvaluationsByStudentName("Floris")}>Floris</Link>
                </li>
                <li>
                  <Link to="/Hector" onClick={() => this.getEvaluationsByStudentName("Hector")}>Hector</Link>
                </li>
                <li>
                  <Link to="/Martina" onClick={() => this.getEvaluationsByStudentName("Martina")}>Martina</Link>
                </li>
                <li>
                  <Link to="/Maurits" onClick={() => this.getEvaluationsByStudentName("Maurits")}>Maurits</Link>
                </li>
                <li>
                  <Link to="/Rahima" onClick={() => this.getEvaluationsByStudentName("Rahima")}>Rahima</Link>
                </li>
                <li>
                  <Link to="/Sandra" onClick={() => this.getEvaluationsByStudentName("Sandra")}>Sandra</Link>
                </li>
                <li>
                  <Link to="/Wietske" onClick={() => this.getEvaluationsByStudentName("Wietske")}>Wietske</Link>
                </li>
                <li>
                  <Link to="/Storm" onClick={() => this.getEvaluationsByStudentName("Storm")}>Storm</Link>
                </li>

              </ul>
            </nav>
            <main>
              <Switch>
                <Route path="/home">
                  <Home title="Student Dashboard Winc Academy" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Evelyn">
                  <Diagram title="evaluation Evelyn" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />

                </Route>
                <Route path="/Aranka">
                  <Diagram title="evaluation Aranka" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Floris">
                  <Diagram title="evaluation Floris" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Hector">
                  <Diagram title="evaluation Hector" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Martina">
                  <Diagram title="evaluation Martina" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Maurits">
                  <Diagram title="evaluation Maurits" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Rahima">
                  <Diagram title="evaluation Rahima" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Sandra">
                  <Diagram title="evaluation Sandra" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Wietske">
                  <Diagram title="evaluation Wietske" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Storm">
                  <Diagram title="evaluation Storm" categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
