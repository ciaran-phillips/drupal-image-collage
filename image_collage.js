(function ($) {
  var img_height = 100;
  var img_width = 100;
  var num_in_row = 6;
  
  
  $(document).ready(function() {

    $(".quote, .quote-bg").css("width", (img_width * 3) + "px");
    $(".quote, .quote-bg").css("height", img_height + "px");
    $(".quote").click(function() {
        
        open_overlay(
          $("#overlay-"+ $(this).data("id"))
        );
      });
  
    $(".image-collage-close-button").click(function() {
      $(this).parent().parent().css("display","none");
      $(".image-collage-overlay-bg").css("display","none");
    });
    
    $(".image-collage-grid .img-block").hover(function() {
      
      $(this).children(".quote, .quote-bg").each(function(){
          set_pos($(this));
        });
      
      
    });
    
  });
  
  
  function set_pos(quote) {
    var col = $(quote).data("id") % num_in_row;
    if (col < (num_in_row / 2)) {
      $(quote).css("left", img_width + "px");
    }
    else {
      $(quote).css("left", "-" + (img_width * 3) + "px");
    }
  }
  function open_overlay(overlay) {
    $(".image-collage-grid .overlay").css("display", "none");
    $(overlay).css("display","block");
  
    $(".image-collage-overlay-bg").css("display", "block");
  }
})(jQuery);
