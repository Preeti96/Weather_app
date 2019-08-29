import React, { Component } from "react";

export default class extends Component {
  // state = {
  //   city: "",
  //   country: ""
  // };
  // handleChange = e => {
  //   // console.log("E---->", e.target.value);
  //   this.setState({
  //     city: e.target.value
  //   });
  // };

  // handleCountry = e => {
  //   // console.log("Country---->", e.target.value);
  //   this.setState({
  //     country: e.target.value
  //   });
// }
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="city..."
          // value={this.state.city}
          // onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          name="country"
          placeholder="country..."
          // value={this.state.country}
          // onChange={e => this.handleCountry(e)}
        />
        <button>Find Weather</button>
      </form>
    );
  }
}
