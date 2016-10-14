define([
    "jquery",
    "../config/analysis-config",
    "fenix-ui-analysis"
], function ($, AnalysisConfig, Analysis) {

    function App(){

        var COUNTRY_CODE = 'COG'; //Congo

        this._analysisInit(COUNTRY_CODE);
    }

    App.prototype._analysisInit = function (COUNTRY_CODE) {

        var analysis = new Analysis({
            el: '#fx-analysis-container',

            //all components
            cache : false,
            environment: "production",

            catalog : AnalysisConfig[COUNTRY_CODE].catalog
        });
    };

    return App;
});