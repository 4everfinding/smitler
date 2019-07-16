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

});
