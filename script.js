

$(document).ready(function() {


  //Button Event Listeners

  //Creates a Box of the specified color
  $('button').on('click',function(){
    console.log($(this).data("color"));
    $('.container').append('<div class = "color-cube ' + $(this).data("color") + '"><div class = "exit" data-color="' + $(this).data("color") +'">x</div></div>');
    $('#' + $(this).data("color")).text(parseInt($('#' + $(this).data("color")).text())+1);
  });

  //Deletes box specified
  $('.container').on('click', '.exit', function(){
    // console.log($(this).data("color"));
    $('#' + $(this).data("color")).text(parseInt($('#' + $(this).data("color")).text())-1);
    $(this).closest ('.color-cube').remove ();

  });

});
