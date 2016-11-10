define([
    "jquery",
    "loglevel",
    "../config/config",
    "../config/data_management_dsdEditor",
    "../config/data_management_metadataEditor",
    "../config/data_management",
    "fenix-ui-data-management",
    "../js/parser"
], function ($, log, Config, DMConfigDsdEditor, DMConfigMetadataEditor, DMConfig, FenixDataManagement, Parser) {

    var s = {
            DATA_MNG: Config.DATA_MNG_CONTENT,
            cache : Config.CACHE,
            default_lang : Config.LANG,
            default_countryCode : Config.COUNTRY_ISO3_CODE,
            environment : Config.ENVIROMENT_PROD,
            data_country_var : 'data-country',

            //url : ''
            url : 'http://example.com:3000/pathname/?country=COG'
            //url : 'http://example.com:3000/pathname/?country=AFG'
            // url : 'http://example.com:3000/pathname/?country=MDG'
    };

    function DataManagement(){

        this._importThirdPartyCss();
        //s.url = window.location.href;
        // console.log(s.url)
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
        // var COUNTRY_CODE = parsedUrl.searchObject.country;

        var COUNTRY_CODE = $(document.body).attr(s.data_country_var);
        this._dataManagementInit(COUNTRY_CODE);
    }

    DataManagement.prototype._dataManagementInit = function (COUNTRY_CODE) {

        var country_code = COUNTRY_CODE;
        var country_lowerCase = '';
        var dsdConfig = '';
        var config = '';
        var default_country = false;
        if((country_code!=null)&&(typeof country_code!= 'undefined')&&(typeof country_code === 'string')&&(isNaN(country_code))&&(country_code.length== 3)) {

            //Config Current Country
            country_lowerCase = country_code.toLocaleLowerCase();
            dsdConfig = $.extend(true, DMConfigDsdEditor, {"contextSystem":"cstat_"+country_lowerCase});
            config = DMConfig[country_code.toUpperCase()];
            if((dsdConfig!=null)&&(typeof dsdConfig != 'undefined')&&(config!=null)&&(typeof config != 'undefined')) {
            }
            else{
                dsdConfig = '';
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
            country_lowerCase = country_code.toLocaleLowerCase();
            dsdConfig = $.extend(true, DMConfigDsdEditor, {"contextSystem":"cstat_"+country_lowerCase});
            config = DMConfig[country_code.toUpperCase()];
        }

        //Country and configuration found (Or Current Or Default)
        if((dsdConfig!=null)&&(typeof dsdConfig != 'undefined')&&(config!=null)&&(typeof config != 'undefined')) {
            this._dataManagementCreation(dsdConfig, config);
        }
        else{
            log.error(Config.ERROR.NO_COUNTRY_CONFIG);
            this._dataManagementCreation();
        }
    };

    //This function is not used
    //No config as argument
    DataManagement.prototype._dataManagementCreation = function (dsdConfig, config) {

        console.log("Config data manamegemnt")
        console.log(s)

        var metadataConfig = DMConfigMetadataEditor;
        if((dsdConfig!=null)&&(typeof dsdConfig != 'undefined')&&(config!=null)&&(typeof config != 'undefined')) {
            var dataMng = new FenixDataManagement($.extend(true, {
                environment: s.environment,
                el: s.DATA_MNG,
                cache: s.cache,
                lang: s.lang,
                metadataEditor: metadataConfig,
                catalog: config.catalog,
                dsdEditor: dsdConfig

            }));
        }
        else{
            var dataMng = new FenixDataManagement($.extend(true, {
                environment: s.environment,
                el: s.DATA_MNG,
                cache: s.cache,
                lang: s.lang,
                metadataEditor: metadataConfig
            }));
        }
    };

    //style
    DataManagement.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');
        //dropdown selector
        require("../../node_modules/selectize/dist/css/selectize.bootstrap3.css");
        require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");
        //tree selector
        require("../../node_modules/jstree/dist/themes/default/style.min.css");
        //range selector
        require("../../node_modules/ion-rangeslider/css/ion.rangeSlider.css");
        require("../../node_modules/ion-rangeslider/css/ion.rangeSlider.skinHTML5.css");
        //time selector
        require("../../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css");
        // fenix filter

        require("../../node_modules/fenix-ui-filter/dist/fenix-ui-filter.min.css");
        require("../../node_modules/fenix-ui-catalog/dist/fenix-ui-catalog.min.css");
        require("../../node_modules/fenix-ui-metadata-editor/dist/fenix-ui-metadata-editor.min.css");
        require("../../node_modules/fenix-ui-dropdown/dist/fenix-ui-dropdown.min.css");
        require("../../node_modules/fenix-ui-DataEditor/dist/fenix-ui-DataEditor.min.css");
        require("../../node_modules/fenix-ui-DSDEditor/dist/fenix-ui-DSDEditor.min.css");

        require("../../node_modules/fenix-ui-data-management/dist/fenix-ui-data-management.min.css");
        require("../../node_modules/toastr/build/toastr.min.css");
        //host override
        require('../css/countrystat-ui.css');
    };

    return new DataManagement();
});