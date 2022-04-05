
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banks from "./routes/banks"
import Layout from "./routes/layout"
import Calc from "./routes/calculator"
import { useNavigate } from 'react-router';
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Layout/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banks/>}/>
            <Route path="/calc" element={<Calc/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
