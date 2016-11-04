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
            environment : Config.ENVIROMENT_DEVELOP,
            //url : ''
            url : 'http://example.com:3000/pathname/?country=COG'
            //url : 'http://example.com:3000/pathname/?country=AFG'
            // url : 'http://example.com:3000/pathname/?country=MDG'
    };

    function DataManagement(){

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
        this._dataManagementInit(COUNTRY_CODE);
    }

    DataManagement.prototype._dataManagementInit = function (COUNTRY_CODE) {

        var metadataConfig = DMConfigMetadataEditor;
        if((COUNTRY_CODE!=null)&&(typeof COUNTRY_CODE!= 'undefined')&&(typeof COUNTRY_CODE === 'string')&&(isNaN(COUNTRY_CODE))&&(COUNTRY_CODE.length== 3)) {
            var country_lowerCase = COUNTRY_CODE.toLocaleLowerCase();
            var dsdConfig = $.extend(true, DMConfigDsdEditor, {"contextSystem":"cstat_"+country_lowerCase});
            var config = DMConfig[COUNTRY_CODE];
            if((config!=null)&&(typeof config != 'undefined')) {
                var dataMng = new FenixDataManagement($.extend(true, {
                    environment: s.environment,
                    el: s.DATA_MNG,
                    cache: s.cache,
                    lang: s.lang,
                    dsdEditor: dsdConfig,
                    metadataEditor: metadataConfig
                }, config));
            }
            else{
                log.error(Config.ERROR.NO_COUNTRY_CONFIG);
                this._dataManagementDefaultInit()
            }
        }
        else{
            this._dataManagementDefaultInit()
        }
    };

    DataManagement.prototype._dataManagementDefaultInit = function (COUNTRY_CODE) {

        var metadataConfig = DMConfigMetadataEditor;
        var dataMng = new FenixDataManagement($.extend(true, {
            environment: s.environment,
            el: s.DATA_MNG,
            cache: s.cache,
            lang: s.lang,
            metadataEditor: metadataConfig
        }));
    };

    //style
    DataManagement.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require("bootstrap-loader");

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

    };

    return new DataManagement();
});