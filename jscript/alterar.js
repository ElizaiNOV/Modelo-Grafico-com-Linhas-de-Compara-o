(function(window, document, $, undefined) {
    "use strict";
    $(function() {
if ($('.ct-chart-horizontal').length) {
    new Chartist.Bar('.ct-chart-horizontal', {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    });

}
});

})(window, document, window.jQuery);