define([
    "jquery",
    "loglevel",
    "../config/config",
    "../config/shared",
    "../config/dsd",
    "../config/metadata",
    "../config/countries",
    "../nls/config",
    "fenix-ui-data-management"
], function ($, log, C, SC, DsdConfig, MetadataConfig, CountriesCode, Lang, DataManagement) {

    var s = {
        COUNTRY: 'data-country'
    };

    function DataMngPage() {

        console.clear();
        log.setLevel("silent");

        this._importThirdPartyCss();

        var c = {
            lang: C.forceLang || $("html").attr("lang") || C.lang,
            country: $(document.body).attr(s.COUNTRY) || ""
        };

        // force to be string and uppercase
        c.lang = String(c.lang).toUpperCase();
        c.country = String(c.country).toUpperCase();

        this._initDataManagement(c);
    }

    DataMngPage.prototype._initDataManagement = function (opts) {

        log.warn("Parsed configuration:");
        log.warn(opts);

        var config,
            country = opts.country;

        if (!SC.hasOwnProperty(country)) {
            log.warn("Impossible to find configuration for country: " + opts.country);
            country = C.country;
            log.warn("Using default country instead: " + C.country);
        }

        if (CountriesCode[country.toLowerCase()])
            MetadataConfig.sections.meContent.sections.seCoverage.selectors.coverageGeographic.selector = { id:"dropdown", "default": [CountriesCode[country.toLowerCase()]]}

        config ={
            el: C.dataManagementEl,
            cache: C.cache,
            environment: C.environment,
            lang: opts.lang,
            metadataEditor: MetadataConfig,
            dsdEditor: $.extend(true, SC[country].dsd, { contextSystem: "cstat_" + country.toLowerCase()}),
            catalog: $.extend(true, SC[country].catalog,
                    {hideCloseButton: true},
                    {pluginRegistry: {freeText:{template:{footer: Lang[opts.lang.toLowerCase()]['freeText.footer']}}}}
                ),
            config: {
                contextSystem: "cstat_" + country.toLowerCase(),
                datasources : ["D3S"],
                resourceRepresentationType: "dataset"
            }
        };

        log.warn(config.catalog.self);

        log.warn("Data management configuration: ");
        log.warn(config);

        this.dataMng = new DataManagement(config);
    };

    //style
    DataMngPage.prototype._importThirdPartyCss = function () {

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

    return new DataMngPage();
});