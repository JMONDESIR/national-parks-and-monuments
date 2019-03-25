const buildElement = (elementType, elementId, elementTextContent) => {
        let htmlElement = document.createElement(elementType);
        if (elementId) {
                htmlElement.setAttribute("id", elementId);
        }
        htmlElement.textContent = elementTextContent;
        return htmlElement;
};

const clearElement = domElement => {
        while (domElement.firstChild) {
                domElement.removeChild(domElement.firstChild);
        }
};

const displayContainer = document.querySelector("#display-container");

const parkContainer = document.createElement("div")
parkContainer.classList = "columnContainer"
const monumentContainer = document.createElement("div")
monumentContainer.classList = "columnContainer"

const parkHeader = document.createElement("h1")
const monumentHeader = document.createElement("h1")
parkHeader.textContent = "National Parks"
monumentHeader.textContent = "National Monuments"

displayContainer.appendChild(parkContainer)
displayContainer.appendChild(monumentContainer)
parkContainer.appendChild(parkHeader)
monumentContainer.appendChild(monumentHeader)
parkContainer.appendChild(buildElement("section", "national--parks"));
monumentContainer.appendChild(buildElement("section", "national--monuments"));
