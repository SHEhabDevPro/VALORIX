// Function to toggle menu visibility and hamburger rotation
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('active'); // Toggle menu visibility
    hamburger.classList.toggle('active'); // Toggle hamburger rotation
}

// Function to navigate to home page
function goHome() {
    window.location.href = 'base.html';
}

// Add event listener to toggle menu on hamburger click when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        toggleMenu(); // Call the function to handle both menu and hamburger
    });
});

// Video control functions
function togglePlayPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleVolume() {
    var video = document.getElementById("myVideo");
    video.muted = !video.muted;
}

function toggleFullscreen() {
    var video = document.getElementById("myVideo");
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}

// Function to update the video timeline slider
function updateTimeline() {
    const video = document.getElementById('myVideo');
    const timeline = document.getElementById('timeline');

    video.addEventListener('timeupdate', () => {
        const value = (video.currentTime / video.duration) * 100;
        timeline.value = value;
    });
}

// Function to set the video time based on the slider
function setVideoTime() {
    const video = document.getElementById('myVideo');
    const timeline = document.getElementById('timeline');
    const newTime = (timeline.value / 100) * video.duration;
    video.currentTime = newTime;
}

// Initialize video timeline updates
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');

    // Set up the slider to change video time
    timeline.addEventListener('input', setVideoTime);
    updateTimeline(); // Start updating the slider with video time
});

// Handle fullscreen mode on video click
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('myVideo');

    // Enter fullscreen mode when the video is clicked
    videoElement.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            videoElement.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('muteButton').addEventListener('click', function () {
        var video = document.getElementById('myVideo');
        var scrollOffset = document.getElementById('scrollOffset'); // The hidden offset div

        // Mute the video
        video.muted = true;

        // Scroll to the hidden offset div
        scrollOffset.scrollIntoView({
            behavior: 'smooth'
        });

        // Hide the button after clicking
        this.classList.add('hide');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('muteButton').addEventListener('click', function () {
        var video = document.getElementById('myVideo');
        var scrollOffset = document.getElementById('scrollOffset');

        // Mute the video
        video.muted = true;

        // Scroll to the hidden offset div
        scrollOffset.scrollIntoView({
            behavior: 'smooth'
        });

        // Hide the button after clicking
        this.classList.add('hide');
    });
});


// maps.js

// Function to handle map click events
document.addEventListener('DOMContentLoaded', function () {
    const mapCards = document.querySelectorAll('.map-card');

    mapCards.forEach(card => {
        card.addEventListener('click', function () {
            const mapName = this.getAttribute('data-map');  // Get the data-map attribute
            window.location.href = `inside_maps/${mapName}.html`;  // Redirect to the appropriate HTML file in the 'maps' folder
        });
    });
});

// Home button click handler
function goHome() {
    window.location.href = '/base.html';
}

// Draggable functionality
const draggables = document.querySelectorAll('.draggable');
const map = document.getElementById('map');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
        const x = e.clientX - map.getBoundingClientRect().left;
        const y = e.clientY - map.getBoundingClientRect().top;
        draggable.style.position = 'absolute';
        draggable.style.left = `${x}px`;
        draggable.style.top = `${y}px`;
        draggable.classList.remove('dragging');
    });
});

map.addEventListener('dragover', (e) => {
    e.preventDefault();
});



function setPlayerName() {
    const nameInput = document.getElementById('playerName').value;
    const playerDivs = document.querySelectorAll('.player');

    playerDivs.forEach((playerDiv, index) => {
        if (index < playerDivs.length && nameInput) {
            playerDiv.textContent = nameInput + ' ' + (index + 1);
        }
    });
}

function setPlayerName() {
    const nameInput = document.getElementById('playerName').value;
    const selectedPlayer = document.getElementById('playerSelect').value;

    if (nameInput) {
        const playerDiv = document.getElementById(selectedPlayer);
        playerDiv.textContent = nameInput; // Update the text to the new name
    }
}

