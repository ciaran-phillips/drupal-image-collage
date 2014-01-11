(function ($) {
  $(document).ready(function() {
  $(".image-collage-grid .quote").click(function() {
      var id = $(this).data("id");
      var overlay = $("#overlay-"+id);
      $(overlay).css("display","block");
    });
  });
})(jQuery);
