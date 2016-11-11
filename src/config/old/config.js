/*global define*/
define(function () {

    'use strict';

    return {

        cache : false,
        lang : "EN",
        country : 'COG',

        environment : "production",

        analysisEl : "#fx-analysis-container",

        //Data management

        COUNTRY_ISO3_CODE : 'COG',
        ENVIROMENT_DEVELOP : "develop",
        ENVIROMENT_PROD : "production",

        dataManagementEl : "#data-mng",
        ANALYSIS_CONTENT : "#fx-analysis-container",


        ERROR :{
            NO_COUNTRY_CONFIG :'No configuration for the country',
            INVALID_COUNTRY_PARAM : "Country code in wrong format",
            NO_CURRENT_COUNTRY_CONFIG :'No configuration for the current country'
        }
    };
});
