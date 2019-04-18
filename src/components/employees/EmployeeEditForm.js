import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"

export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      employeeName: "",
      phoneNumber: "",
      locationId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()

      if (this.state.location === "") {
        window.alert("Please select a location");
      } else {
        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.employeeName,
          phoneNumber: this.state.phoneNumber,
          locationId: parseInt(this.state.locationId)
        };

    this.props.updateEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees"))      
    }
  }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,
          phoneNumber: employee.phoneNumber,
          locationId: employee.locationId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value = {this.state.employeeName}
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
                value = {this.state.phoneNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee">Assign to location</label>
              <select
                name="location"
                id="locationId"
                onChange={this.handleFieldChange}
                value = {this.state.locationId}
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
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}