<?php
/**
 * @file
 * Views integration for the views_vertical_tabs module.
 */

/**
 * Implements hook_views_plugins().
 */
function image_collage_views_plugins() {
  $plugins = array();

  $plugins['style']['image_collage'] = array(
    'title' => t('Image Collage'),
    'help' => t('Renders the full views output in a vertical tabs'),
    'handler' => 'views_plugin_style_image_collage',
    'theme' => 'views_image_collage',
    'uses row plugin' => TRUE,
    'uses fields' => TRUE,
    'uses row class' => TRUE,
    'uses grouping' => FALSE,
    'uses options' => TRUE,
    'type' => 'normal',
  );

  return $plugins;
}
