const MonumentCard = monument => {

        const monumentArticle = buildElement("article", `monument--${monument.id}`)
        monumentArticle.classList = "wrapper"
        monumentArticle.appendChild(buildElement("h3", undefined, monument.name))
        monumentArticle.appendChild(buildElement("p", undefined, monument.state))

        const deleteMonumentButton = document.createElement("button")
        deleteMonumentButton.classList = "deleteButton"
        deleteMonumentButton.textContent = "Delete Park"
        monumentArticle.appendChild(deleteMonumentButton)
        deleteMonumentButton.addEventListener("click", monumentDelete)

        const editMonumentButton = document.createElement("button")
        editMonumentButton.classList = "editButton"
        editMonumentButton.textContent = "Edit"
        monumentArticle.appendChild(editMonumentButton)
        editMonumentButton.addEventListener("click", monumentEdit)

        if (monument.visited) {
                const visitedMonument = document.createElement("button")
                visitedMonument.textContent = "Visited"
                visitedMonument.classList = "visitButton"
                monumentArticle.appendChild(visitedMonument)
        }

        return monumentArticle
}

const monumentEditForm = (monumentObject) => {
        let editFormFragment = document.createDocumentFragment()

        const editNameLabel = document.createElement("label")
        editNameLabel.textContent = "Edit monument"
        const editName = document.createElement("input")
        editName.value = monumentObject.name
        editName.id = `editMonument--${monumentObject.id}`
        console.log(editName.id)

        const editStateLabel = document.createElement("label")
        editStateLabel.textContent = "Edit State"
        const editState = document.createElement("input")
        editState.value = monumentObject.state
        editState.id = `monumentState--${monumentObject.id}`
        console.log(editState.id)

        editFormFragment.appendChild(editNameLabel)
        editFormFragment.appendChild(editName)
        editFormFragment.appendChild(editStateLabel)
        editFormFragment.appendChild(editState)

        const updateMonumentButton = document.createElement("button")
        updateMonumentButton.classList = "updateParkButton"
        updateMonumentButton.textContent = "Save Changes"
        updateMonumentButton.addEventListener("click", handleMonumentUpdate)
        editFormFragment.appendChild(updateMonumentButton)

        return editFormFragment
}