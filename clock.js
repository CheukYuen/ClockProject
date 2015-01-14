/**
 * Created by zlin on 1/10/15.
 */


function handleRoute() {

    //console.log('init');


    var hash = window.location.hash;
    hidePageWithId('#worldclock');
    hidePageWithId('#timer');
    hidePageWithId('#stopwatch');

    //World clock is default
    var idForPageToShow = '#worldclock';


    if (hash.indexOf('timer') != -1) {
        idForPageToShow = '#timer';
    }
    if (hash.indexOf('stopwatch') != -1) {
        idForPageToShow = '#stopwatch';
    }

    //console.log(hash.indexOf('timer'));
    $(idForPageToShow).show();
    $(idForPageToShow + '-link').addClass('selected');


}
function hidePageWithId(id) {

    $(id).hide();
    $(id + '-link').removeClass('selected');
}

function init() {
    $(window).on('hashchange', $.proxy(handleRoute()));

    handleRoute();
}
console.log('hello');