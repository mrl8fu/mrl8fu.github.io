// Get the modal elements
var popup = document.getElementById("popupForm");
var thankYouPopup = document.getElementById("thankYouPopup");

// Get the buttons and close elements
var btn = document.getElementById("subscribeBtn");
var submitBtn = document.getElementById("submitBtn");
var span = document.getElementsByClassName("close-btn")[0]; // For closing the subscribe popup
var thankYouClose = document.getElementsByClassName("thank-you-close")[0]; // For closing the thank you popup

// When the user clicks the "Subscribe" link, open the subscribe popup
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on the "X" for the subscribe popup, close it
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks the "Subscribe" button, close the subscribe popup, clear the email field, and open the thank you popup
submitBtn.onclick = function() {
    // Close the subscription popup
    popup.style.display = "none";
    
    // Clear the email field
    document.getElementById("email").value = "";
    
    // Open the thank you popup
    thankYouPopup.style.display = "block";
}

// Close the thank you popup when the "X" is clicked
thankYouClose.onclick = function() {
    thankYouPopup.style.display = "none";
}

// When the user clicks anywhere outside of either popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == thankYouPopup) {
        thankYouPopup.style.display = "none";
    }
}