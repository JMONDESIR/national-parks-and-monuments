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
}

const handleUpdate = () => {
        const parkID = event.target.parentNode.id.split("--")[1]
        console.log(parkID)
        const editedParkName = document.querySelector(`#editPark--${parkID}`);
        const editedParkState = document.querySelector(`#editState--${parkID}`);
        console.log(editedParkName.value, editedParkState.value)

        let updatedParkObject = {
                name: editedParkName.value,
                state: editedParkState.value
        };

        putPark(parkID, updatedParkObject).then(() => listNationalParks());
}