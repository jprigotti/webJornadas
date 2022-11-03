$('.imageContainer').hover(function(){
   $('.description').css({'height' : '80%'}) 
   $('.viewGalery').css({'height' : '20%'}) 
}, function(){
    $('.description').css({'height' : '100%'}) 
    $('.viewGalery').css({'height' : '0%'}) 
});