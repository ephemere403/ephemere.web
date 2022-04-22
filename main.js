
$(document).ready(function(){

function changeClass(){
    $(this).prev().toggleClass('active')
}
$(function(){
    $('article h2').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});
$(function(){
    $('article h3').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});


$('h2').css('border','solid 3px pink');
$('h3').css('border','solid 3px Maroon');

$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
  $("input").blur(function(){
    $(this).css("background-color", "white");
  });


})