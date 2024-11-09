function onOff() {
    const refrid = document.getElementById('refrid');
    if (refrid.style.display === 'none') {
        refrid.style.display = 'block';
    } else {
        refrid.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const refrid = document.getElementById('refrid');
    const img = document.createElement('img');
    img.src = 'fridge.png';
    img.alt = 'Original Image';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.id = 'originalImage';

    refrid.appendChild(img);
});


function shelf() {
    const refrid = document.getElementById('refrid');
    const shelfImage = document.getElementById('shelfImage');
    const originalImage = document.getElementById('originalImage');


    if (shelfImage) {
        refrid.removeChild(shelfImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {

        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'shelf.jpg';
        img.alt = 'Shelf Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'shelfImage';
        refrid.appendChild(img);
    }
}



function temp() {
    const refrid = document.getElementById('refrid');
    const tempImage = document.getElementById('tempImage');
    const originalImage = document.getElementById('originalImage');


    if (tempImage) {
        refrid.removeChild(tempImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {

        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'temp.webp';
        img.alt = 'Temp Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'tempImage';
        refrid.appendChild(img);
    }
}


function google() {
    const refrid = document.getElementById('refrid');
    const googleImage = document.getElementById('googleImage');
    const originalImage = document.getElementById('originalImage');


    if (googleImage) {
        refrid.removeChild(googleImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {

        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'google.png';
        img.alt = 'Google Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'googleImage';
        refrid.appendChild(img);
    }
}


function youtube() {
    const refrid = document.getElementById('refrid');
    const youtubeImage = document.getElementById('youtubeImage');
    const fridgeImage = document.getElementById('fridgeImage');


    if (youtubeImage) {
        refrid.removeChild(youtubeImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {

        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'youtube.png';
        img.alt = 'YouTube Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'youtubeImage';
        refrid.appendChild(img);
    }
}


function settings() {
    const refrid = document.getElementById('refrid');
    const settingImage = document.getElementById('settingImage');
    if (settingImage) {
        refrid.removeChild(settingImage);
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);
    } else {
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'settings.png';
        img.alt = 'Setting Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'settingImage';

        refrid.appendChild(img);
    }
}


let is24HourFormat = true; // Default format is 24-hour

// Function to update the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let period = '';

    
    if (!is24HourFormat) {
        // Convert hours to 12-hour format
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        if (hours === 0) hours = 12; // Handle midnight and noon
    }

   
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').textContent = timeString.trim();
}


function toggleFormat() {
    is24HourFormat = !is24HourFormat; 
    const button = document.getElementById('toggleFormatButton');
    if (is24HourFormat) {
        button.textContent = 'Switch to 12-Hour Format'; 
    } else {
        button.textContent = 'Switch to 24-Hour Format';
    }
    updateClock(); 
}


setInterval(updateClock, 1000);

updateClock();


document.getElementById('toggleFormatButton').addEventListener('click', toggleFormat);




function shoppingList() {
    const refrid = document.getElementById('refrid');
    const shoppingList = document.getElementById('shoppingList');
    const addItemButton = document.getElementById('addItemButton');
    const originalImage = document.getElementById('originalImage');

    if (shoppingList.style.display === 'none') {
        
        if (originalImage) {
            refrid.removeChild(originalImage);
        }

        
        shoppingList.style.display = 'block';

        if (!addItemButton) {
            const button = document.createElement('button');
            button.id = 'addItemButton';
            button.textContent = 'Add Item';
            button.onclick = addItem;
            refrid.appendChild(button);
        }
    } else {
        
        shoppingList.style.display = 'none';

        if (addItemButton) {
            addItemButton.remove();
        }

       
        if (!originalImage) {
            const img = document.createElement('img');
            img.src = 'fridge.png';
            img.alt = 'Original Image';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.id = 'originalImage';
            refrid.appendChild(img);
        }
    }
}

//add items to shopping list
function addItem() {
    const shoppingList = document.getElementById('shoppingList');
    const newItem = prompt("Enter a new item:");
    if (newItem) {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;

        // Allow items to be removed on click
        listItem.onclick = function () {
            shoppingList.removeChild(listItem);
        };

        shoppingList.appendChild(listItem);
    }
}

function tempDisplay() {
    let tempR = document.getElementById('tempR');
    if (tempR.style.display === 'none') {
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        tempR.style.display = 'block';
    } else {
        tempR.style.display = 'none';
        if (!originalImage) {
           
            const img = document.createElement('img');
            img.src = 'fridge.png'; 
            img.alt = 'Fridge Image';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.id = 'originalImage'; 
            refrid.appendChild(img);
        }
    }
}

let i = 35; // Temperature in Fahrenheit
let isFahrenheit = true; // Flag 

// Function to raise the temperature
function raise() {
    if (isFahrenheit) {
        
        if (i >= 40) {
            errorMessage.textContent = "Cannot go above 40°F (4.4°C)";
            return;
        } else {
            i++; 
        }
    } else {
       
        if (i >= 4.4) {
            errorMessage.textContent = "Cannot go above 4.4°C (40°F)";
            return;
        } else {
            i += 0.5556; 
        }
    }

    updateDisplay(); 
    errorMessage.textContent = ''; // Clear error message
}

// Function to lower the temperature
function lower() {
    // Check for Fahrenheit or Celsius
    if (isFahrenheit) {
        // Check if temperature is greater than 30°F, lower it
        if (i <= 30) {
            errorMessage.textContent = "Cannot go below 30°F (-1.1°C)";
            return;
        } else {
            i--; // Decrease the temperature by 1°F
        }
    } else {
        // If using Celsius
        if (i <= -1.1) {
            errorMessage.textContent = "Cannot go below -1.1°C (30°F)";
            return;
        } else {
            i -= 0.5556; // Decrease temperature by approx. 1°F in Celsius
        }
    }

    updateDisplay(); 
    errorMessage.textContent = ''; 
}

// Update the temperature display
function updateDisplay() {
    const displayNum = document.getElementById('displayNum');
    if (isFahrenheit) {
        displayNum.textContent = `${i} °F`; // Fahrenheit
    } else {
        displayNum.textContent = `${i} °C`; // Celsius
    }
}



function tvScreen() {
    const refrid = document.getElementById('refrid');
    const tvImage = document.getElementById('tvImage');
    const audioElement = document.createElement('audio');
    audioElement.src = 'yay.mp3';
    audioElement.id = 'audioElement'; 

    
    if (tvImage) {
        refrid.removeChild(tvImage); 

        
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);

        // Stop the audio when the TV is turned off
        audioElement.pause();
        audioElement.currentTime = 0;
    } else {
        if (originalImage) {
            refrid.removeChild(originalImage);
        }
        const img = document.createElement('img');
        img.src = 'tv.avif';
        img.alt = 'TV Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'tvImage';
        refrid.appendChild(img);

        
        audioElement.play();
    }


    refrid.appendChild(audioElement);
}


function musicPlayer() {
    const refrid = document.getElementById('refrid');
    const originalImage = document.getElementById('originalImage'); 

    const audioElement = document.createElement('audio');
    audioElement.src = 'ssj3.mp3'; 
    audioElement.id = 'audioElement';

    
    if (originalImage) {
        refrid.removeChild(originalImage); 

        
        refrid.appendChild(audioElement);
        audioElement.play(); 

        
        const stopButton = document.createElement('button');
        stopButton.textContent = 'Stop Audio';

        // Stop the audio when the Stop button is clicked
        stopButton.addEventListener('click', function () {
            audioElement.pause();
            audioElement.currentTime = 0; 
            refrid.removeChild(stopButton); 
        });

        
        refrid.appendChild(stopButton);
    } else {
        
        const img = document.createElement('img');
        img.src = 'fridge.png';
        img.alt = 'Original Image';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.id = 'originalImage';
        refrid.appendChild(img);

       
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }
}

function timer() {
    const refrid = document.getElementById('refrid');
    const originalImage = document.getElementById('originalImage');

    
    if (originalImage) {
        refrid.removeChild(originalImage);
    }

    const timerDiv = document.createElement('div');
    timerDiv.id = 'timerDiv';
    timerDiv.style.fontSize = '2em';
    timerDiv.style.textAlign = 'center';
    refrid.appendChild(timerDiv);

    let timeRemaining = 60; // Timer set 
    const timerInterval = setInterval(function() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDiv.textContent = `Countdown: ${formatTime(minutes)}:${formatTime(seconds)}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval); // Stop the timer
            playSound("iphone.mp3"); 
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = 'fridge.png'; 
                img.alt = 'Fridge Image';
                img.style.width = '100%';
                img.style.height = 'auto';
                img.id = 'originalImage';
                refrid.appendChild(img); 
                refrid.removeChild(timerDiv);
            }, 1000); 
        } else {
            timeRemaining--; 
        }
    }, 1000);
}


function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Play the sound when the timer ends
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}
