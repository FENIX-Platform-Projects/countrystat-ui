define([
    "jquery",
    "loglevel",
    "../config/config",
    "../config/analysis",
    "fenix-ui-analysis",
    "../js/parser"
], function ($, log, Config, AnalysisConfig, FenixAnalysis, Parser) {

    var s = {
        CONTAINER : Config.ANALYSIS_CONTENT,
        cache : Config.CACHE,
        environment : Config.ENVIROMENT_PROD,
        default_lang : Config.LANG,
        default_countryCode : Config.COUNTRY_ISO3_CODE,
        //url : ''
        url : 'http://example.com:3000/pathname/?country=cog'
        //url : 'http://example.com:3000/pathname/?country=MDG'
    };

    function Analysis(){
        //var COUNTRY_CODE = 'MDG'; //Congo implement controller

        this._importThirdPartyCss();
        //s.url = window.location.href;
        console.log(s.url)
        console.log($("html").attr("lang"))

        if((s.lang!=null)&&(typeof s.lang!="undefined")){
            s.lang = $("html").attr("lang");
            s.lang = s.lang.toUpperCase();
        }
        else{
            s.lang = s.default_lang;
        }

        var obj = {url : s.url};
        var parsedUrl = new Parser(obj).parseURL();
        var COUNTRY_CODE = parsedUrl.searchObject.country;
        this._analysisInit(COUNTRY_CODE);
    }

    Analysis.prototype._analysisInit = function (COUNTRY_CODE) {

        var country_code = COUNTRY_CODE;
        var config = '';
        var default_country = false;
        if((country_code!=null)&&(typeof country_code!= 'undefined')&&(typeof country_code === 'string')&&(isNaN(country_code))&&(country_code.length== 3)) {
            //Config Current Country
            config = AnalysisConfig[country_code.toUpperCase()];
            if((config!=null)&&(typeof config != 'undefined')) {
            }
            else{
                config = '';
                country_code = s.default_countryCode;
                default_country = true;
                log.error(Config.ERROR.NO_CURRENT_COUNTRY_CONFIG);
            }
        }
        else{
            country_code = s.default_countryCode;
            default_country = true;
            log.error(Config.ERROR.INVALID_COUNTRY_PARAM);
        }

        if(default_country){
            //Config Default Country
            config = AnalysisConfig[country_code.toUpperCase()];
        }

        //Country and configuration found (Could be either Current or Default)
        if((config!=null)&&(typeof config != 'undefined')) {
            this._analysisCreation(config);
        }
        else{
            log.error(Config.ERROR.NO_COUNTRY_CONFIG);
            this._analysisCreation();
        }
    };

    //This function is not used
    //No config as argument
    Analysis.prototype._analysisCreation = function (config) {

        if((config!=null)&&(typeof config != 'undefined')) {
            var analysis = new FenixAnalysis($.extend(true, {
                el : s.CONTAINER,
                cache : s.cache,
                environment : s.environment,
                lang : s.lang
            }, config));
        }
        else{
            var analysis = new FenixAnalysis($.extend(true, {
                el : s.CONTAINER,
                cache : s.cache,
                environment : s.environment,
                lang : s.lang
            }));
        }
    };

    //style
    Analysis.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');

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

        // fenix-ui-catalog
        require("../../node_modules/fenix-ui-catalog/dist/fenix-ui-catalog.min.css");

        //fenix-ui-analisys
        require("../../node_modules/fenix-ui-analysis/dist/fenix-ui-analysis.min.css");

        // fenix-ui-visualization-box
        require("../../node_modules/fenix-ui-visualization-box/dist/fenix-ui-visualization-box.min.css");
    };

    return new Analysis();
});