import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"


class ApplicationView extends Component {
    storesFromAPI = [
        { id: 1, name: "Kandy North", address: "145 N Frontage Rd"},
        { id: 2, name: "Kandy South", address: "751 Chamonix Rd"}
    ];

    employeesFromAPI = [
        { id: 1, name: "Chris"},
        { id: 2, name: "Harry"},
        { id: 3, name: "Hannah"},
        { id: 4, name: "Mary"}
    ];

    candyTypes = [
        { id: 1, name: "Chocolate"},
        { id: 2, name: "Hard Candy"},
        { id: 3, name: "Gummies"}
    ];

    candiesFromAPI = [
        { id: 1, name: "Wonder Ball", candyTypeId: 1 },
        { id: 2, name: "Blow Pops", candyTypeId: 2 },
        { id: 3, name: "Gummy Bears", candyTypeId: 3 }
    ];

    state = {
        stores: this.storesFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypes,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationView