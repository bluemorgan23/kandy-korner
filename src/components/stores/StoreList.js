import React, { Component } from 'react'

class StoreList extends Component {
    render(){
        return (
            <section className="content">
            <h3>Locations</h3>
            {
                this.props.stores.map(store => 
                    <div key={store.id}>
                        {store.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList