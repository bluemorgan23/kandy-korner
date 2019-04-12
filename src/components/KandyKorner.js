import React, { Component } from "react";
import StoreList from "./stores/StoreList";
import CandyList from "./candies/CandyList";
import EmployeeList from "./employees/EmployeeList";

class KandyKorner extends Component {

    storesFromAPI = [
        { id: 1, name: "Kandy North", address: "145 N Frontage Rd"},
        { id: 2, name: "Kandy South", address: "751 Chamonix Rd"}
    ];

    employeesFromAPI = [
        { id: 1, name: "Chris"},
        { id: 2, name: "Harry"},
        { id: 3, name: "Hannah"},
        { id: 4, name: "Mary"}
    ];

    candyTypesFromAPI = [
        { id: 1, type: "Chocolate"},
        { id: 2, type: "Hard Candy"},
        { id: 3, type: "Gummies"}
    ];

    candiesFromAPI = [
        { id: 1, name: "Wonder Ball", candyTypeId: 1 },
        { id: 2, name: "Blow Pops", candyTypeId: 2 },
        { id: 3, name: "Gummy Bears", candyTypeId: 3 }
    ];

    state = {
        stores: this.storesFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <div className="content">
                <h1>Kandy Korner</h1>
                <StoreList stores={this.state.stores}/>
                <EmployeeList employees={this.state.employees}/>
                <CandyList candies={this.state.candies}/>
            </div>
        )
    }

}

export default KandyKorner
