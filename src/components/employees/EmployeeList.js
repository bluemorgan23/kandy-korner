import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EmployeeList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
                <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Hire Employee
                </button>
            </div>
            <section className="content">
            <h3>Employees</h3>
            {
                this.props.employees.map(employee => 
                    <div key={employee.id}>
                        <Link to={`/employees/${employee.id}`} className="nav-link">{employee.name}</Link>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList