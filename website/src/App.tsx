import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router";
import Mission from "./Mission";
import About from "./About";
import Device from "./Device";
import Home from "./Home";
import Login from "./Login";
import "./App.css";

class App extends Component {
    render() {
      var deviceTab = null;
      console.warn("hello");
      if (localStorage.getItem("key") != null) 
      {
        deviceTab = <NavLink className="navitem" to="/device" >Devices</NavLink> ;
      }
        return (
            <HashRouter>
            <div className="App">
                <ul className="navigate" >
                    <NavLink className="navitem" to="/">Home</NavLink> 
                    <NavLink className="navitem" to="/mission" >Mission</NavLink> 
                    <NavLink className="navitem" to="/about" >About</NavLink> 
                    {deviceTab}
                    <NavLink className="navitem navright" to="/log">Log in</NavLink> 
                </ul>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/mission" element={<Mission />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/device" element={<Device />}/>
                        <Route path="/log" element={<Login />}/>
                    </Routes>
                </div>
            </div>
            </HashRouter>
        )
    }
} 

export default App;
