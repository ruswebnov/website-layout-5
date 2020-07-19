$(document).ready(function(){

 $('.slider__reviews').slick({
   autoplay: true,
   autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 544,
      settings: {
        arrows:false,
      }
    },
  ]
 });





 $('.mobile__burger-btn').on('click', function() {
   $(this).toggleClass('active');

   if($('.header__nav-list').css('display') == 'none') {
     $('.header__nav-list').slideDown();
   }
   else {
     $('.header__nav-list').slideToggle();
   }
 })

});