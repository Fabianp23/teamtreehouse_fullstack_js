$('.spoiler span').hide();

$('.spoiler').append('<button>Reveal Spoiler</button>');

$('.spoiler button').click(function() {
  $('.spoiler span').show();
  $(this).remove();
});
