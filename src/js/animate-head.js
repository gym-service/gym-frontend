var animatedHeader = (function() {
    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-default' ),
        didScroll = false,
        changeHeaderOn = 160;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
    //      classie.add( header, 'navbar-shrink' );
    //      $('.navbar').removeClass('navbar-shrink');
            $('.navbar').removeClass('navbar-shrink');
//          $('#bs-example-navbar-collapse-1').addClass('navbar-shrink');
        }
        else {
//          classie.remove( header, 'navbar-shrink' );
            $('.navbar').addClass('navbar-shrink');
//          $('#bs-example-navbar-collapse-1').removeClass('navbar-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();