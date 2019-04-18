import React, { Component } from "react"
import {Link} from 'react-router-dom'
import "./candyList.css"

class CandyList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="candyButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/candy/new")}
                            }>
                        Add Candy
                    </button>
                </div>
                <section className="candy">
                <h3>Candy</h3>
                {
                    this.props.candies.map(candy => 
                        <div className="card" key={candy.id}>
                            <Link to={`/candy/${candy.id}`}>{candy.name}</Link>
                            {" "}of type{" "}
                        
                        {
                            this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId).name
                        }
                        <button className="btn btn-warning" type="button" onClick={() => {
                            this.props.history.push(`/candy/${candy.id}/edit`)
                        }}>Edit</button>
                        <button className="btn btn-danger"onClick={() => this.props.deleteCandy(candy.id)}>Delete</button>
                        </div>
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}

export default CandyList