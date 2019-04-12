import React, { Component } from "react";
import NavBar from "./nav/NavBar"
import ApplicationView from "./ApplicationView"

class KandyKorner extends Component {

    render() {
        return (
            <div className="content">
                <NavBar />
                <ApplicationView />
            </div>
        )
    }

}

export default KandyKorner
