// Set the countdown date (adjust this to your desired date)
var countdownDate = new Date("October 30, 2024 23:59:59").getTime();

// Function to update the countdown timer
function updateTimer() {
    var now = new Date().getTime(); // Get the current time
    var distance = countdownDate - now; // Calculate the distance between now and the countdown date

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id "sale-timer"
    document.getElementById("sale-timer").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " sec.";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(timerInterval); // Stop the timer
        document.getElementById("sale-timer").innerHTML = "The sale has ended!";
    }
}

// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);

// Initial call to display the countdown immediately
updateTimer();