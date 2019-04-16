import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SearchData from "../search/SearchData"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {

    // handleKeyDown(KeyboardEvent) {
    //     let currentList = [];
    //     let newList = [];

    //     if (KeyboardEvent.key === "Enter" && KeyboardEvent.target.value !== ""){
            
    //     } 

    // }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candy">Candy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <input type="text" onKeyDown={this.handleKeyDown}/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;