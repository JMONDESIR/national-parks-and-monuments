const ParkCard = park => {

        const parkArticle = buildElement("article", `park--${park.id}`)
        parkArticle.classList = "wrapper"
        parkArticle.appendChild(buildElement("h3", undefined, park.name))
        parkArticle.appendChild(buildElement("p", undefined, park.state))

        const deleteParkButton = document.createElement("button")
        deleteParkButton.classList = "deleteButton"
        deleteParkButton.textContent = "Delete Park"
        parkArticle.appendChild(deleteParkButton)
        deleteParkButton.addEventListener("click", parkDelete)

        const editParkButton = document.createElement("button")
        editParkButton.classList = "editButton"
        editParkButton.textContent = "Edit"
        parkArticle.appendChild(editParkButton)
        editParkButton.addEventListener("click", parkEdit)

        if (park.visited) {
                const visitedPark = document.createElement("button")
                visitedPark.textContent = "Visited"
                visitedPark.classList = "visitButton"
                parkArticle.appendChild(visitedPark)
        }

        return parkArticle
}

const parkEditForm = (parkObject) => {
        let editFormFragment = document.createDocumentFragment()

        const editNameLabel = document.createElement("label")
        editNameLabel.textContent = "Edit park name"
        const editName = document.createElement("input")
        editName.value = parkObject.name
        editName.id = `editPark--${parkObject.id}`
        console.log(editName.id)

        const editStateLabel = document.createElement("label")
        editStateLabel.textContent = "Edit State"
        const editState = document.createElement("input")
        editState.value = parkObject.state
        editState.id = `editState--${parkObject.id}`
        console.log(editState.id)

        editFormFragment.appendChild(editNameLabel)
        editFormFragment.appendChild(editName)
        editFormFragment.appendChild(editStateLabel)
        editFormFragment.appendChild(editState)

        const updateParkButton = document.createElement("button")
        updateParkButton.classList = "updateParkButton"
        updateParkButton.textContent = "Save Changes"
        updateParkButton.addEventListener("click", handleParkUpdate)
        editFormFragment.appendChild(updateParkButton)

        return editFormFragment
}
