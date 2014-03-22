<?php
/**
 * Enqueue scripts and stylesheets
 *
 * Enqueue stylesheets in the following order:
 * 1. /theme/assets/css/main.css
 *
 * Enqueue scripts in the following order:
 * 1. /theme/assets/js/vendor/modernizr-2.7.0.min.js
 * 2. /theme/assets/js/scripts.js (in footer)
 */
function roots_scripts() {
  wp_enqueue_style('normalize', get_template_directory_uri() . '/assets/css/normalize.css', false, '3.0.0');
  wp_enqueue_style('app_main', get_template_directory_uri() . '/assets/css/main.css', false, '9880649384aea9f1ee166331c0a30daa');

  if (is_single() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }

  wp_register_script('modernizr', get_template_directory_uri() . '/assets/js/vendor/modernizr-2.7.0.min.js', array(), null, false);
  wp_register_script('app_scripts', get_template_directory_uri() . '/assets/js/scripts.js', array(), '0fc6af96786d8f267c8686338a34cd38', true);

  wp_enqueue_script('modernizr');
  wp_enqueue_script('jquery');
  wp_enqueue_script('app_scripts');
}
add_action('wp_enqueue_scripts', 'roots_scripts', 100);
