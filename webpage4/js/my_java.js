$('#title0').text("");

$(document).ready(function() {

  $('#title0').text("王家衛");
  $('#title0').hide();
  $('#title0').fadeIn(1000);

  $('.section0').css("background-color", "gray");
  $('.section0').css("background-color", "gray");

  $('#title1').css("color", "white");
  $('#title2').css("color", "black");
  $('#title3').css("color", "rgb(0, 230, 140)");

  $('#section3, p').css("color", "rgb(50, 50, 50)");
  $('#section3, p').css("font-family", "calibri");

  $('#section6, h5').css("font-size", "2em");
  $('#section6, h5').css("color", "rgb(30, 80, 100)");
  $('h5').css("margin-top", "4em");
  $('h5').css("margin-bottom", "1em");
  $('#section6').css("font-size", ".5em");
  $('h6').css("font-size", "1em");
  $('h6').css("margin", ".75em");
  $('#section6').css("color", "rgb(30, 40, 50)");
  $('#section6').css("font-family", "Verdana");
  $('#section6').css("text-align", "center");
  $('#end').css("margin-top", "1.5em");
  $('#end').css("margin-bottom", "8em");

  $('#section5').html('<img id="image_1-0" src="images/Prototype_1-0.jpg" width="100%" height="100%">');

  $('.text-button').css("position", "fixed");
  $('.text-button').css("padding", "0px");
  $('.text-button').css("top", "2%");
  $('.text-button').css("left", "98%");
  $('.text-button').css("background-color", "transparent");
  $('.text-button').css("border-color", "blac");
  $('.text-button').css("color", "transparent");
  $('.text-button').css("height", ".75em");
  $('.text-button').css("font-size", ".75em");

  $('#button-1').click(function(){
    $('#section4').slideToggle();
  });

  $('#button-2').css("top", "4%");
  $('#button-2').css("background-color", "transparent");
  $('#button-2').css("border-color", "gold");
  $('#button-2').css("color", "transparent");
  $('#button-2').css("height", "1em");
  $('#button-2').css("font-size", ".6em");

  $('#button-2').click(function(){
    $('#image_1-0').slideToggle(300);
  });

  $('#button-3').css("top", "6%");
  $('#button-3').css("background-color", "transparent");
  $('#button-3').css("border-color", "black");
  $('#button-3').css("color", "transparent");
  $('#button-3').css("height", "1em");
  $('#button-3').css("font-size", ".6em");

  $('#button-3').click(function(){
    $('#section6').slideToggle();
  });

  $('#button-x').css("position", "fixed");
  $('#button-x').css("padding", "0px");
  $('#button-x').css("bottom", "2%");
  $('#button-x').css("left", "98%");
  $('#button-x').css("background-color", "transparent");
  $('#button-x').css("border-color", "transparent");
  $('#button-x').css("color", "rgb(50, 100, 200)");
  $('#button-x').css("height", "1em");
  $('#button-x').css("font-size", "1em");

  $('#button-x').click(function(){
    $('hr').slideToggle(500);
    $('#navigation').slideToggle(500);
  });

});
