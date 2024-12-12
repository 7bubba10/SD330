// Fetch parking data from the JSON file
fetch('https://raw.githubusercontent.com/7bubba10/SD330/main/parking.json')
    .then(response => response.json())
    .then(data => {
        // Gets the ParkingSpaces container
        const parkingSpacesContainer = document.getElementById('parking-spaces-list');

        //Goes through each parking lot
        data.ParkingLots.forEach(lot => {
            // Create a heading for each lot
            const lotHeading = document.createElement('h2');
            lotHeading.textContent = lot['Lot Name'];
            parkingSpacesContainer.appendChild(lotHeading);

            // Access the correct property for spaces 
            const spaces = lot.Spaces || lot.spaces || [];  

            // Check if the lot has spaces
            if (spaces.length > 0) {
                // Iterate through each space in the lot
                spaces.forEach(space => {
                    // Create a box for each space
                    const spaceBox = document.createElement('div');
                    spaceBox.classList.add('space-box');

                    // Create and add Space ID
                    const spaceId = document.createElement('div');
                    spaceId.classList.add('space-id');
                    spaceId.textContent = `Space ID: ${space['Space ID']}`;
                    spaceBox.appendChild(spaceId);

                    // Create and add Status
                    const status = document.createElement('div');
                    status.classList.add('status');
                    if (space.status === 'Available') {
                        status.classList.add('available');
                        status.textContent = 'Status: Available';
                    } else if (space.status === 'Filled') {
                        status.classList.add('filled');
                        status.textContent = `Status: Filled (Filled Date: ${space['Filled Date and Time']})`;
                    } else if (space.status === 'Reserved') {
                        status.classList.add('reserved');
                        status.textContent = `Status: Reserved (Reserved Date: ${space['Reserved Date and Time']})`;
                    }
                    spaceBox.appendChild(status);

                    // Append the spaceBox to the container
                    parkingSpacesContainer.appendChild(spaceBox);
                });
            } else {
                // If no spaces, display a message
                const noSpacesMessage = document.createElement('p');
                noSpacesMessage.textContent = `No spaces available in ${lot['Lot Name']}`;
                parkingSpacesContainer.appendChild(noSpacesMessage);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching parking data:', error);
        const parkingSpacesContainer = document.getElementById('parking-spaces-list');
        parkingSpacesContainer.innerHTML = '<p>Failed to load parking data. Please try again later.</p>';
    });
