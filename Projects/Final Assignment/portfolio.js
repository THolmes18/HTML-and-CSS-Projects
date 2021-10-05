//these functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//function changed the slode when the left on right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//function changes the slide when the dots are clicked
function currentSlide (n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //takes all elements with the class name "mySlides" and stores them in the variable array
    var dots = document.getElementsByClassName("dot"); //all elements with "dot" and stores them in variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //if n (the number passed into the function) is greater than the length of the array "slides", the slidesIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n (number passed into the function) is less than 1, slideIndex is set to length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //loop takes each item in the array "slides" and sets the display to none
        }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //loops each item in the array 'dots; and removes 'active' which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //adds active styling to the dot associated with the image
}