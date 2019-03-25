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

        return parkArticle
}
