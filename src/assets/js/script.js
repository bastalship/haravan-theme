$(document).ready(function() {
    $('.map-footer').click(function () {
        $(this).find('iframe').css("pointer-events", "auto");
    });
    $( ".map-footer" ).mouseleave(function() {
        $(this).find('iframe').css("pointer-events", "none"); 
    });
    function slider() {
        $('.flexslider').flexslider({
            animation: "slide",
            start: function(slider){
              $('body').removeClass('loading');
            }
        });
    }
    slider();
    function menuToggle(clickclass, toggleClass) {
        $(toggleClass).hide();
        $(clickclass).click(function() {
            $(this).parent().find(toggleClass).slideToggle("slow");
            
        })
    }
    menuToggle('.meunu-name','.list-main-menu-mobile');
    menuToggle('.link-first-menu-mobile','.list-second-meunu-mobile');
    menuToggle('.link-second-menu-mobile','.list-third-meunu-mobile');
});
$(window).resize(function() {
  var ww = $(window).width();
  $('.flexslider ul li').each(function() {
    $(this).width(ww);
  });
});