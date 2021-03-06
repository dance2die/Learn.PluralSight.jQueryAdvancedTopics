(function($) {
    var methods = {
        emphasize: function() {
            return this.css('background-color', 'orange');
        },
        deEmphasize: function() {
            return this.css('background-color', 'white');
        }
    };

    $.fn.emphasize = function(method) {
        if (methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.emphasize.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.emphasis');
        }
    }
})(jQuery);
