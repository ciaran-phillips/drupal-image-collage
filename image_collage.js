(function ($) {

/**
 * Provide the summary information for the views vertical tabs.
 */
Drupal.behaviors.imageCollageSummary = {
  attach: function (context, settings) {
    // The drupalSetSummary method required for this behavior so we need to make
    // sure this behavior is processed only if drupalSetSummary is defined.
    if (typeof jQuery.fn.drupalSetSummary == 'undefined') {
      return;
    }

    $.each(settings.image_collage, function(){
      $.each(this, function(id, summary){
        $('fieldset#' + id, context).drupalSetSummary(function(context) {
          return summary;
        });
      });
    });

  }
};

})(jQuery);
