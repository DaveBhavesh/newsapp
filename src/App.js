import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Routes>
        
        <Route exact path="/" element={<News pageSize={6} country='in' category='General' api='247b90a7f84b4a409105db57e9a3d601'/>}/> 
        <Route exact path="/business" element={<News  key="business" pageSize={6} country='in' category='Business' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country='in' category='Entertainment' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        <Route exact path="/health" element={<News key="health" pageSize={6} country='in' category='Health' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        <Route exact path="/science" element={<News key="science" pageSize={6} country='in' category='Science' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={6} country='in' category='Sports' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        <Route exact path="/tech" element={<News key="technology" pageSize={6} country='in' category='Technology' api='247b90a7f84b4a409105db57e9a3d601' />}/>
        
        </Routes>
        </Router>

      </div>
    );
  }
}
