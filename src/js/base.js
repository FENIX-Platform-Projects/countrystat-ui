define([
    'jquery',
    "../config/charts",
    'progressbar.js'
], function ($, Charts, ProgressBar) {


    function Base() {
        this._importThirdPartyCss();
        this._initCharts("AFG");
        console.log(Charts["AFG"].color);
    }

    //style
    Base.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');

        //host override
        require('../css/countrystat-ui.css');

    };

    Base.prototype._initCharts = function (code) {

        var p = {
            PERCENTAGE_ONE: '#percentage-one',
            PERCENTAGE_TWO: '#percentage-two'
        };

        var country = Charts[code];

        var c = {
            color: country.color, //color
            strokeWidth: 10,
            trailWidth: 9,
            trailColor: "rgba(255,255,255,0.2)",
            duration: 1500,
            easing: 'easeOut',
            text: {
                value: '0'
            },
            step: function (state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        };

        var circle = new ProgressBar.Circle(p.PERCENTAGE_ONE, c);

        circle.animate(country.percentageOne);//pOne

        var circle_two = new ProgressBar.Circle(p.PERCENTAGE_TWO, c);

        circle_two.animate(country.percentageTwo);//pTwo

    }

    return new Base();
});