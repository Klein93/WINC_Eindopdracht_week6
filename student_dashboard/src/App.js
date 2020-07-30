import React from 'react';
import './App.css';
import evaluationData from "./components/datafiles/EvaluationData"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allAssignmentNames from "./components/datafiles/AllAssignmentNames"
import allStudentNames from "./components/datafiles/AllStudentNames"
import dataLeukBar from "./components/datafiles/DataLeukBar"
import dataMoeilijkBar from "./components/datafiles/DataMoeilijkBar"
import Home from "./components/Home"
import Diagram from "./components/Diagram"
import DropMenu from "./components/DropMenu"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      leukEvaluaties: "",
      moeilijkEvaluaties: "",
      categories: "",
      title: "",
      linksPerStudent: "",

    }
    this.getEvaluationsByStudentName = this.getEvaluationsByStudentName.bind(this)
    this.getAllEvaluations = this.getAllEvaluations.bind(this)
    this.getStudentEvaluationsByAssignmentName = this.getStudentEvaluationsByAssignmentName.bind(this)
    this.getLinksPerStudent = this.getLinksPerStudent.bind(this)

  }

  getAllEvaluations() {
    this.setState({
      leukEvaluaties: dataLeukBar,
      moeilijkEvaluaties: dataMoeilijkBar,
      categories: allAssignmentNames,
      title: "Average Evaluations",

    })
  }

  componentDidMount() {
    this.getAllEvaluations()
    this.getLinksPerStudent()

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

  getLinksPerStudent() {
    const linksPerStudent = allStudentNames.map(studentName => {
      return (
        <li>
          <Link to={"/" + studentName} onClick={() => this.getEvaluationsByStudentName(studentName)}>{studentName}</Link>
        </li>
      )
    })
    this.setState({
      linksPerStudent: linksPerStudent
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
                {this.state.linksPerStudent}
              </ul>
            </nav>
            <main>
              <Switch>
                <Route path="/home">
                  <Home title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} />
                </Route>
                {/* <Routes title={this.state.title} categories={this.state.categories} moeilijkdata={this.state.moeilijkEvaluaties} leukdata={this.state.leukEvaluaties} /> */}
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
