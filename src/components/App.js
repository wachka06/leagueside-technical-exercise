import React, { Component } from "react";
import "../css/App.css";
import sponsors from "../data.json";
import Form from "./Form";
import Sponsors from "./Sponsors";

class App extends Component {
  state = {
    sponsors: [],
    filteredSponsors: [],
    latitudeInput: "",
    longitudeInput: "",
    radiusInput: "",
    budgetInput: "",
  };

  componentDidMount = () => {
    this.setState({ sponsors });
  };

  handleChange = (e) => {
    let input = e.target.value;
    let inputName = e.target.name + "Input";
    this.setState({ [inputName]: input });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let insideRadius = [];
    this.state.sponsors.forEach((sponsor) => {
      let latitude = parseFloat(sponsor.latitude);
      let longitude = parseFloat(sponsor.longitude);
      let radiusInput = parseFloat(this.state.radiusInput);
      if (radiusInput <= Math.sqrt(latitude ^ (2 + longitude) ^ 2) * 68) {
        return insideRadius.push(sponsor);
      }
    });
    if (!insideRadius) {
      alert("There's no results inside the radius.");
    }
    let sortRadius = insideRadius.sort((a, b) => {
      let budgetA = parseFloat(a.budget);
      let budgetB = parseFloat(b.budget);
      let budgetInput = parseFloat(this.state.budgetInput);
      return budgetA - budgetB;
    });
    let budgetInput = parseFloat(this.state.budgetInput);
    let total = 0;

    let filteredSponsors = [];
    let i = 0;
    while (total <= budgetInput) {
      let budget = sortRadius[i].budget;
      total += budget;
      filteredSponsors.push(sortRadius[i]);
      i++;
    }
    let radiusInput = parseFloat(this.state.radiusInput);
    if (!filteredSponsors) {
      alert("There's no results inside the budget.");
    }
    this.setState({ filteredSponsors });
  };

  render() {
    return (
      <div className="app">
        <h3>FIND LEAGUES TO SPONSOR</h3>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          latitudeInput={this.state.latitudeInput}
          longitudeInput={this.state.longitudeInput}
          radiusInput={this.state.radiusInput}
          budgetInput={this.state.budgetInput}
        />
        <Sponsors
          sponsors={
            this.state.filteredSponsors ? this.state.filteredSponsors : null
          }
        />
      </div>
    );
  }
}

export default App;
