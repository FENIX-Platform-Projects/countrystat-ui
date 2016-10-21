define([
    "jquery",
    "../config/analysis",
    "fenix-ui-analysis",
    "../js/parser"
], function ($, AnalysisConfig, FenixAnalysis, Parser) {

    var s = {
        CONTAINER : "#fx-analysis-container",
        cache : false,
        environment : "production",
        url : 'http://example.com:3000/pathname/?country=MDG'
    };

    function Analysis(){
        //var COUNTRY_CODE = 'MDG'; //Congo implement controller

        this._importThirdPartyCss();
        //s.url = window.location.href;
        console.log(s.url)
        var obj = {url : s.url};
        var parsedUrl = new Parser(obj)._parseURL();
        var COUNTRY_CODE = parsedUrl.searchObject.country;
        this._analysisInit(COUNTRY_CODE);
    }

    Analysis.prototype._analysisInit = function (COUNTRY_CODE) {

        console.log(COUNTRY_CODE)
        var config = AnalysisConfig[COUNTRY_CODE];

        console.log(config)
        var analysis = new FenixAnalysis($.extend(true, {
            el : s.CONTAINER,
            cache : s.cache,
            environment : s.environment
        }, config));
    };

    //style
    Analysis.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require("bootstrap-loader");

        //dropdown selector
        require("../../node_modules/selectize/dist/css/selectize.bootstrap3.css");

        // fenix-ui-filter
        require("../../node_modules/fenix-ui-filter/dist/fenix-ui-filter.min.css");
        // fenix-ui-dropdown
        require("../../node_modules/fenix-ui-dropdown/dist/fenix-ui-dropdown.min.css");

        // bootstrap-table
        require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");

        //tree selector
        require("../../node_modules/jstree/dist/themes/default/style.min.css");

        // fenix-ui-table-creator
        require("../../node_modules/fenix-ui-table-creator/dist/fenix-ui-table-creator.min.css");

        // jquery-grid for fenix-ui-metadata-viewer
        require("../../node_modules/jquery-treegrid-webpack/css/jquery.treegrid.css");

        // iDangerous swiper
        require("../../node_modules/swiper/dist/css/swiper.min.css");

        // fenix-ui-visualization-box
        require("../../node_modules/fenix-ui-visualization-box/dist/fenix-ui-visualization-box.min.css");

        // fenix-ui-catalog
        require("../../node_modules/fenix-ui-catalog/dist/fenix-ui-catalog.min.css");

        //fenix-ui-analisys
        require("../../node_modules/fenix-ui-analysis/dist/fenix-ui-analysis.min.css");
    };

    return new Analysis();
});