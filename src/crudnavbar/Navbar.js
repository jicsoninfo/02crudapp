import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTutorial from "../crudcomponents/AddTutorial";
import Tutorial from "../crudcomponents/Tutorial";
import TutorialList from "../crudcomponents/TutorialsList";
function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/tutorials" className="navbar-brand">
                    Home
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-tem">
                        <Link to="/tutorials" className="nav-link">
                            Tutorials
                        </Link>
                    </li>
                    <li className="nav-tem">
                        <Link to="/add" className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    {/* <Route path="/" element={<TutorialList/>}></Route> */}
                    <Route path="/tutorials" element={<TutorialList />}></Route>
                    <Route path="/add" element={<AddTutorial/>}></Route>
                    <Route path="/tutorials/:id" element={<Tutorial />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Navbar;