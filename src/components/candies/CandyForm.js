import React, { Component } from "react"
import "./candyList.css"

export default class CandyForm extends Component {

    state = {
        candyName: "",
        candyTypeId: ""
    }

    handleFieldChange = event => {

        const stateToChange = {}

        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    constructNewCandy = event => {
        event.preventDefault()

        if (this.state.candyType === "") {
            window.alert("Please Select a Candy Type")
        } else {

            const candy = {
                name: this.state.candyName,
                candyTypeId: parseInt(this.state.candyTypeId)
            }

            this.props.addCandy(candy)
                .then(() => this.props.history.push("/candy"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            placeholder="Candy name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="candyType">Assign Candy Type</label>
                        <select
                            defaultValue=""
                            name="candyType"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a Type</option>
                            {this.props.candyType.map(candyType => (
                                <option key={candyType.id} id={candyType.id} value={candyType.id}>
                                    {candyType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewCandy}
                        className="btn btn-primary"
                    >
                        Submit
                </button>
                </form>
            </React.Fragment>
        );
    }
}