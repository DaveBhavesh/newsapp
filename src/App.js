import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} country='in' category='sports' api='247b90a7f84b4a409105db57e9a3d601' />
      </div>
    );
  }
}
