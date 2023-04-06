$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    // loop:true,
    mouseDrag:false,
    dots:false,
  });
  
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
});