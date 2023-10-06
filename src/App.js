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
        
        <Route exact path="/" element={<News pageSize={6} country='in' category='general' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/> 
        <Route exact path="/business" element={<News  key="business" pageSize={6} country='in' category='Business' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country='in' category='Entertainment' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/general" element={<News key="general" pageSize={6} country='in' category='General' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/health" element={<News key="health" pageSize={6} country='in' category='Health' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/science" element={<News key="science" pageSize={6} country='in' category='Science' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={6} country='in' category='Sports' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        <Route exact path="/tech" element={<News key="technology" pageSize={6} country='in' category='Technology' api='01aad7c3543a49c2b4b9ee1a4a14339f' />}/>
        </Routes>
        </Router>

      </div>
    );
  }
}
