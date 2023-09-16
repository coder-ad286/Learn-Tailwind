function menuClick() {
    var menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
    else {
menu.classList.add('hidden');
    }
}


// let currentSlideId = 1;

// sliderElement = document.getElementById('slider')
// totalSlides = sliderElement.childElementCount;


// function next() {
// if (currentSlideId < totalSlides)
// {
//     currentSlideId++;
//     showSlide();
// }

// }
// function prev(){
// if(currentId > 1)
// {
//     currentId--;
//     showSlide();
// }

// }

// function showSlide(){
//     let slides = document.getElementById('slider').getElementsByTagName('li')
//     for(let i = 0; i < totalSlides; i++){
//         let element = slides[i];
//         if(currentslideId==i+1){
//             element.classList.remove('hidden')
//         }
//         else
//         {
//             element.classList.add('hidden')
//         }
//     }
// }