// Module
const site_navigation = ( function () {

  /**
   * Vars
   */

  let _instance = {};
  let $body = document.querySelector( 'body' );
  let $document = document.documentElement;
  let $primary_navigation = document.querySelector( '#siteHeaderNavigation' );
  let $button_open = document.querySelector( '#siteNavigationMenuOpen' );
  let $button_close = document.querySelector( '#siteNavigationMenuClose' );

  /**
   * Private
   */

  let setup = function () {

    $primary_navigation.setAttribute( 'aria-hidden', true );

    $button_open.setAttribute( 'aria-controls', 'siteNavigation' );
    $button_open.setAttribute( 'aria-expanded', false );

    $button_close.setAttribute( 'aria-controls', 'siteNavigation' );
    $button_close.setAttribute( 'aria-expanded', false );

  };

  let button_click = function ( event ) {
    let
      $button = this,
      is_expanded = ( 'true' === $button.getAttribute( 'aria-expanded' ) );

    event.stopPropagation();

    if ( is_expanded ) {
      set_navigation_close();
    } else {
      set_navigation_open();
    }
  };

  let set_navigation_close = function () {
    $body.classList.remove( 'js-nav-open' );
    $primary_navigation.setAttribute( 'aria-hidden', 'true' );
    $button_close.setAttribute( 'aria-expanded', 'false' );
    $button_open.setAttribute( 'aria-expanded', 'false' );

    $primary_navigation.removeEventListener( 'transitionend', set_navigation_a11y );
  };

  let set_navigation_open = function () {
    $body.classList.add( 'js-nav-open' );
    $primary_navigation.setAttribute( 'aria-hidden', 'false' );
    $button_close.setAttribute( 'aria-expanded', 'true' );
    $button_open.setAttribute( 'aria-expanded', 'true' );

    $primary_navigation.addEventListener( 'transitionend', set_navigation_a11y );
  };

  let set_navigation_a11y = function () {
    let handle = ally.maintain.tabFocus( { context: $primary_navigation } );
    ally.when.key( {
      escape: function ( event, disengage ) {
        handle.disengage();
        set_navigation_close();
        disengage();
      }
    } );
  };

  let site_navigation_click = function ( event ) {
    event.stopPropagation();
  };

  let document_click = function () {
    set_navigation_close();
  };

  /**
   * Public
   */

  _instance.init = function () {
    // Setup
    setup();
    // Bind
    $button_close.addEventListener( 'click', button_click );
    $button_open.addEventListener( 'click', button_click );
    $document.addEventListener( 'click', document_click );
    $primary_navigation.addEventListener( 'click', site_navigation_click );
  };

  return _instance;

} )();
// Export
export default site_navigation;