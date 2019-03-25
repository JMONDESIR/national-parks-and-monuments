const listNationalParks = () => {
        getAllParks().then(parksArray => {
                console.log("parksArray", parksArray)
                let nationParksFragment = document.createDocumentFragment();

                parksArray.forEach(park => {
                        let parkHtml = ParkCard(park);
                        nationParksFragment.appendChild(parkHtml);
                });

                const nationalParksSection = document.querySelector("#national--parks");
                clearElement(nationalParksSection)
                nationalParksSection.appendChild(nationParksFragment)
        });

        //=====================================================================//

        getAllMonuments().then(monumentArray => {
                console.log("Monument Array", monumentArray)
                let nationMonumentFragment = document.createDocumentFragment();

                monumentArray.forEach(monument => {
                        let monumentHtml = MonumentCard(monument);
                        nationMonumentFragment.appendChild(monumentHtml);
                });

                const nationalParksSection = document.querySelector("#national--monuments");
                clearElement(nationalParksSection)
                nationalParksSection.appendChild(nationMonumentFragment)
        });
};

