const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`)
        .then(response => response.json())

const getPark = (parkID) => fetch(`${apiBaseUrl}/parks/${parkID}`)
        .then(response => response.json())

const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`)
        .then(response => response.json())

const getMonument = (monumentID) => fetch(`${apiBaseUrl}/monuments/${monumentID}`)
        .then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
        method: "DELETE"
})
const deleteMonument = (monumentId) => fetch(`${apiBaseUrl}/monuments/${monumentId}`, {
        method: "DELETE"
})

const patchPark = (parkID, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkID}`, {
        method: "PATCH",
        headers: {
                "content-type": "application/json"
        },
        body: JSON.stringify(updatedParkObject)
})

const patchMonument = (monumentID, updatedMonumentObject) => fetch(`${apiBaseUrl}/monuments/${monumentID}`, {
        method: "PATCH",
        headers: {
                "content-type": "application/json"
        },
        body: JSON.stringify(updatedMonumentObject)
})


