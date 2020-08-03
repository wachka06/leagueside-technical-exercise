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
      let latDifference = latitude - this.state.latitudeInput;
      let longitude = parseFloat(sponsor.longitude);
      let longDifference = longitude - this.state.longitudeInput;
      let radiusInput = parseFloat(this.state.radiusInput);
      let dist = distance(
        latitude,
        longitude,
        this.state.latitudeInput,
        this.state.longitudeInput
      );
      if (dist <= radiusInput) {
        return insideRadius.push(sponsor);
      }
    });
    function distance(lat1, lon1, lat2, lon2, unit) {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
          dist = dist * 1.609344;
        }
        if (unit == "N") {
          dist = dist * 0.8684;
        }
        return dist;
      }
    }

    if (insideRadius.length === 0) {
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
    sortRadius.forEach((inRadius) => {
      total += parseFloat(inRadius.budget);
      if (total <= budgetInput) {
        filteredSponsors.push(inRadius);
      }
    });
    let radiusInput = parseFloat(this.state.radiusInput);
    if (filteredSponsors.length === 0) {
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
