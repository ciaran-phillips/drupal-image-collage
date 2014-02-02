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
    
    update_cols(0);
      
    initialise_slider();
  });
  
  
  function update_cols(start_col) {
    $(".image-collage-grid .img-block").children(".quote, .quote-bg").each(function(){
        set_pos($(this), start_col);
      });
  }
  function set_pos(quote, start_col) {
    var parent = $(quote).parent();
    var col = $(parent).data("col");
    
    var row = $(parent).data("row");
    var position = col - start_col;
    if (position < (num_in_row / 2)) {
      $(quote).css("left", img_width + "px");
    }
    else {
      $(quote).css("left", "-" + (img_width * 3) + "px");
    }
    if (row > 0) {
      $(quote).css("top", img_height + "px");
    }
  }
  
  function open_overlay(overlay) {
    $(".image-collage-grid .overlay").css("display", "none");
    $(overlay).css("display","block");
    $(".image-collage-overlay-bg").css("display", "block");
    $(".image-collage-grid").removeClass("overlay-inactive");
  }
  
  
  function initialise_slider() {
    slider_options = {
      minItems:6,
      maxItems:12,
      conrolNav:false,
    };
    $(window).load(function() {
      $(".flexslider").flexslider({
        itemWidth: 200,
        itemMargin:0,
        minItems: 6,
        maxItems: 12,
        move: 1,
        slideshow:false,
        animation:"slide",
        animationLoop:false,
        controlNav: false,
        after: function(slider){
          update_cols(slider.currentSlide); 
        }
      });     
    });
  }
})(jQuery);
