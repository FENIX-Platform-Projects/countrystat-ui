/*global define*/
define(function () {

    'use strict';

    return {

        cache : false,
        lang : "EN", //default language
        //forceLang : "FR",
        country : 'TRAINING',
        environment : "production",
        analysisEl : "#fx-analysis-container",
        dataManagementEl : "#data-mng",
        cstat_contexts : [,
                {value: "cstat_afg", label: "CountrySTAT Afghanistan"},
                {value: "cstat_ago", label: "CountrySTAT Angola"},
                {value: "cstat_aze", label: "CountrySTAT Azerbaijan"},
                {value: "cstat_ben", label: "CountrySTAT Benin"},
                {value: "cstat_bfa", label: "CountrySTAT Burkina Faso"},
                {value: "cstat_cmr", label: "CountrySTAT Cameroon"},
                {value: "cstat_civ", label: "CountrySTAT Cote d’Ivoire"},
                {value: "cstat_cog", label: "CountrySTAT Congo"},
                {value: "cstat_eth", label: "CountrySTAT Ethiopia"},
                {value: "cstat_gha", label: "CountrySTAT Ghana"},
                {value: "cstat_gab", label: "CountrySTAT Gabon"},
                {value: "cstat_gnb", label: "CountrySTAT Guinea-Bissau"},
                {value: "cstat_hti", label: "CountrySTAT Haiti"},
                {value: "cstat_ken", label: "CountrySTAT Kenya"},
                {value: "cstat_lbr", label: "CountrySTAT Liberia"},
                {value: "cstat_mdg", label: "CountrySTAT Madagascar"},
                {value: "cstat_mwi", label: "CountrySTAT Malawi"},
                {value: "cstat_mli", label: "CountrySTAT Mali"},
                {value: "cstat_moz", label: "CountrySTAT Mozambique"},
                {value: "cstat_ner", label: "CountrySTAT Niger"},
                {value: "cstat_nga", label: "CountrySTAT Nigeria"},
                {value: "cstat_rwa", label: "CountrySTAT Rwanda"},
                {value: "cstat_sen", label: "CountrySTAT Senegal"},
                {value: "cstat_tza", label: "CountrySTAT Tanzania"},
                {value: "cstat_tgo", label: "CountrySTAT Togo"},
                {value: "cstat_uga", label: "CountrySTAT Uganda"},
                {value: "cstat_zmb", label: "CountrySTAT Zambia"},
                {value: "cstat_training", label: "CountrySTAT Training"}
            ]
    };
});
