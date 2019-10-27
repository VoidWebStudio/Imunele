var swiper = new Swiper('.choosePrise-slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    width:500,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper2 = new Swiper('.ourWinners-slider', {
    slidesPerView:'auto',
    spaceBetween:70,
    loop: true,
    width: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper3 = new Swiper('.winPrise-slider', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    loop:true,
    touchRatio: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        380: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            loop: false,
            spaceBetween: 50,
            touchRatio: 0,
        },
    }
});
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="red";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

 if (viewportWidth <480) {
     swiper.destroy(false, true);
 }
