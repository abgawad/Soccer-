<script src="Soccer.js">document.addEventListener("DOMContentLoaded", function() {
    // DOMContentLoaded event ensures that the HTML is fully loaded before executing JavaScript

    // Get the form element
    var soccerForm = document.querySelector('form');

    // Add a submit event listener to the form
    soccerForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Log a message to the console
        console.log('Form submitted! You can add more functionality here.');
    });
});
// Soccer.js

document.addEventListener("DOMContentLoaded", function() {
// DOMContentLoaded event ensures that the HTML is fully loaded before executing JavaScript

// Get all player cards
var playerCards = document.querySelectorAll('.player-card');

// Add a click event listener to each player card
playerCards.forEach(function(card) {
    card.addEventListener('click', function() {
        changeCardColor(card);
    });
});

// Get the team logo
var teamLogo = document.querySelector('.team-logo');

// Add a click event listener to the team logo
teamLogo.addEventListener('click', function() {
    alert('You clicked on the team logo!');
});
});

// Function to change the background color of a player card
function changeCardColor(card) {
card.style.backgroundColor = 'lightblue';
}

</script>