
//Countdown code
//Set the date we are counting down to

window.onload = function() {
    // Define a function to open the popup window
    function openWelcomePopup() {

        $('.alertWelcome').css({ 'display': 'flex' })
        window.scrollTo(0, 0);
        $('body, html').css('overflow', 'hidden');

    }

    // Set a timeout to call the openPopup function after 10 seconds
    setTimeout(openWelcomePopup, 2000); // 10000 milliseconds = 10 seconds
};



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
$('#alertContainerCloseWelcome').click(function (e) {
    $('.alertWelcome').css({ 'display': 'none' })
    $('body, html').css('overflow', 'auto');
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

const logosColaboradoresInstitucionales = [
    { name: 'institucional_1', src: './img/logosColaboradores/institucional_1.jpg' },
    { name: 'institucional_2', src: './img/logosColaboradores/institucional_2.jpg' },
    { name: 'institucional_3', src: './img/logosColaboradores/institucional_3.jpg' },
];

const logosColaboradoresLaboratorios = [
    { name: 'laboratorio_1', src: './img/logosColaboradores/laboratorio_1.jpg' },
    { name: 'laboratorio_2', src: './img/logosColaboradores/laboratorio_2.jpg' },
    { name: 'laboratorio_3', src: './img/logosColaboradores/laboratorio_3.jpg' },
    { name: 'laboratorio_4', src: './img/logosColaboradores/laboratorio_4.jpg' },
    { name: 'laboratorio_5', src: './img/logosColaboradores/laboratorio_5.jpg' },
    { name: 'laboratorio_6', src: './img/logosColaboradores/laboratorio_6.jpg' },
    { name: 'laboratorio_7', src: './img/logosColaboradores/laboratorio_7.jpg' },
    { name: 'laboratorio_8', src: './img/logosColaboradores/laboratorio_8.jpg' },
    { name: 'laboratorio_9', src: './img/logosColaboradores/laboratorio_9.jpg' }   
];

const carouselInst = document.querySelector('.scroller-instituciones');

logosColaboradoresInstitucionales.forEach(logo => {
    const logoElement = document.createElement('img');
    logoElement.src = logo.src;
    logoElement.alt = logo.name;
    carouselInst.appendChild(logoElement);
});



const carouselLabo = document.querySelector('.scroller-laboratorios');

logosColaboradoresLaboratorios.forEach(logo => {
    const logoElement = document.createElement('img');
    logoElement.src = logo.src;
    logoElement.alt = logo.name;
    carouselLabo.appendChild(logoElement);
});

const scrollers = document.querySelectorAll(".scroller");

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}


// Code for streaming
$('#playCard1').click(function (e) {
    // $('.streaming-body').css({ 'display': 'flex' })
    // $('.streaming-cards-carousel').css({ 'display': 'none' })

    // var iframe = $("#youtube-iframe");
    // iframe.attr("src", "https://www.youtube.com/embed/loax026yELg");

    window.open('https://www.youtube.com/watch?v=' + 'LQlajWbCc6Q', '_blank');
})
