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

        var config = AnalysisConfig[COUNTRY_CODE];
        console.log(config)
        var analysis = new Analysis(config);
    };

    return App;
});