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

  var slider = $('.js-carousel-content'),
      item = slider.find('.item'),
      btnPrev = slider.parents('.slider').find('.js-controller.left'),
      btnNext = slider.parents('.slider').find('.js-controller.right');

  if (slider.length > 0 ) {
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

  if (slider.length > 0 && item.length > 0 ) {
    btnPrev.click(function() {
      slider.trigger('prev.owl');
    });
    btnNext.click(function() {
      slider.trigger('next.owl');
    });
  }

}