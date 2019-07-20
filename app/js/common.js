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
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
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

    $('section .h2').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  })

  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })

  //E-mail Ajax Send
  $("form.ticket__form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.ticket__success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        // Done Functions
        $(th).find('.ticket__success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

  $('.reviews__carousel').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });

  $('.partners__carousel').owlCarousel({
    loop: true,
    items: 4,
    smartSpeed: 700,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
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

$(window).on('load', function() {
  $('.preloader').delay(500).fadeOut('slow');
})
