import React, { Component } from "react";
import Sponsor from "./Sponsor";

class Sponsors extends Component {
  renderSponsors = () => {
    return this.props.sponsors.map((sponsor) => (
      <Sponsor key={sponsor.id} name={sponsor.name} budget={sponsor.budget} />
    ));
  };

  render() {
    return (
      <table>
        {this.props.sponsors.length > 0 ? (
          <tbody>
            <tr>
              <th>Sponsor</th>
              <th>Budget</th>
            </tr>
            {this.renderSponsors()}
          </tbody>
        ) : null}
      </table>
    );
  }
}

export default Sponsors;
