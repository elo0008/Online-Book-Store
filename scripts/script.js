function blinker() {
    var d = document.getElementById("blink");
    if (d) {
        d.style.color = (d.style.color === 'bisque' ? '#77441f' : 'bisque');
        setTimeout(blinker, 900); 
    }
}

window.onload = function() {
    blinker();
    startCountdown();
};

function startCountdown() {
    // Set the event date (YYYY, MM (0-based), DD, HH, MM, SS)
    var eventDate = new Date(2025, 3, 15, 10, 0, 0); // April 15, 2025, 10:00 AM

    function updateCountdown() {
        var now = new Date();
        var timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            clearInterval(timer);
            return;
        }

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Call immediately to show countdown without delay
    var timer = setInterval(updateCountdown, 1000);
}
