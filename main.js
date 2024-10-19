// For language
 
 
    // Function to open the lan.html page
    function openLanguagePage() {
        window.open("lang.html", "_blank");
    }

    // Adding click event listener to the element with class "language"
    document.addEventListener("DOMContentLoaded", function() {
        var languageElement = document.querySelector(".language");
        languageElement.addEventListener("click", openLanguagePage);
    });
 

 
// Function to open Amazon file

function openLanguageAmaz() {
    window.open("index.html", "_blank");
}

// Adding click event listener to the element with class "language"
document.addEventListener("DOMContentLoaded", function() {
    var indElement = document.querySelector(".ind-btn");
    indElement.addEventListener("click", openLanguageAmaz);
});

// Function for sign in 

function openLanguageAmaz() {
    window.open("http://127.0.0.1:5500/Main%20Projects/login%20form/1index.html", "_blank");
  }
  
  // Adding click event listener to the element with class "language"
  document.addEventListener("DOMContentLoaded", function() {
    var signElement = document.querySelector(".signIn");
    signElement.addEventListener("click", openLanguageAmaz);
  });

// For language select in nav tag
function toggleLanguageList() {

    var listEn = document.getElementById("lEn");
    var list = document.getElementById("languageList");
    if (list.style.display === "none") {
        list.style.display = "block";
        listEn.style.display = "none";

    } else {
        list.style.display = "none";
    }
}

function selectLanguage() {
    var select = document.getElementById("languageSelect");
    var language = select.value;

}

// For swiping the image of the content

const slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    if (counter === slides.length) {
        counter = 0; // Reset counter to loop back to the first slide
    }
    slideImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Move counter to the last slide when going back from the first slide
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
 
function autoslide(){
    setInterval(()=>{
goNext();
    },10000)

}
autoslide();


// Special deal slider

// const Dealimg = document.querySelectorAll(".Tdeal");
const Dealimgs = document.querySelectorAll(".dealI");
const todayD = document.querySelector('.todayDeal');

let timeoutId;

Dealimgs.forEach(function (img) {
  img.addEventListener('mouseenter', function () {
    clearTimeout(timeoutId);        
    todayD.style.overflow = 'auto';
    todayD.style.transition = 'overflow 2.5s ease'; 
  });
 
  img.addEventListener('mouseleave', function () {
    clearTimeout(timeoutId); 
    timeoutId = setTimeout(() => {
      todayD.style.overflow = 'hidden';
      todayD.style.transition = 'overflow 2.5s ease';  
    }, 3000);  
  });
});




