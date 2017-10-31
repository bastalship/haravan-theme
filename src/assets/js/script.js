$(document).ready(function() {
    $('.map-footer').click(function () {
        $(this).find('iframe').css("pointer-events", "auto");
    });
    $( ".map-footer" ).mouseleave(function() {
        $(this).find('iframe').css("pointer-events", "none"); 
    });
});
