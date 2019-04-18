import React, { Component } from "react"

export default class StoreDetails extends Component {

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="stores">
                <div key={ this.props.store.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { this.props.store.name }
                        </h4>
                        <h6 className="card-title">{ this.props.store.address }</h6>
                        
                    </div>
                </div>
            </section>
        )
    }
}