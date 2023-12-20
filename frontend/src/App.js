import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from "./components/Modal";
import axios from "axios";
import LoginPage from './Pages/LoginPage';

function withNavigation(Component) {
  return props => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      MFREList: [],
      modal: false,
      activeItem: {
        buildingname: "", // for some reason react complained about the capitalized Name
        dealName: "",
        locationDescription: "",
        numApartmentUnits: 0,
        numParkingSpots: 0,
        parkingSpotsPerUnit: 0
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/MFRE/")
      .then((res) => this.setState({ MFREList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/MFRE/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/MFRE/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/MFRE/${item.id}/`)
      .then((res) => this.refreshList());
  };

  goToLoginPage = () => {
    const item = { buildingname: "", dealName: "", locationDescription: "", numApartmentUnits: 0, numParkingSpots: 0, parkingSpotsPerUnit: 0};

    // this.setState({ activeItem: item, modal: !this.state.modal }); from tutorial
    this.props.navigate('/login');
    
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // displayCompleted = (status) => {
  //   if (status) {
  //     return this.setState({ viewCompleted: true });
  //   }

  //   return this.setState({ viewCompleted: false });
  // };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayCompleted(true)}
          // className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
        >
          Created Models
        </span>
        {/* <span
          onClick={() => this.displayCompleted(false)}
          // className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
        >
          Incomplete
        </span> */}
      </div>
    );
  };

  renderItems = () => {
    // const { viewCompleted } = this.state;
    const newItems = this.state.MFREList
    // const newItems = this.state.MFREList.filter(
    //   (item) => item.locationDescription === viewCompleted
    // );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          // className={`MFRE-buildingname mr-2 ${
          //   this.state.viewCompleted ? "locationDescription-MFRE" : ""
          // }`}
          className={`MFRE-buildingname mr-2`}
          buildingname={item.dealName}
        >
          {item.buildingname}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
        <h1 className="text-black text-center my-4">Multifamily Real Estate Model app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.goToLoginPage}
                >
                  Navigate to Login Page
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default withNavigation(App);