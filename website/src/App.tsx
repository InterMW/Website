import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./App.css";

class App extends Component {
    render() {
        return (
            <HashRouter>
            <div className="App">
                <ul className="navigate" >
                <li className="navitem"><NavLink to="/">Home</NavLink> </li>
                <li className="navitem"><NavLink to="/about">About</NavLink> </li>
                <li className="navitem navright"><NavLink to="/log">Log in</NavLink> </li>
                </ul>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}/>
                    </Routes>
                </div>
            </div>
            </HashRouter>
        )
    }
} 

export default App;
