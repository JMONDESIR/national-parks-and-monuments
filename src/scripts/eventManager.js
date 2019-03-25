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
