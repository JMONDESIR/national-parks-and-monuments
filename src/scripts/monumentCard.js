const MonumentCard = monument => {

        const monumentArticle = buildElement("article",`monument--${monument.id}`)
        monumentArticle.classList = "wrapper"
        monumentArticle.appendChild(buildElement("h3", undefined, monument.name))
        monumentArticle.appendChild(buildElement("p", undefined, monument.state))

        const deleteMonumentButton = document.createElement("button")
        deleteMonumentButton.classList = "deleteButton"
        deleteMonumentButton.textContent = "Delete Park"
        monumentArticle.appendChild(deleteMonumentButton)
        deleteMonumentButton.addEventListener("click", monumentDelete)
        return monumentArticle
      }