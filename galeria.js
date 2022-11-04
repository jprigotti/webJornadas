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



