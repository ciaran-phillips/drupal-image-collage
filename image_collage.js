(function ($) {
  $(document).ready(function() {
  $(".image-collage-grid .quote").click(function() {
      
      open_overlay(
        $("#overlay-"+ $(this).data("id"))
      );
      $(overlay).css("display","block");
    });
  
    $(".close-button").click(function() {
      $(this).parent().css("display","none");
    });
  });
  
  function open_overlay(overlay) {
    $(".image-collage-grid .overlay").css("display", "none");
    $(overlay).css("display","block");
  }
})(jQuery);
