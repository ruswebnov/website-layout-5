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
   $('.header__nav-list').toggleClass('active');
 })

});