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
      leukEvaluaties: "",
      moeilijkEvaluaties: "",
      categories: "",
      title: ""
    }
    this.getEvaluationsByStudentName = this.getEvaluationsByStudentName.bind(this)
    this.getAllEvaluations = this.getAllEvaluations.bind(this)
    this.getStudentEvaluationsByAssignmentName = this.getStudentEvaluationsByAssignmentName.bind(this)
  }

  getAllEvaluations() {
    this.setState({
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar,
      categories: allAssignmentNames,
      title: "Average Evaluations"
    })
  }

  componentDidMount() {
    this.getAllEvaluations()
  }

  getEvaluationsByStudentName(studentname) {
    const moeilijkEvaluaties = [];
    const leukEvaluaties = [];
    const objectsFilteredByName = evaluationData.filter(object => object.naam === studentname);
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
      categories: allAssignmentNames,
      title: studentname
    })

  }

  getStudentEvaluationsByAssignmentName(event) {
    const moeilijkEvaluaties = [];
    const leukEvaluaties = [];
    const assignmentName = event.target.value;
    const objectsFilteredByName = evaluationData.filter(object => object.opdracht === assignmentName);
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
      categories: allStudentNames,
      title: assignmentName
    })

  }


  render() {
    return (
      <div className="container">
        <h1>Winc Academy Student Dashboard</h1>
        <DropMenu getEvaluations={this.getStudentEvaluationsByAssignmentName} />
        <Router>
          <div>
            <nav>
              <h2>Main Menu</h2>
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
                  <Home title="Student Dashboard Winc Academy" title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Evelyn">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />

                </Route>
                <Route path="/Aranka">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Floris">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Hector">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Martina">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Maurits">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Rahima">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Sandra">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Wietske">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                <Route path="/Storm">
                  <Diagram title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
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
