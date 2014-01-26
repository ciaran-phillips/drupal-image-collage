(function ($) {
  $(document).ready(function() {
  $(".image-collage-grid .quote").click(function() {
      
      open_overlay(
        $("#overlay-"+ $(this).data("id"))
      );
    });
  
    $(".image-collage-close-button").click(function() {
      $(this).parent().parent().css("display","none");
      $(".image-collage-overlay-bg").css("display","none");
    });
  });
  
  function open_overlay(overlay) {
    $(".image-collage-grid .overlay").css("display", "none");
    $(overlay).css("display","block");
  
    $(".image-collage-overlay-bg").css("display", "block");
  }
})(jQuery);
