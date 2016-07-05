$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function() {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function() {
  $('.description').html('We build apps');
});

$('.work').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true,
  topSpacing: 60
});

$('.work').on('sticky-start', function() {
  $(this).html("Want us to work on your project? <a href='#' class='email-text'>Email us</a>");
});

$('.work').on('sticky-end', function() {
  $('.email-text').remove();
});
