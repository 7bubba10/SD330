//fetches parking json file and populates the html file with lot info excluding space information
fetch('https://raw.githubusercontent.com/7bubba10/SD330/main/parking.json')
.then(response => response.json())
.then(data => {
    const lotsContainer = document.querySelector('#lots');
    lotsContainer.innerHTML = ''; // Clear any existing content in the container

    

    data.ParkingLots.forEach(lot => {
        const lotDiv = document.createElement('div');
        lotDiv.classList.add('lot');
        
        // Build the HTML for each lot
        let lotHTML = `
            <h2>${lot['Lot Name']}</h2>
            <ul>
                <li>Total Spaces: ${lot['Total Spaces']}</li>
                <li>Hours of Operation: ${lot['Hours of Operation']}</li>
                <li>Location: ${lot['location']}</li>
                <li>Lot Type: ${lot['Lot Type']}</li>
        `;

        // makes every link besides Foy link to 404
        let viewSpacesLink = "404.html"; 
        if (lot['Lot Name'] === "Foy") {
            viewSpacesLink = `spaces.html?lotId=${lot['Lot Name']}`;
        }

        lotHTML += `
                <li><a href="${viewSpacesLink}">View Spaces</a></li>
            </ul>
        `;

        // Do not show spaces for the "Foy" 
        if (lot['Lot Name'] !== "Foy") {
            lotHTML += `<p>No spaces available to view.</p>`;
        }

        lotDiv.innerHTML = lotHTML; // Add the HTML to the lotDiv
        
        lotsContainer.appendChild(lotDiv); // Append the newly created lot div to the container
    });
})
.catch(error => console.error('Error loading JSON:', error));
