import React, { Component } from 'react'
import { Link } from "react-router-dom"

class StoreList extends Component {
    render(){
        return (
            <section className="content">
            <h3>Locations</h3>
            {
                this.props.stores.map(store => 
                    <div key={store.id}>
                        <Link className="nav-link" to={`/stores/${store.id}`}>{store.name}</Link>
                        {/* <p>{store.address}</p> */}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList