/*global define*/

define(function () {

    'use strict';

    return {

            "COG": {
                catalog : {
                    pluginRegistry: {
                        contextSystem: {
                            selector: {
                                source: [
                                    {value: "cstat_cog", label: "CountrySTAT Congo"}
                                ],
                                default: ["cstat_cog"]
                            }
                        },
                        dataDomain: {
                            cl : {
                                uid: "CountrySTAT_Indicators",
                                level : 1,
                                levels : 1
                            }
                        }
                    },
                    baseFilter: {
                        "dsd.contextSystem": {"enumeration": ["cstat_cog"]},
                        "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                    },
                    defaultSelectors: ["referenceArea", "dataDomain"],
                    menuExcludedItems : ["accessibility"]
                }
            }
    }
});
