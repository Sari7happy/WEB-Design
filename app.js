$(window).on('scroll', function() {
    if($(this).scrollTop() > 100) {
      $('.c-toTop').show();
    } else {
      $('.c-toTop').hide();
    }
  });
  