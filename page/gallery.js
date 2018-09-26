var leftBtn = document.getElementsByClassName("leftBtn"); //define the left right button
var rightBtn = document.getElementsByClassName("rightBtn");
var slidesIndex = 1; // building an arry index for the gallery
showSlides(slidesIndex);
var slides = document.getElementsByClassName("bigSlide");
var slidesLength = slides.length;

leftBtn[0].addEventListener("click", turnLeft); // activating the funciton when click Button
rightBtn[0].addEventListener("click", turnRight);

var smallSlides = document.getElementsByClassName("smallSlide");



for(var i=0;i<smallSlides.length;i++) {
    smallSlides[i].addEventListener("click", currentSlide.bind(null, i+1));
}


function currentSlide(n) {
    slidesIndex = n;
    showSlides(slidesIndex);
}







function turnLeft() {
    if (slidesIndex > 1) {
        showSlides(slidesIndex--);
    }
}

function turnRight() {
    if (slidesIndex < slidesLength) {
        showSlides(slidesIndex++);
    }
}


function showSlides(n) {

    /* variable defines inside the function because the for loop cant use global variable in the 2nd statement ie 'slides' inorder to get the .length I dont know why???? */
    var slides = document.getElementsByClassName("bigSlide");
    var Tslides = document.getElementsByClassName("smallSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < Tslides.length; i++) {
        Tslides[i].className = Tslides[i].className.replace(" active", "");
    }
    slides[slidesIndex - 1].style.display = "block";
    Tslides[slidesIndex - 1].className += " active";

}
