
$('.obstetricia').hover(function () {
    $('.obstetricia .description').css({ 'height': '80%' })
    $('.obstetricia .viewGalery').css({ 'height': '20%' })
}, function () {
    $('.obstetricia .description').css({ 'height': '100%' })
    $('.obstetricia .viewGalery').css({ 'height': '0%' })
});

$('.iq').hover(function () {
    $('.iq .description').css({ 'height': '80%' })
    $('.iq .viewGalery').css({ 'height': '20%' })
}, function () {
    $('.iq .description').css({ 'height': '100%' })
    $('.iq .viewGalery').css({ 'height': '0%' })
});

$('.jc_day1').hover(function () {
    $('.jc_day1 .description').css({ 'height': '80%' })
    $('.jc_day1 .viewGalery').css({ 'height': '20%' })
}, function () {
    $('.jc_day1 .description').css({ 'height': '100%' })
    $('.jc_day1 .viewGalery').css({ 'height': '0%' })
});

$('.jc_day2').hover(function () {
    $('.jc_day2 .description').css({ 'height': '80%' })
    $('.jc_day2 .viewGalery').css({ 'height': '20%' })
}, function () {
    $('.jc_day2 .description').css({ 'height': '100%' })
    $('.jc_day2 .viewGalery').css({ 'height': '0%' })
});


// Codigo boton viewGalery Jornadas Cientificas Dia2
$('#jcDay2Galery').click(function () {
    $('.popup').css({ 'display': 'block' })
    window.scroll(0, 0);
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';

    $('.popupContainerBody').html(`                
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
        class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
        aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
        aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
        aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
        aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
        aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"
        aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10"
        aria-label="Slide 11"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11"
        aria-label="Slide 12"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12"
        aria-label="Slide 13"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13"
        aria-label="Slide 14"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14"
        aria-label="Slide 15"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15"
        aria-label="Slide 16"></button>



</div>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_1.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_2.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_3.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_4.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_5.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_5.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_6.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_7.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_8.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_9.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_10.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_11.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_12.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_13.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_14.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_15.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day2/jornadasCientificas_day2_16.jpeg" class="d-block w-100"
            alt="...">
    </div>


<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>`
    );
})

// Codigo boton viewGalery Jornadas Cientificas Dia1
$('#jcDay1Galery').click(function () {
    $('.popup').css({ 'display': 'block' })
    window.scroll(0, 0);
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';

    $('.popupContainerBody').html(`                
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
        class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
        aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
        aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
        aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
        aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
        aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"
        aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10"
        aria-label="Slide 11"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11"
        aria-label="Slide 12"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12"
        aria-label="Slide 13"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13"
        aria-label="Slide 14"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14"
        aria-label="Slide 15"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15"
        aria-label="Slide 16"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16"
        aria-label="Slide 17"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="17"
        aria-label="Slide 18"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="18"
        aria-label="Slide 19"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="19"
        aria-label="Slide 20"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="20"
        aria-label="Slide 21"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="21"
        aria-label="Slide 22"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="22"
        aria-label="Slide 23"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="23"
        aria-label="Slide 24"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="24"
        aria-label="Slide 25"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="25"
        aria-label="Slide 26"></button>



</div>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_1.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_2.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_3.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_4.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_5.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_6.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_7.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_8.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_9.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_10.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_11.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_12.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_13.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_14.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_15.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_16.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_17.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_18.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_19.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_20.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_21.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_22.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_23.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_24.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_25.jpeg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadasCientificas_day1/jornadasCientificas_day_26.jpeg" class="d-block w-100"
            alt="...">
    </div>

<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>`
    );
})


// Codigo boton viewGalery Obstetricia
$('#obstetriciaGalery').click(function () {
    $('.popup').css({ 'display': 'block' })
    window.scroll(0, 0);
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';

    $('.popupContainerBody').html(`                
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
        class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
        aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
        aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
        aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
        aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
        aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"
        aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10"
        aria-label="Slide 11"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11"
        aria-label="Slide 12"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12"
        aria-label="Slide 13"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13"
        aria-label="Slide 14"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14"
        aria-label="Slide 15"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15"
        aria-label="Slide 16"></button>

</div>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_featureImage.jpg"
            class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_2.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_3.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_4.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_5.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_6.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_7.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_8.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_9.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_10.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_11.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_12.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_13.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_14.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_15.jpg" class="d-block w-100"
            alt="...">
    </div>
    <div class="carousel-item">
        <img src="./img/jornadaObstetricia/jornadaObstetricia_16.jpeg" class="d-block w-100"
            alt="...">
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>`
    );
})


$('#IQGalery').click(function () {
    $('.popup').css({ 'display': 'block' })
    window.scroll(0, 0);
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';

    $('.popupContainerBody').html(`                
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
            aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
            aria-label="Slide 8"></button>

    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="./img/jornadaIQ/jornadaIQ_1.jpeg"
                class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_2.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_3.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_4.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_5.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_6.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_7.jpeg" class="d-block w-100"
                alt="...">
        </div>
        <div class="carousel-item">
            <img src="./img/jornadaIQ/jornadaIQ_8.jpeg" class="d-block w-100"
                alt="...">
        </div>
     </div>

     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>`
    );
})


$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    document.body.style.position = '';
});



