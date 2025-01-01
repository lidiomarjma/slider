let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;

document.querySelector('.slider--width').style.width =`calc(100vw * ${totalSliders})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlider--;
    if (currentSlider < 0) {
        currentSlider = totalSliders - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlider++;
    if (currentSlider > (totalSliders)) {
        currentSlider = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlider * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `${newMargin}px`; 
}

setInterval(goNext, 2000);