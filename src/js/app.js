$('.js_nav-toggle').on('click', function(){
  $('.js_nav-toggle').toggleClass('active');
  $('.nav-menu').slideToggle();
  $('body').toggleClass('shadow');
})