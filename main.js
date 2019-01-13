const slideList = [{
 img: "images/img1.jpg",
 text: 'Pierwszy tekst'
},
{
 img: "images/img2.jpg",
 text: 'Drugi tekst'
},
{
 img: "images/img3.jpg",
 text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = (process) => {
 if (process == undefined)
    process = 1;
 if (process == 1){
    active++;
 }else{
     active--;
 }

 if (active === slideList.length) {
    active = 0;
 }else if (active < 0) {
    active = slideList.length-1;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}

let myTimer = setInterval(changeSlide, time);

const keyChangeSlide = (key) =>{
    if (key.keyCode == 37 ){
        changeSlide(0);
        clearInterval(myTimer);
        myTimer = setInterval(changeSlide, time);
    }else if (key.keyCode == 39){
        changeSlide(1);
        clearInterval(myTimer);
        myTimer = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide)

