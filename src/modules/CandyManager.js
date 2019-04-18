const baseURL = "http://localhost:5002/candiesFromAPI"

export default {
    get(id) {
        return fetch(`${baseURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(baseURL).then(r => r.json())
    },

    delete(id) {
        return fetch(`${baseURL}/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    },
    post(candy) {
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(candy)
        }).then(r => r.json())
    }
}