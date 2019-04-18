import React, { Component } from "react"
import CandyManager from "../../modules/CandyManager"

export default class CandyEditForm extends Component {
    // Set initial state
    state = {
        candyName: "",
        candyTypeId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingCandy = evt => {
        evt.preventDefault()

        if (this.state.candyTypeId === "") {
            window.alert("Please select a Candy Type");
        } else {
            const editedCandy = {
                id: this.props.match.params.candyId,
                name: this.state.candyName,
                candyTypeId: parseInt(this.state.candyTypeId)
            };

            this.props.updateCandy(editedCandy)
                .then(() => this.props.history.push("/candy"))
        }
    }

    componentDidMount() {
        CandyManager.get(this.props.match.params.candyId)
            .then(candy => {
                this.setState({
                    candyName: candy.name,
                    candyTypeId: candy.candyTypeId
                });
            });
    }


    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            value={this.state.candyName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="candyTypeId">Assign Candy Type</label>
                        <select
                            name="candyTypeId"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}
                            value={this.state.candyTypeId}
                        >
                            <option value="">Select a candy Type</option>
                            {this.props.candyTypes.map(candyType => (
                                <option key={candyType.id} id={candyType.id} value={candyType.id}>
                                    {candyType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingCandy}
                        className="btn btn-primary"
                    >Submit</button>
                </form>
            </React.Fragment>
        );
    }
}