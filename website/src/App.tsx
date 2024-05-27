import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Mission from "./Mission";
import About from "./About";
import Home from "./Home";
import "./App.css";

class App extends Component {
    render() {
        return (
            <HashRouter>
            <div className="App">
                <ul className="navigate" >
                    <NavLink className="navitem" to="/">Home</NavLink> 
                    <NavLink className="navitem" to="/mission" >Mission</NavLink> 
                    <NavLink className="navitem" to="/about" >About</NavLink> 
                    <NavLink className="navitem navright" to="/log">Log in</NavLink> 
                </ul>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/mission" element={<Mission />}/>
                        <Route path="/about" element={<About />}/>
                    </Routes>
                </div>
            </div>
            </HashRouter>
        )
    }
} 

export default App;
