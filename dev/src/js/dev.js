define([
    'loglevel',
    'jquery',
    'underscore',
    '../../../src/js/index'
], function (log, $, _, Tool) {

    'use strict';

    var s = {},
        environment = "develop";

    function Dev() {
        console.clear();

        this._importThirdPartyCss();

        log.setLevel('trace');

        this.start();
    }

    Dev.prototype.start = function () {

        log.trace("Test started");

        this._render();

    };

    Dev.prototype._render = function () {

        var barbara = new Tool();

    };

    // utils

    Dev.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require("bootstrap-loader");


        //dropdown selector
        require("../../../node_modules/selectize/dist/css/selectize.bootstrap3.css");

    };

    return new Dev();

});