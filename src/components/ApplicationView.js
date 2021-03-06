import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import StoreList from "./stores/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"
import SearchData from "./search/SearchData"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyManager from "../modules/CandyManager"
import TypeManager from "../modules/TypeManager"
import CandyDetail from "./candies/CandyDetails"
import StoreDetail from "./stores/StoreDetails"
import EmployeeDetail from './employees/EmployeeDetail';
import EmployeeForm from './employees/EmployeeForm';
import CandyForm from "./candies/CandyForm"
import Login from "./authentication/Login"
import EmployeeEditForm from "./employees/EmployeeEditForm"
import CandyEditForm from "./candies/CandyEditForm"

class ApplicationView extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials")

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

    addCandy = candy => {
        return CandyManager.post(candy)
            .then(() => CandyManager.getAll())
            .then(candies => this.setState({
                candies: candies
            }))
    }

    updateCandy = candy => {
        return CandyManager.put(candy)
            .then(() => CandyManager.getAll())
            .then(candies => this.setState({
                candies: candies
            }))
    }

    addEmployee = employee => {
        return EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    updateEmployee = employee => {
        return EmployeeManager.put(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/stores" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <StoreList stores={this.state.stores} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route exact path="/stores/:storeId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let store = this.state.stores.find(store =>
                        store.id === parseInt(props.match.params.storeId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!store) {
                        store = { id: 404, name: "404" }
                    }

                    return <StoreDetail store={store} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} employees={this.state.employees} locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees}
                        locations={this.state.stores} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404" }
                    }

                    return <EmployeeDetail employee={employee}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route
                    exact path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props} employees={this.state.employees} updateEmployee={this.updateEmployee} locations={this.state.stores} />
                    }}
                />
                <Route exact path="/candy" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CandyList {...props} deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route exact path="/candy/new" render={(props) => {
                    return <CandyForm {...props}
                        addCandy={this.addCandy}
                        candyType={this.state.candyTypes}
                        candies={this.state.candies} />
                }} />
                <Route exact path="/candy/:candyId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let candy = this.state.candies.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!candy) {
                        candy = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <CandyDetail candy={candy}
                        deleteCandy={this.deleteCandy} />
                }} />
                <Route
                    path="/candy/:candyId(\d+)/edit" render={props => {
                        return <CandyEditForm {...props} candies={this.state.candies} updateCandy={this.updateCandy} candyTypes={this.state.candyTypes}/>
                    }}
                />
                <Route path="/search" render={(props) => {
                    return <SearchData />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationView)