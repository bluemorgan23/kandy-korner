import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./employeeList.css"

class EmployeeList extends Component {

    render() {
        return (
            <React.Fragment>
                <h3>Employees</h3>
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Hire Employee
                </button>
                </div>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div className="card employeeCard" key={employee.id}>
                                <Link to={`/employees/${employee.id}`} className="nav-link">{employee.name}</Link>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.props.history.push(`/employees/${employee.id}/edit`);
                                    }}
                                >Edit</button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList