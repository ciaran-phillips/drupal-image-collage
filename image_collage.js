(function ($) {
  
  var row_width = 1000;
  var num_in_row = 6;
  var num_rows = 2;
  var margin = 80;
  var img_width = row_width / num_in_row;
  var img_height = img_width;
  var bg_height = (img_height * num_rows) + (margin  * 2) + "px";
  
  $(document).ready(function() {
    $(".image-collage-overlay-bg").css("height", bg_height);
    $(".image-collage-grid li img").each(function() {
        $(this).css("width", img_width + "px");
        $(this).css("height", img_height + "px");
      });
    $(".image-collage-close-button").css("margin-top", "-" + margin + "px");
    $(".image-collage-grid").css("width", row_width + "px")
    $(".image-collage-overlays").children().css("width", (img_width * num_in_row) + "px");
    $(".quote, .quote-bg").css("width", (img_width * 3) + "px");
    $(".quote, .quote-bg").css("height", img_height + "px");
    $(".image-collage-grid li img").click(function() {
        open_overlay(
          $("#overlay-"+ $(this).parent().data("id"))
        );
      });
  
    $(".image-collage-close-button").click(function() {
      
      $(this).parent().parent().css("display","none");
      $(".image-collage-overlay-bg").css("display","none");
      $(".image-collage-grid").addClass("overlay-inactive");
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
    $(".image-collage-grid").removeClass("overlay-inactive");
  }
})(jQuery);
