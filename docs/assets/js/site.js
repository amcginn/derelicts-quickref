$(window).on('load', function() {
  $('#top-link-container').on('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  console.log($(window).height())
  console.log($('body > #container').height())
  if ($('body > #container').height() > $(window).height() * 2) {
    $('#top-link-container').css('display', 'block')
  }
});
