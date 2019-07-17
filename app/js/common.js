$(function() {
  $('#my-menu').mmenu({
    extensions: ['widescreen', 'theme-black', 'pagedim-black'],
    navbar: {
      title: '<img src="img/logo-1.svg" alt="Салон красоты S & Mitler">'
    },
    offCanvas: {
      position: 'right'
    }
  });

  var menuApi = $('#my-menu').data('mmenu');
  menuApi.bind('opened', function() {
    $('.hamburger').addClass('is-active')
  }).bind('closed', function() {
    $('.hamburger').removeClass('is-active')
  });

  $('.services__carousel').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouselServices()
    }, 100);
  });

  $('.services__carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      },
    }
  });

  $('.services__content').equalHeights();

  function carouselServices() {
    $('.services__item').each(function() {
      var ths = $(this),
          thsh = ths.find('.services__content').outerHeight();
      ths.find('.services__image').css('min-height', thsh);
    });
  }

  carouselServices();

  $('.services__content-wrapper .services__title').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+\s*$)/, '<span>$1</span>'));
  });

  // Resize window
  function onResize() {
    $('.services__content').equalHeights();
  }

  onResize();

  window.onResize = function() {
    onResize();
  }
});
