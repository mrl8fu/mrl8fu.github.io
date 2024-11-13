let darkMode = localStorage.getItem("darkMode") == "true";
    if(darkMode){
        toggleDarkMode(); //I'm assuming your page starts in light mode, so a call to toggle should switch everything over!
        document.getElementById("darkmode").checked = "true";
    }

    //new wrapper function
    const updateDarkMode = () => {
        darkMode = !darkMode; //invert our variable
        localStorage.setItem("darkMode", darkMode); //save it in local storage
        toggleDarkMode(); //now update our styles!
    }
    function toggleDarkMode() {
        document.body.classList.toggle("dark_mode");
    }

    window.onload = closeNav();
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    function formatDate(date) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedDate = formatter.format(date);
    return formattedDate.replace(/(\d{1,2})/, (day) => day + getOrdinalSuffix(day));
    }

    // Function to get the ordinal suffix (st, nd, rd, th)
    function getOrdinalSuffix(day) {
        const lastDigit = day % 10;
        const lastTwoDigits = day % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th';
        switch (lastDigit) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const today = new Date();
    document.getElementById('current-date').textContent = formatDate(today);

    // Subscribe Popup

    // Get the modal elements
var popup = document.getElementById("popupForm");
var thankYouPopup = document.getElementById("thankYouPopup");
var sideNav = document.getElementById("mySidebar")

// Get the buttons and close elements
var btn = document.getElementById("subscribeBtn");
var submitBtn = document.getElementById("submitBtn");
var span = document.getElementsByClassName("close-btn")[0]; // For closing the subscribe popup
var thankYouClose = document.getElementsByClassName("thank-you-close")[0]; // For closing the thank you popup

// When the user clicks the "Subscribe" link, open the subscribe popup
btn.onclick = function() {
    closeNav();
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