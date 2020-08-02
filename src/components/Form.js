import React, { Component } from "react";

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Latitude:
          <input
            type="text"
            name="latitude"
            value={this.props.latitudeInput}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            name="longitude"
            value={this.props.longitudeInput}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Radius:
          <input
            type="text"
            name="radius"
            value={this.props.radiusInput}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Total budget:
          <input
            type="text"
            name="budget"
            value={this.props.budgetInput}
            onChange={this.props.handleChange}
          />
        </label>
        <input className="submit" type="submit" value="search" />
      </form>
    );
  }
}

export default Form;
