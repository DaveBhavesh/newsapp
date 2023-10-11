import "./App.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize = 6 ;
  
  const apiKey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);


    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress}/>

        <Routes>
        
        <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} country='in' category='General' api={apiKey}/>}/> 
        <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={6} country='in' category='Business' api={apiKey}/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} country='in' category='Entertainment' api={apiKey}/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} country='in' category='Health' api={apiKey}/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} country='in' category='Science' api={apiKey}/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} country='in' category='Sports' api={apiKey}/>}/>
        <Route exact path="/tech" element={<News setProgress={setProgress} key="technology" pageSize={6} country='in' category='Technology' api={apiKey}/>}/>
        
        </Routes>
        </Router>

      </div>
    );
  
}

export default App;
