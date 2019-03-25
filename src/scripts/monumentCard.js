const MonumentCard = monument => {

        const monumentArticle = buildElement("article", `monument--${monument.id}`)
        const buttonHolder = document.createElement("div")
        buttonHolder.classList = "buttonHolder"
        monumentArticle.classList = "wrapper"
        monumentArticle.appendChild(buildElement("h3", undefined, monument.name))
        monumentArticle.appendChild(buildElement("p", undefined, monument.state))
        monumentArticle.appendChild(buttonHolder)

        const deleteMonumentButton = document.createElement("button")
        deleteMonumentButton.classList = "deleteButton"
        deleteMonumentButton.textContent = "Delete Park"
        buttonHolder.appendChild(deleteMonumentButton)
        deleteMonumentButton.addEventListener("click", monumentDelete)

        const editMonumentButton = document.createElement("button")
        editMonumentButton.classList = "editButton"
        editMonumentButton.textContent = "Edit"
        buttonHolder.appendChild(editMonumentButton)
        editMonumentButton.addEventListener("click", monumentEdit)
        return monumentArticle
}