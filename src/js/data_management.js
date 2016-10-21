define([
    "jquery",
    "../config/data_management_dsdEditor",
    "../config/data_management_metadataEditor",
    "../config/data_management",
    "fenix-ui-data-management",
    "../js/parser"
], function ($, DMConfigDsdEditor, DMConfigMetadataEditor, DMConfig, FenixDataManagement, Parser) {

    var s = {
            DATA_MNG: "#data-mng",
            cache : false,
            lang : "EN",
            environment : "develop",
            url : ''
            //url : 'http://example.com:3000/pathname/?country=AFG'
    };

    function DataManagement(){

        this._importThirdPartyCss();
        s.url = window.location.href;
        console.log(s.url)
        var obj = {url : s.url};
        var parsedUrl = new Parser(obj)._parseURL();
        var COUNTRY_CODE = parsedUrl.searchObject.country;
        this._dataManagementInit(COUNTRY_CODE);
    }

    DataManagement.prototype._dataManagementInit = function (COUNTRY_CODE) {

        var dsdConfig = DMConfigDsdEditor;
        var metadataConfig = DMConfigMetadataEditor;
        var config = DMConfig[COUNTRY_CODE];

        var dataMng = new FenixDataManagement($.extend(true, {
            environment: s.environment,
            el: s.DATA_MNG,
            cache: s.cache,
            lang: s.lang,
            dsdEditor: dsdConfig,
            metadataEditor: metadataConfig
        }, config));
    };

    //style
    DataManagement.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require("bootstrap-loader");

        //dropdown selector
        require("../../node_modules/selectize/dist/css/selectize.bootstrap3.css");

        // fenix-ui-filter
        require("../../node_modules/fenix-ui-filter/dist/fenix-ui-filter.min.css");
        // fenix-ui-dropdown
        require("../../node_modules/fenix-ui-dropdown/dist/fenix-ui-dropdown.min.css");

        // bootstrap-table
        // require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");

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

    return new DataManagement();
});