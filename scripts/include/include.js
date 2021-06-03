$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'components/projects/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
});