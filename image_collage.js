(function ($) {
  
  var num_in_row = 6;
  var num_rows = 2;
  var margin = 80;
  var img_width = 160;
  var img_height = 160;
  var bg_height = (img_height * num_rows) + (margin  * 2) + "px";
  var overlay_span = 3;
  var switch_point = 3;
  var start_col = 0;
  
  
  $(document).ready(function() {
    $(".image-collage-overlay-bg").css("height", bg_height);
    $("#image-collage-grid li img").each(function() {
        $(this).css("width", img_width + "px");
        $(this).css("height", img_height + "px");
      });
    $(".large-overlay-close-btn").css("margin-top", "-" + margin + "px");
    $(".image-collage-overlay-bg").css("margin-top", "-" + margin + "px");
    $(".quote, .quote-bg").css("height", img_height + "px");
    $("#image-collage-grid li img").click(function() {
        open_overlay(
          $(this).parent().data("id")
        );
      });
    update_overlay_width();
    $(window).resize(function() {
      update_overlay_width();
    });
    $(".large-overlay-close-btn").click(function() {
      
      $(this).parent().parent().css("display","none");
      $(".image-collage-overlay-bg").css("display","none");
      $("#image-collage-grid").addClass("overlay-inactive");
      toggle_arrows();
    });
    $(".mini-overlay-close-btn").click(function() {
      toggle_arrows();
      toggle_mini_overlay();
    });
    update_cols(0);
      
    initialise_slider();
  });
  
  function update_overlay_width() {
    var total_width = $("#image-collage-grid").width();
    if (total_width > ((img_width * 6) - 40)) {
      overlay_span = 3;
      num_in_row = 6;
    }
    else {
      overlay_span = 2;
      num_in_row = 4;
    }
    $(".quote, .quote-bg").css("width", (img_width * overlay_span) + "px");
    update_cols(start_col);
  }
  
  function update_cols(start_col) {
    $("#image-collage-grid .img-block").children(".quote, .quote-bg").each(function(){
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
      $(quote).css("left", "-" + (img_width * overlay_span) + "px");
    }
    if (row > 0) {
      $(quote).css("top", img_height + "px");
    }
  }
  
  function open_overlay(id) {
    var container_width = $("#image-collage-grid").width();
      toggle_arrows();
    if (container_width < 740) {
      toggle_mini_overlay(id);
    }
    else {
      toggle_large_overlay(id);
      
    }
  }
  
  function toggle_mini_overlay(id) {
    if (typeof id != "undefined") {
      var img_block = "#img-block-" + id;
      
      var margin_left = start_col * img_width;
      
      var quote = $(img_block + " .quote, " + img_block + " .quote-bg");
      $(quote).addClass("active");
      $(quote).css("margin-left", margin_left +"px");
    }
    else {
      var img_blocks = $("#image-collage-grid .img-block .quote, #image-collage-grid .img-block .quote-bg");
      $(img_blocks).removeClass("active");
      $(img_blocks).css("margin-left");
    }
    
  }
  function toggle_large_overlay(id) {
    var overlay = $("#overlay-"+ id);
    $("#image-collage-grid .overlay").css("display", "none");
    var overlay_height = $(overlay).height();
    overlay_height = overlay_height + (margin * 2);
    $(overlay).css("display","block");
    
    $(".image-collage-overlay-bg").css("height", overlay_height + "px"); 
    $(".image-collage-overlay-bg").css("display", "block"); 
    $("#image-collage-grid").removeClass("overlay-inactive");
  }
  
  function toggle_arrows() {
    var arrows = $(".flex-direction-nav");
    if ($(arrows).hasClass("inactive")) {
      $(arrows).removeClass("inactive");
    }
    else {
      $(arrows).addClass("inactive");
    }
  }
  
  function initialise_slider() {
    slider_options = {
      minItems:6,
      maxItems:12,
      conrolNav:false,
    };
    $(window).load(function() {
      $(".flexslider").flexslider({
        itemWidth: 160,
        itemMargin:0,
        minItems: 2,
        maxItems: 12,
        move: 1,
        slideshow:false,
        animation:"slide",
        animationLoop:false,
        controlNav: false,
        after: function(slider){
          update_cols(slider.currentSlide);
          start_col = slider.currentSlide;
        }
      });     
    });
  }
})(jQuery);
