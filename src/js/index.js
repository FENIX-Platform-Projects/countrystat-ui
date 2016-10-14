define([
    "jquery",
    "fenix-ui-analysis"
], function ($, Analysis) {

    function App(){

        this._analysisInit();

    }

    App.prototype._analysisInit = function () {

        var analysis = new Analysis({
            el: '#fx-analysis-container'
        });
    };


    return App;
});