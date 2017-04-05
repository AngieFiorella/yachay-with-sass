$(document).ready(function(){
  carousel();
});

$('#js-menu-mobile').on('click', menuMobile);

function menuMobile() {
  $(this).parent().toggleClass('active');
}

function carousel() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items:4,
    autoplay: true,
  });
}