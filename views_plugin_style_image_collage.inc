<?php

/**
 * @file
 * Contains views_plugin_style_vertical_tabs.
 */

/**
 * Defines a style plugin that renders the full view as vertical_tabs.
 *
 * @ingroup views_style_plugins
 */
class views_plugin_style_image_collage extends views_plugin_style_default {

  /**
   * Overrides views_plugin_style::options_definition().
   */
  function option_definition() {
    $options = parent::option_definition();

    $options['name'] = array('default' => '');
    $options['quote'] = array('default' => '');
    $options['bio'] = array('default' => '');
    $options['image'] = array('default' => '');
    $options['tagline'] = array('default' => '');

    return $options;
  }

  /**
   * Overrides views_plugin_style::options_form().
   */
  function options_form(&$form, &$form_state) {
    parent::options_form($form, $form_state);
    $options = array('' => t('- None -'));
    $field_labels = $this->display->handler->get_field_labels(TRUE);

    $options += $field_labels;

    
    $form['name'] = array(
      '#type' => 'select',
      '#title' => t('Member Name'),
      '#options' => $options,
      '#default_value' => $this->options['title'],
      '#description' => t(''),
      '#weight' => -49,
    );

    $form['quote'] = array(
      '#type' => 'select',
      '#title' => t('Quote'),
      '#options' => $options,
      '#default_value' => $this->options['quote'],
      '#description' => t('A short quote shown on hover'),
      '#weight' => -48,
    );
    
    $form['tagline'] = array(
      '#type' => 'select',
      '#title' => t('Tagline'),
      '#options' => $options,
      '#default_value' => $this->options['tagline'],
      '#description' => t('A line shown below the member\'s name in the overlay'),
      '#weight' => -48,
    );

    $form['bio'] = array(
      '#type' => 'select',
      '#title' => t('Long Message'),
      '#options' => $options,
      '#default_value' => $this->options['bio'],
      '#description' => t('The full message to be displayed after clicking on a member.'),
      '#weight' => -47,
    );
    
    $form['image'] = array(
      '#type' => 'select',
      '#title' => t('Image'),
      '#options' => $options,
      '#default_value' => $this->options['image'],
      '#description' => t('The full message to be displayed after clicking on a member.'),
      '#weight' => -47,
    );
  }

}
