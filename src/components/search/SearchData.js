import React, { Component } from "react"


class SearchData extends Component {

    handleKeyDown(KeyboardEvent) {
        if (KeyboardEvent.key === "Enter"){
            console.log("test");
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.onSubmit}/>
            </div>

        )
    }
}

export default SearchData