import React, { Component } from "react";
import MaterialTable from "material-table";
import ReactCountdownClock from "react-countdown-clock";

import { headers, data } from "./data";
import worker from "./worker.js";
import WebWorker from "./workerSetup";

// const Index = () => {
//   useEffect(() => {
//     thisWorker = new WebWorker(worker);
//   }, [])
//   return (
//   <div className="flex--centre">
//     <button onClick={() => exporter} />

//     <MaterialTable
//       columns={[
//         { title: 'Adı', field: 'name' },
//         { title: 'Soyadı', field: 'surname' },
//         { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
//         { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
//       ]}
//       data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
//       title="Demo Title"
//     />
//   </div>
// );

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  // fetchUsers = () => {
  //   const users = [];

  //   const userDetails = {
  //     name: "Jane Doe",
  //     email: "jane.doe@gmail.com",
  //     id: 1
  //   };

  //   for (let i = 0; i < 10000000; i++) {
  //     userDetails.id = i++;
  //     userDetails.dateJoined = Date.now();

  //     users.push(userDetails);
  //   }

  //   this.setState({
  //     count: users.length
  //   });
  // };

  fetchWebWorker = () => {
    this.worker.postMessage("Fetch Users");
    this.worker.addEventListener("message", event => {
      console.log(event);

      this.setState({
        count: event.data.length
      });
    });
  };

  componentDidMount = () => {
    this.worker = new WebWorker(worker);
  };

  render() {
    return (
      <div style={{ margin: "2rem" }}>
        <p className="text-center">Total User Count: {this.state.count}</p>
        <button className="btn-worker" onClick={this.fetchWebWorker}>
          Fetch Users with Web Worker
        </button>

        <section>
          <MaterialTable
            columns={headers}
            data={data}
            title="CSV export in Webworker"
          />
        </section>
      </div>
    );
  }
}

export default Index;
