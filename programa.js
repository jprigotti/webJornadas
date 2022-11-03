const navScrollSM = 55;
var btn1ScrollSM = document.querySelector("#accordion-item-1").offsetTop - navScrollSM;
var btn2ScrollSM = document.querySelector("#accordion-item-2").offsetTop - navScrollSM;
var btn3ScrollSM = document.querySelector("#accordion-item-3").offsetTop - navScrollSM;
var btn4ScrollSM = document.querySelector("#accordion-item-4").offsetTop - navScrollSM;
var btn5ScrollSM = document.querySelector("#accordion-item-5").offsetTop - navScrollSM;
const navScrollLG = 57;
var btn1ScrollLG = document.querySelector("#accordion-item-1").offsetTop - navScrollLG;
var btn2ScrollLG = document.querySelector("#accordion-item-2").offsetTop - navScrollLG;
var btn3ScrollLG = document.querySelector("#accordion-item-3").offsetTop - navScrollLG;
var btn4ScrollLG = document.querySelector("#accordion-item-4").offsetTop - navScrollLG;
var btn5ScrollLG = document.querySelector("#accordion-item-5").offsetTop - navScrollLG;


const btnDay7 = document.querySelector('#btnDay7');
btnDay7.addEventListener('click', function () {
    document.querySelector('#btnDay7').classList.add('btnActive');
    document.querySelector('#btnDay8').classList.remove('btnActive');
    document.querySelector('#btnDay9').classList.remove('btnActive');
    document.querySelector('#btnDay10').classList.remove('btnActive');
    document.querySelector('#day7').classList.add('dayActive');
    document.querySelector('#day8').classList.remove('dayActive');
    document.querySelector('#day9').classList.remove('dayActive');
    document.querySelector('#day10').classList.remove('dayActive');
    $('.agendaBody .day7').css({ 'display': 'block' });
    $('.agendaBody .day8').css({ 'display': 'none' });
    $('.agendaBody .day9').css({ 'display': 'none' });
    $('.agendaBody .day10').css({ 'display': 'none' });

    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn3ScrollLG) : window.scroll(0, btn3ScrollSM);
    }, 300);

});

const btnDay8 = document.querySelector('#btnDay8');
btnDay8.addEventListener('click', function () {
    document.querySelector('#btnDay7').classList.remove('btnActive');
    document.querySelector('#btnDay8').classList.add('btnActive');
    document.querySelector('#btnDay9').classList.remove('btnActive');
    document.querySelector('#btnDay10').classList.remove('btnActive');
    document.querySelector('#day7').classList.remove('dayActive');
    document.querySelector('#day8').classList.add('dayActive');
    document.querySelector('#day9').classList.remove('dayActive');
    document.querySelector('#day10').classList.remove('dayActive');
    $('.agendaBody .day7').css({ 'display': 'none' });
    $('.agendaBody .day8').css({ 'display': 'block' });
    $('.agendaBody .day9').css({ 'display': 'none' });
    $('.agendaBody .day10').css({ 'display': 'none' });

    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn3ScrollLG) : window.scroll(0, btn3ScrollSM);
    }, 300);

});

const btnDay9 = document.querySelector('#btnDay9');
btnDay9.addEventListener('click', function () {
    document.querySelector('#btnDay7').classList.remove('btnActive');
    document.querySelector('#btnDay8').classList.remove('btnActive');
    document.querySelector('#btnDay9').classList.add('btnActive');
    document.querySelector('#btnDay10').classList.remove('btnActive');
    document.querySelector('#day7').classList.remove('dayActive');
    document.querySelector('#day8').classList.remove('dayActive');
    document.querySelector('#day9').classList.add('dayActive');
    document.querySelector('#day10').classList.remove('dayActive');
    $('.agendaBody .day7').css({ 'display': 'none' });
    $('.agendaBody .day8').css({ 'display': 'none' });
    $('.agendaBody .day9').css({ 'display': 'block' });
    $('.agendaBody .day10').css({ 'display': 'none' });

    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn3ScrollLG) : window.scroll(0, btn3ScrollSM);
    }, 300);

});

const btnDay10 = document.querySelector('#btnDay10');
btnDay10.addEventListener('click', function () {
    document.querySelector('#btnDay7').classList.remove('btnActive');
    document.querySelector('#btnDay8').classList.remove('btnActive');
    document.querySelector('#btnDay9').classList.remove('btnActive');
    document.querySelector('#btnDay10').classList.add('btnActive');
    document.querySelector('#day7').classList.remove('dayActive');
    document.querySelector('#day8').classList.remove('dayActive');
    document.querySelector('#day9').classList.remove('dayActive');
    document.querySelector('#day10').classList.add('dayActive');
    $('.agendaBody .day7').css({ 'display': 'none' });
    $('.agendaBody .day8').css({ 'display': 'none' });
    $('.agendaBody .day9').css({ 'display': 'none' });
    $('.agendaBody .day10').css({ 'display': 'block' });

    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn3ScrollLG) : window.scroll(0, btn3ScrollSM);
    }, 300);

});


$('.buttonMaximize').click(function (event) {

    $('.popup').css({ 'display': 'block' });

    if (event.target.parentElement.attributes[1].value == 'artistica')
        $('.flyerImageFullScreen').attr('src', './img/muestraArtistica.jpg');
    if (event.target.parentElement.attributes[1].value == 'obstetricia')
        $('.flyerImageFullScreen').attr('src', './img/jornadaObstetrica.jpeg');
    if (event.target.parentElement.attributes[1].value == 'quirurgica')
        $('.flyerImageFullScreen').attr('src', './img/jornadaIQ.jpg');

    window.scroll(0, 0);
    document.body.style.position = 'fixed';
});

$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    document.body.style.position = '';
});


$('#accordion-button-4').click(function (event) {
    setTimeout(function () {

        ($(window).width() > 576) ? window.scroll(0, btn4ScrollLG) : window.scroll(0, btn4ScrollSM);
    }, 300);
});

$('#accordion-button-2').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn2ScrollLG) : window.scroll(0, btn2ScrollSM);
    }, 300);
});

$('#accordion-button-1').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn1ScrollLG) : window.scroll(0, btn1ScrollSM);
    }, 300);
});

$('#accordion-button-5').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn5ScrollLG) : window.scroll(0, btn5ScrollSM);
    }, 300);
});

$('#accordion-button-3').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, btn3ScrollLG) : window.scroll(0, btn3ScrollSM);
    }, 300);
});


// $(window).scroll(example);

// function example() {
//     var tempScrollTop = $(window).scrollTop();
//     console.log("Scroll from Top: " + tempScrollTop.toString());
// };