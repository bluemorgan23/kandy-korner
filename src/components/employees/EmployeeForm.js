import React, { Component } from "react"

export default class EmployeeForm extends Component {
    state = {
        employeeName: "",
        phoneNumber: "",
        locationId: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
    }

    constructNewEmployee = (event) => {
        event.preventDefault()

        if (this.state.location === "") {
            window.alert("Please select a location")
        } else {
            const employee = {
                name: this.state.employeeName,
                phoneNumber: this.state.phoneNumber,
                location: parseInt(this.state.locationId)
            }

            this.props.addEmployee(employee)
                .then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to Location</label>
                        <select
                            defaultValue=""
                            name="location"
                            id="locationId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a location</option>
                            {this.props.locations.map(l => (
                                <option key={l.id} id={l.id} value={l.id}>
                                    {l.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        )
    }
}