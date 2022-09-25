$(window).on('scroll', function() {
    if($(this).scrollTop() > 100) {
      $('.c-toTop').show();
    } else {
      $('.c-toTop').hide();
    }
  });
  
  $('.c-toTop > a').on('click', function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });