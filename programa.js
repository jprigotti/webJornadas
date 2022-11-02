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
        ($(window).width() > 576) ? window.scroll(0, 430) : window.scroll(0, 505);
    }, 100);
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
        ($(window).width() > 576) ? window.scroll(0, 430) : window.scroll(0, 505);
    }, 100);
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
        ($(window).width() > 576) ? window.scroll(0, 430) : window.scroll(0, 505);
    }, 100);
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
        ($(window).width() > 576) ? window.scroll(0, 430) : window.scroll(0, 505);
    }, 100);
});


$('.buttonMaximize').click(function (event) {
    $('body, html').scrollTop(0);
    if (event.target.parentElement.attributes[1].value == 'artistica')
        $('.flyerImageFullScreen').attr('src', './img/muestraArtistica.jpg');
    if (event.target.parentElement.attributes[1].value == 'obstetricia')
        $('.flyerImageFullScreen').attr('src', './img/jornadaObstetrica.jpeg');
    if (event.target.parentElement.attributes[1].value == 'quirurgica')
        $('.flyerImageFullScreen').attr('src', './img/jornadaIQ.jpg');
    $('.popup').css({ 'display': 'block' });
    $("body").css("overflow", "hidden");
});

$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    $("body").css("overflow", "visible");
});


$('#accordion-button-4').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, 150) : window.scroll(0, 189);
    }, 100);

});
$('#accordion-button-2').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, 230) : window.scroll(0, 280);
    }, 100);

});
$('#accordion-button-1').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, 300) : window.scroll(0, 350);
    }, 100);

});
$('#accordion-button-5').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, 365) : window.scroll(0, 440);
    }, 100);


});
$('#accordion-button-3').click(function (event) {
    setTimeout(function () {
        ($(window).width() > 576) ? window.scroll(0, 430) : window.scroll(0, 505);
    }, 100);


});


$(window).scroll(example);

function example() {
    var tempScrollTop = $(window).scrollTop();
    console.log("Scroll from Top: " + tempScrollTop.toString());
};