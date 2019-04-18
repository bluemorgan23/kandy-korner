import React, { Component } from "react"

export default class EmployeeDetail extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { this.props.employee.name }
                        </h4>
                        <h6 className="card-title">{ this.props.employee.phoneNumber }</h6>
                        
                    </div>
                </div>
            </section>
        )
    }
}