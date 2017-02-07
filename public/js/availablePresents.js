
$(document).ready(function () {
  $('#preloader').removeClass('hide');
  $.ajax({
    url: '/regalos/disponibles',
    type: 'GET'
  })
  .done(function (data) {
    $('#preloader').addClass('hide');

    if (data.length == 0) {
      $('#present-content').html('<p>No hay regalos disponibles</p>');
    } else {
      $('#present-content').html('');
      const content = data
          .map(function (item, index) {
            let template = '';

            template += $('#present-card')
                .html()
                .replace(/:id/g, item.id)
                .replace(/:image/g, item.image)
                .replace(/:name/g, item.name)
                .replace(/:description/g, item.description)
                .replace(/:url/g, item.url)
                .replace(/:price/g, item.price);


            $('#present-content').append(template);
          });
    }
  })
  .fail(function (err) {
    window.location = '/error.html';
    console.log('fallo get /regalos/lista')
  });

  $('[buyPresent]').on('click', function () {
    const id = $(event.target).attr('data-id');
    debugger
    $.ajax({
      url: '/regalos/disponibles',
      type: 'GET'
    })
  })
});