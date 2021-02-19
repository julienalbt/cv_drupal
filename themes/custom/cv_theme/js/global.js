/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.cv_theme = {
    attach: function (context, settings) {

      $('a').click(function(){
        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
      });

      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $('#button-to-top').addClass('show');
        }
        else {
          $('#button-to-top').removeClass('show');
        }
      })

    }
  };

})(jQuery, Drupal);
