$(document).ready(function() {
  Materialize.updateTextFields();
  console.log("done updating")
  $('select').material_select();
  console.log("done selectifying.")
  $('.collapsible').collapsible();
  console.log("done collapisifying.");


$(".collapsible-header").click(function(event) {
  if($(this).parent().hasClass("active")) {
    console.log("is active..");
  } else {
    let id = $(this).data("scroll");
    let destination = document.getElementById(id);
    let height = $("#item-list-header").height();

    setTimeout(function() {
      $('html, body').animate({
          scrollTop: ($(destination).position().top - 50)
      }, 300);
    }, 600, [destination, height]);
  }

});






});
