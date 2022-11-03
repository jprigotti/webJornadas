$('.imageContainer').hover(function(){
   $('.description').css({'height' : '80%'}) 
   $('.viewGalery').css({'height' : '20%'}) 
}, function(){
    $('.description').css({'height' : '100%'}) 
    $('.viewGalery').css({'height' : '0%'}) 
});

$('#obstetriciaGalery').click(function(){
    $('.popup').css({'display':'block'})
})

$('.popupContainerClose').click(function (event) {
    $('.popup').css({ 'display': 'none' });
    document.body.style.position = '';
});