$(document).ready(function(){
  carousel();
});

var topNav = $('#js-sticky-nav').offset().top;

$('#js-menu-mobile').click(menuMobile);
$(window).scroll(stickyNav);

function menuMobile() {
  $(this).parent().toggleClass('active');
}

function stickyNav() {
  var scrollWindow = $(window).scrollTop();

  if (scrollWindow >= topNav) {
    $('#js-sticky-nav').addClass('sticky');
  } else if (scrollWindow < topNav) {
    $('#js-sticky-nav').removeClass('sticky');
  }
}

function carousel() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        768:{
          items:4
        }
    }
  });
}