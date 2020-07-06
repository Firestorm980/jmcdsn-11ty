// Module
const site_vendor = ( function () {

  /**
   * Vars
   */

  let _instance = {};

  /**
   * Private
   */

  let init_js = function () {
    let $html = document.querySelector( 'html' );
    $html.classList.remove( 'no-js' );
    $html.classList.add( 'js' );
  };

  let init_sliders = function () {
    let options = {
      slide: '.slide',
      dots: true,
      fade: true,
      arrows: false
    };
    jQuery( '.slides' ).slick( options );
  };


  /**
   * Public
   */

  _instance.init = function () {
    // JS
    init_js();
    // Sliders
    init_sliders();
  };

  return _instance;

} )();
// Export
export default site_vendor;