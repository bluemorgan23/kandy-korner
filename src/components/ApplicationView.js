import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"


class ApplicationView extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/storesFromAPI")
        .then(r => r.json())
        .then(stores => newState.stores = stores)
        .then(() => fetch("http://localhost:5002/employeesFromAPI"))
        .then(r => r.json())
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/candyTypes"))
        .then(r => r.json())
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => fetch("http://localhost:5002/candiesFromAPI"))
        .then(r => r.json())
        .then(candies => newState.candies = candies)
        .then(() => this.setState(newState))
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