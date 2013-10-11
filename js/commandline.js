
// jQuery is already loaded.. right?

$( document ).ready(function()
{
  // any one time setup

  $( "form[name='command-line']" ).submit(function( event ){

    var command = $('#command-entry').val();
    $('<div class="command" />')
      .text(command)
      .appendTo('#history');

    clearCommand();

    event.preventDefault();
  });
});

function clearCommand(){
  $('#command-entry').val('');
}

