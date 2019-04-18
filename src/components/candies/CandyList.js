import React, { Component } from "react"
import {Link} from 'react-router-dom'

class CandyList extends Component {

    render() {
        return (

            <section className="content">
            <h3>Candy</h3>
            {
                this.props.candies.map(candy => 
                    <div key={candy.id}>
                        <Link className="nav-link" to={`/candy/${candy.id}`}>{candy.name}</Link>{" "}of type{" "}
                     
                    {
                        this.props.candyTypes.find(candyType => candyType.id === candy.candyTypeId).name
                    }
                    <button onClick={() => this.props.deleteCandy(candy.id)}>Delete</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList