//Countdown code
//Set the date we are counting down to


/***********************************************************************
        EVENTS
***********************************************************************/

/***********************************************************************
        Load form select options with data from SS
************************************************************************
When the page loads, this code sends a request to a specific Google
WebApp to retrieve a list of "Servicios" that are appended to the
form select options
***********************************************************************/

$('#verAranceles').click(function (e) {
    $('.alertAranceles').css({ 'visibility': 'visible' })
})

$('#alertContainerCloseAranceles').click(function (e) {
    $('.alertAranceles').css({ 'visibility': 'hidden' })
})

$('#playStreaming').click(function (e) {
    $('.wrap-iframe').css({ 'display': 'block' })
    $('.streaming-play').css({ 'display': 'none' })
})




/***********************************************************************
        COUNTDOWN
************************************************************************
When the page loads, this code sends a request to a specific Google
WebApp to retrieve a list of "Servicios" that are appended to the
form select options
***********************************************************************/

var countDownDate = new Date("Nov 13, 2023, 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    //Get toda's
    var now = new Date().getTime();
    console.log(now);

    //Find the distance between now and the countDown date
    var distance = countDownDate - now;

    //Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(days.toString());

    $('input[name=days]').val(days.toString());
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;


}, 1000);

$("#card-2").mouseover(() => {
    $("#card-overlay-2").css({ "height": "100%" });
  
})

$("#card-2").mouseout(() => {
    $("#card-overlay-2").css({ "height": "0" });
})

$("#card-3").mouseover(() => {
    $("#card-overlay-3").css({ "height": "100%" });
  
})

$("#card-3").mouseout(() => {
    $("#card-overlay-3").css({ "height": "0" });
})

$("#card-4").mouseover(() => {
    $("#card-overlay-4").css({ "height": "100%" });
  
})

$("#card-4").mouseout(() => {
    $("#card-overlay-4").css({ "height": "0" });
})

$("#card-5").mouseover(() => {
    $("#card-overlay-5").css({ "height": "100%" });
  
})

$("#card-5").mouseout(() => {
    $("#card-overlay-5").css({ "height": "0" });
})

/***********************************************************************
        CAROUSEL-COLABORADORES
************************************************************************/
// import logos from './logos.js';

const logosColaboradores = [
    { name: 'institucional1', src: './img/logos_colaboradores/AMM.svg' },
    { name: 'institucional2', src: './img/logos_colaboradores/FACU_MEDICINA.png' },
    { name: 'institucional3', src: './img/logos_colaboradores/IDHS.jpg' },
   
];

const carousel = document.querySelector('.colaboradores-carousel');

logosColaboradores.forEach(logo => {
    const logoElement = document.createElement('img');
    logoElement.src = logo.src;
    logoElement.alt = logo.name;
    carousel.appendChild(logoElement);
});