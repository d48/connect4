var Helpers = {};
Helpers.triggerEvent = function(el, keyCode) {
    var evt = document.createEvent('Events');    

    evt.initEvent('keyup', true, true);
    evt.keyCode = keyCode;
    evt.which = keyCode;

    document.dispatchEvent(evt);
}
