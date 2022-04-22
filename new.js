$(document).ready(function(){

    $(function(){
        $('article h2').click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        });
    });
    
$('#mainphoto').zoom({
    callback: function(){
      $(this).colorbox({href: this.src});
    }
  });



})