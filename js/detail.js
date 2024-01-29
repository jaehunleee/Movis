$('.star_rating > .star').click(function() {
  $(this).parent().children('span').removeClass('on');
  $(this).addClass('on').prevAll('span').addClass('on');
})