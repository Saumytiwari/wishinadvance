var myDate = new Date();
var greeting;

if (myDate.getHours() < 12) {
  greeting = "Good Morning! ☀️";
} else if (myDate.getHours() <= 17) {
  greeting = "Good Afternoon! 🌞";
} else {
  greeting = "Good Evening! 🌃";
}

document.getElementById("greeting").textContent = greeting;

// Play audio on any click
document.addEventListener('click', function() {
  document.getElementById("bg-music").play();
});

document.getElementById("click-me").addEventListener("click", function() {
  document.getElementById("message").style.display = "block";
});
