// Function to open Amazon file

function openLanguageAmaz() {
  window.open("index.html", "_blank");
}

// Adding click event listener to the element with class "language"
document.addEventListener("DOMContentLoaded", function() {
  var indElement = document.querySelector(".ind-btn");
  indElement.addEventListener("click", openLanguageAmaz);
});