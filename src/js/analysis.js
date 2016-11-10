define([
    "jquery",
    "loglevel",
    "../config/config",
    "../config/analysis",
    "fenix-ui-analysis"
], function ($, log, C, AC, Analysis) {

    var s = {
        COUNTRY: 'data-country'
    };

    function SearchAndVisualize() {

        this._importThirdPartyCss();
        
        var c = {
            lang : $("html").attr("lang") || C.LANG,
            country : $(document.body).attr(s.COUNTRY) || ""
        };
        
        // force to be string and uppercase
        c.lang = String(c.lang).toUpperCase();
        c.country = String(c.country).toUpperCase();
             
        this._initAnalysis(c);
    }

    SearchAndVisualize.prototype._initAnalysis = function (opts) {

        log.warn("Parsed configuration:");
        log.warn(opts);

        var config,
            country = opts.country;

        if (!AC.hasOwnProperty(country)) {
            log.warn("Impossible to find configuration for country: " + opts.country);
            country = C.country;
            log.warn("Using default country instead: " + C.country);
        }

        config = $.extend(true, {
            el: C.analysisEl,
            cache: C.cache,
            environment: C.environment,
            lang: opts.lang
        }, AC[country]);

        log.warn("Analysis configuration: ");
        log.warn(config);

        this.analysis = new Analysis(config);

    };

    SearchAndVisualize.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');

        //map
        require("../../node_modules/leaflet/dist/leaflet.css");

        //dropdown selector
        require("../../node_modules/selectize/dist/css/selectize.bootstrap3.css");
        //tree selector
        require("../../node_modules/jstree/dist/themes/default/style.min.css");
        // fenix-ui-filter
        require("../../node_modules/fenix-ui-filter/dist/fenix-ui-filter.min.css");

        // fenix-ui-dropdown
        require("../../node_modules/fenix-ui-dropdown/dist/fenix-ui-dropdown.min.css");

        // fenix-ui-table-creator
        require("../../node_modules/fenix-ui-table-creator/dist/fenix-ui-table-creator.min.css");

        // jquery-grid for fenix-ui-metadata-viewer
        require("../../node_modules/jquery-treegrid-webpack/css/jquery.treegrid.css");

        // bootstrap-table
        require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");
        // fenix-ui-catalog
        require("../../node_modules/fenix-ui-catalog/dist/fenix-ui-catalog.min.css");

        //fenix-ui-analysis
        require("../../node_modules/fenix-ui-analysis/dist/fenix-ui-analysis.min.css");

        // iDangerous swiper
        require("../../node_modules/swiper/dist/css/swiper.min.css");
        // fenix-ui-visualization-box
        require("../../node_modules/fenix-ui-visualization-box/dist/fenix-ui-visualization-box.min.css");

        //host override
        require('../css/countrystat-ui.css');

    };

    return new SearchAndVisualize();
});