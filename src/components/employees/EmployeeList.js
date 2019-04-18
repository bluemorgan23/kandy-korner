import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EmployeeList extends Component {

    render() {
        return (
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
        )
    }
}

export default EmployeeList