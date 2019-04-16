import { Route } from 'react-router-dom'
import React, { Component } from "react"
// import { withRouter } from 'react-router-dom'
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"
import SearchData from "./search/SearchData"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyManager from "../modules/CandyManager"
import TypeManager from "../modules/TypeManager"

class ApplicationView extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        LocationManager.getAll()
        .then(stores => newState.stores = stores)
        .then(() => EmployeeManager.getAll())
        .then(employees => newState.employees = employees)
        .then(() => TypeManager.getAll())
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => CandyManager.getAll())
        .then(candies => newState.candies = candies)
        .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        return CandyManager.delete(id)
        .then(() => CandyManager.getAll())
        .then(candies => this.setState({
            candies: candies
        }))
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
                <Route path="/candy" render={(props) => {
                    return <CandyList deleteCandy={this.deleteCandy}candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchData />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationView