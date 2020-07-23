import React from 'react';
import './App.css';
//import * as V from "victory";
//import evaluationData from "./evaluationData"
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory";
import allAssignmentNames from "./allAsignmentNames"
import dataLeukBar from "./dataLeukBar"
import dataMoeilijkBar from "./dataMoelijkBar"




class App extends React.Component {
  constructor() {
    super()

  }


  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          width={800}
          height={3000}
          domainPadding={50}
          theme={VictoryTheme.material}
        >
          <VictoryGroup horizontal
            offset={10}
            style={{ data: { width: 6 } }}
            colorScale={["tomato", "gold"]}
          >
            <VictoryBar
              categories={{ x: allAssignmentNames }}
              data={dataLeukBar}

            />
            <VictoryBar
              categories={{ x: allAssignmentNames }}
              data={dataMoeilijkBar}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h2>Victory!</h2>
//       <VictoryBar />
//     </div>
//   );
// }

export default App;
