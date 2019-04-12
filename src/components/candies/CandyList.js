import React, { Component } from "react"


class CandyList extends Component {

    render() {
        return (

            <section className="content">
            <h3>Candy</h3>
            {
                this.props.candies.map(candy => 
                    <div key={candy.id}>
                        {candy.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList