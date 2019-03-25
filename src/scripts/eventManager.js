const parkDelete = () => {
        console.log("delete button clicked", event.target.parentNode.id.split("--")[1]);
        let parkId = event.target.parentNode.id.split("--")[1];
        console.log(parkId)
        deletePark(parkId)
                .then(() => listNationalParks())
};

const monumentDelete = () => {
        console.log("delete button clicked", event.target.parentNode.id.split("--")[1]);
        let monumentId = event.target.parentNode.id.split("--")[1];
        console.log(monumentId)
        deleteMonument(monumentId)
                .then(() => listNationalParks())
};

const parkEdit = () => {
        const parkID = event.target.parentNode.id.split("--")[1]
        console.log(parkID)
        const parkArticle = document.querySelector(`#park--${parkID}`);
        clearElement(parkArticle);

        getPark(parkID).then(parkToEdit => {
                console.log(parkToEdit)
                const editFormForPark = parkEditForm(parkToEdit);
                parkArticle.appendChild(editFormForPark);
        });
}

const monumentEdit = () => {
        console.log("edit button clicked")
        const monumentID = event.target.parentNode.id.split("--")[1]
        console.log(monumentID)
        const monumentArticle = document.querySelector(`#monument--${monumentID}`);
        clearElement(monumentArticle);

        getMonument(monumentID).then(monumentToEdit => {
                console.log(monumentToEdit)
                const editFormForMonument = monumentEditForm(monumentToEdit);
                monumentArticle.appendChild(editFormForMonument);
        });
}

const handleParkUpdate = () => {
        const parkID = event.target.parentNode.id.split("--")[1]
        console.log(parkID)
        const editedParkName = document.querySelector(`#editPark--${parkID}`);
        const editedParkState = document.querySelector(`#editState--${parkID}`);
        console.log(editedParkName.value, editedParkState.value)

        let updatedParkObject = {
                name: editedParkName.value,
                state: editedParkState.value,
        };

        patchPark(parkID, updatedParkObject).then(() => listNationalParks());
}

const handleMonumentUpdate = () => {
        const monumentID = event.target.parentNode.id.split("--")[1]
        console.log(monumentID)
        const editedMonumentName = document.querySelector(`#editMonument--${monumentID}`);
        const editedMonumentState = document.querySelector(`#monumentState--${monumentID}`);
        console.log(editedMonumentName.value, editedMonumentState.value)

        let updatedMonumentObject = {
                name: editedMonumentName.value,
                state: editedMonumentState.value
        };

        patchMonument(monumentID, updatedMonumentObject).then(() => listNationalParks());
}