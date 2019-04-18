const baseURL = "http://localhost:5002/employeesFromAPI"

export default {
    get(id) {
        return fetch(`${baseURL}/${id}`).then(r => r.json())       
    },

    getAll() {
        return fetch(baseURL).then(r => r.json())
    },
    post(employee) {
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(r => r.json())
    },
    put(employee) {
        return fetch(`${baseURL}/${employee.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(r => r.json())
    }
}