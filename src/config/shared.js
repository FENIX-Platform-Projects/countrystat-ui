/*global define*/

define(function () {

    "use strict";

    return {
        //Afghanistan AFG
        "AFG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_afg", label: "CountrySTAT Afghanistan"}
                            ],
                            default: ["cstat_afg"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_afg"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_afg", label: "CountrySTAT Afghanistan"}
                            ],
                            default: ["cstat_afg"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_afg"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_afg",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Angola AGO
        "AGO": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ago", label: "CountrySTAT Angola"}
                            ],
                            default: ["cstat_ago"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ago"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ago", label: "CountrySTAT Angola"}
                            ],
                            default: ["cstat_ago"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ago"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_ago",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Azerbaijan AZE
        "AZE": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_aze", label: "CountrySTAT Azerbaijan"}
                            ],
                            default: ["cstat_aze"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_aze"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_aze", label: "CountrySTAT Azerbaijan"}
                            ],
                            default: ["cstat_aze"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_aze"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_aze",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Benin BEN
        "BEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ben", label: "CountrySTAT Benin"}
                            ],
                            default: ["cstat_ben"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ben"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ben", label: "CountrySTAT Benin"}
                            ],
                            default: ["cstat_ben"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ben"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_ben",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Burkina Faso BFA
        "BFA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_bfa", label: "CountrySTAT Burkina Faso"}
                            ],
                            default: ["cstat_bfa"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_bfa"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_bfa", label: "CountrySTAT Burkina Faso"}
                            ],
                            default: ["cstat_bfa"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_bfa"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_bfa",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Cameroon CMR
        "CMR": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_cmr", label: "CountrySTAT Cameroon"}
                            ],
                            default: ["cstat_cmr"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cmr"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_cmr", label: "CountrySTAT Cameroon"}
                            ],
                            default: ["cstat_cmr"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cmr"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_cmr",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Cote d’Ivoire CIV
        "CIV": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_civ", label: "CountrySTAT Cote d’Ivoire"}
                            ],
                            default: ["cstat_civ"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    },
                    referencePeriod: {
                        selector: {
                            id : "dropdown",
                            config: {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                            },
                            sort: function (a, b) {
                                var hash = {  9:1, 6:2, 4:3, 3:4, 14:5, 13:6, 12:7, 11:8, 10:9, 8:10, 7:11, 5:12, 2:13, 1:14 };
                                return hash[a.value] - hash[b.value];
                            }

                        },
                        cl : {
                            uid: "FAO_Period_cstat",
                            version: "1.0"
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_civ"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_civ", label: "CountrySTAT Cote d’Ivoire"}
                            ],
                            default: ["cstat_civ"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    },
                    referencePeriod: {
                        selector: {
                            id : "dropdown",
                            config: {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                            },
                            sort: function (a, b) {
                                var hash = {  9:1, 6:2, 4:3, 3:4, 14:5, 13:6, 12:7, 11:8, 10:9, 8:10, 7:11, 5:12, 2:13, 1:14 };
                                return hash[a.value] - hash[b.value];
                            }

                        },
                        cl : {
                            uid: "FAO_Period_cstat",
                            version: "1.0"
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_civ"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_civ",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Congo COG
        "COG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_cog", label: "CountrySTAT Congo"}
                            ],
                            default: ["cstat_cog"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cog"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_cog", label: "CountrySTAT Congo"}
                            ],
                            default: ["cstat_cog"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cog"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_cog",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "census",
                        "text": {
                            "EN": "Census Congo 1",
                            "FR": "Census Congo 1"
                        },
                        "codelistSubject": "census"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "Recensement2",
                        "text": {
                            "EN": "Census Congo 2",
                            "FR": "Census Congo 2"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Activités_agricoles",
                        "text": {
                            "EN": "Farm activities",
                            "FR": "Activités agricoles"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Activités_forestières",
                        "text": {
                            "EN": "Forestry activities",
                            "FR": "Activités forestières"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Alphabetisation",
                        "text": {
                            "EN": "Alphabetisation",
                            "FR": "Alphabetisation"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Approvisionement_en_eau",
                        "text": {
                            "EN": "Water supply",
                            "FR": "Approvisionement en eau"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Classe_de_distance",
                        "text": {
                            "EN": "Distance class",
                            "FR": "Classe de distance"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Difficultés_rencontrées",
                        "text": {
                            "EN": "Encountered difficulties",
                            "FR": "Difficultés rencontrées"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Distance",
                        "text": {
                            "EN": "Distance",
                            "FR": "Distance"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Equipments_agricoles",
                        "text": {
                            "EN": "Agricultural equipments",
                            "FR": "Equipments agricoles"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Existence",
                        "text": {
                            "EN": "Existence",
                            "FR": "Existence"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Group_Age",
                        "text": {
                            "EN": "Group Age",
                            "FR": "Group Age"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Indicateurs_Recensement",
                        "text": {
                            "EN": "Census Indicators",
                            "FR": "Indicateurs Recensement"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Main_d'oeuvre",
                        "text": {
                            "EN": "Workforce",
                            "FR": "Main d'oeuvre"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Matériel",
                        "text": {
                            "EN": "Equipment",
                            "FR": "Matériel"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Mode_de_faire_valoir",
                        "text": {
                            "EN": "How to claim",
                            "FR": "Mode de faire valoir"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Niveau_Instruction",
                        "text": {
                            "EN": "Level Instruction",
                            "FR": "Niveau Instruction"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Nombre_conjointes",
                        "text": {
                            "EN": "Number of joint",
                            "FR": "Nombre conjointes"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Nombre_de_champs_possédés",
                        "text": {
                            "EN": "Number of owned fields",
                            "FR": "Nombre de champs possédés"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Nombre_de_pieds",
                        "text": {
                            "EN": "Number of feet",
                            "FR": "Nombre de pieds"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Objectifs_de_production",
                        "text": {
                            "EN": "Production targets",
                            "FR": "Objectifs de production"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Oui_Non",
                        "text": {
                            "EN": "Yes No",
                            "FR": "Oui Non"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Répartition_exploitations",
                        "text": {
                            "EN": "Breakdown of holdings",
                            "FR": "Répartition exploitations"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Route_bitumée",
                        "text": {
                            "EN": "Bitumen road",
                            "FR": "Route bitumée"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Situation_Matrimoniale",
                        "text": {
                            "EN": "Marriage Situation",
                            "FR": "Situation Matrimoniale"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Source_éléctricité",
                        "text": {
                            "EN": "Source Electricity",
                            "FR": "Source éléctricité"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Superficie_cultivée",
                        "text": {
                            "EN": "Cultivated area",
                            "FR": "Superficie cultivée"
                        },
                        "subject": "census"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Taille_de_menage",
                        "text": {
                            "EN": "Household Size",
                            "FR": "Taille de menage"
                        },
                        "subject": "census"
                    }

                ]
            }
        },
        //Ethiopia ETH
        "ETH": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_eth", label: "CountrySTAT Ethiopia"}
                            ],
                            default: ["cstat_eth"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_eth"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_eth", label: "CountrySTAT Ethiopia"}
                            ],
                            default: ["cstat_eth"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_eth"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_eth",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL_Ethiopia|2014",
                        "text": {
                            "EN": "GAUL (Ethiopia)",
                            "FR": "GAUL (Ethiopie)"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Ghana GHA
        "GHA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gha", label: "CountrySTAT Ghana"}
                            ],
                            default: ["cstat_gha"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gha"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gha", label: "CountrySTAT Ghana"}
                            ],
                            default: ["cstat_gha"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gha"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_gha",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Gabon GAB
        "GAB": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gab", label: "CountrySTAT Gabon"}
                            ],
                            default: ["cstat_gab"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gab"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gab", label: "CountrySTAT Gabon"}
                            ],
                            default: ["cstat_gab"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gab"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_gab",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Guinea-Bissau GNB
        "GNB": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gnb", label: "CountrySTAT Guinea-Bissau"}
                            ],
                            default: ["cstat_gnb"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gnb"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_gnb", label: "CountrySTAT Guinea-Bissau"}
                            ],
                            default: ["cstat_gnb"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gnb"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_gnb",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Haiti HTI
        "HTI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_hti", label: "CountrySTAT Haiti"}
                            ],
                            default: ["cstat_hti"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_hti"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_hti", label: "CountrySTAT Haiti"}
                            ],
                            default: ["cstat_hti"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_hti"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_hti",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Kenya KEN
        "KEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ken", label: "CountrySTAT Kenya"}
                            ],
                            default: ["cstat_ken"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ken"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ken", label: "CountrySTAT Kenya"}
                            ],
                            default: ["cstat_ken"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ken"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_ken",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL_Kenya|2014",
                        "text": {
                            "EN": "GAUL (Kenya)",
                            "FR": "GAUL (Kenya)"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Madagascar MDG
        "MDG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mdg", label: "CountrySTAT Madagascar"}
                            ],
                            default: ["cstat_mdg"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mdg"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mdg", label: "CountrySTAT Madagascar"}
                            ],
                            default: ["cstat_mdg"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mdg"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_mdg",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Malawi MWI
        "MWI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mwi", label: "CountrySTAT Malawi"}
                            ],
                            default: ["cstat_mwi"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mwi"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mwi", label: "CountrySTAT Malawi"}
                            ],
                            default: ["cstat_mwi"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mwi"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_mwi",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Mali MLI
        "MLI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mli", label: "CountrySTAT Mali"}
                            ],
                            default: ["cstat_mli"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mli"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_mli", label: "CountrySTAT Mali"}
                            ],
                            default: ["cstat_mli"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mli"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_mli",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "FR",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Mozambique MOZ
        "MOZ": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_moz", label: "CountrySTAT Mozambique"}
                            ],
                            default: ["cstat_moz"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_moz"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_moz", label: "CountrySTAT Mozambique"}
                            ],
                            default: ["cstat_moz"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_moz"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_moz",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Niger NER
        "NER": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        id: 'dropdown',
                        selector: {
                            source: [
                                {value: "cstat_ner", label: "CountrySTAT Niger"}
                            ],
                            default: ["cstat_ner"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ner"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_ner", label: "CountrySTAT Niger"}
                            ],
                            default: ["cstat_ner"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ner"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_ner",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Nigeria NGA
        "NGA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_nga", label: "CountrySTAT Nigeria"}
                            ],
                            default: ["cstat_nga"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_nga"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_nga", label: "CountrySTAT Nigeria"}
                            ],
                            default: ["cstat_nga"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_nga"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_nga",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Rwanda RWA
        "RWA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_rwa", label: "CountrySTAT Rwanda"}
                            ],
                            default: ["cstat_rwa"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_rwa"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_rwa", label: "CountrySTAT Rwanda"}
                            ],
                            default: ["cstat_rwa"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_rwa"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_rwa",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Senegal SEN
        "SEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_sen", label: "CountrySTAT Senegal"}
                            ],
                            default: ["cstat_sen"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_sen"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_sen", label: "CountrySTAT Senegal"}
                            ],
                            default: ["cstat_sen"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_sen"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_sen",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Tanzania TZA
        "TZA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_tza", label: "CountrySTAT Tanzania"}
                            ],
                            default: ["cstat_tza"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tza"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_tza", label: "CountrySTAT Tanzania"}
                            ],
                            default: ["cstat_tza"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tza"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_tza",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Togo TGO
        "TGO": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_tgo", label: "CountrySTAT Togo"}
                            ],
                            default: ["cstat_tgo"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tgo"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_tgo", label: "CountrySTAT Togo"}
                            ],
                            default: ["cstat_tgo"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tgo"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_tgo",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Uganda UGA
        "UGA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_uga", label: "CountrySTAT Uganda"}
                            ],
                            default: ["cstat_uga"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_uga"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_uga", label: "CountrySTAT Uganda"}
                            ],
                            default: ["cstat_uga"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_uga"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_uga",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL_Uganda|2014",
                        "text": {
                            "EN": "GAUL (Uganda)",
                            "FR": "GAUL (Ouganda)"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Zambia ZMB
        "ZMB": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_zmb", label: "CountrySTAT Zambia"}
                            ],
                            default: ["cstat_zmb"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_zmb"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_zmb", label: "CountrySTAT Zambia"}
                            ],
                            default: ["cstat_zmb"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_zmb"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_zmb",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "agro_ecological_zones",
                        "text": {
                            "EN": "Agro-ecological zones",
                            "FR": "Zones agro-écologiques"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        },
        //Training TRAINING
        "TRAINING": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_training", label: "CountrySTAT Training"}
                            ],
                            default: ["cstat_training"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },
                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    },
                    referencePeriod: {
                        selector: {
                            id : "dropdown",
                            config: {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                            },
                            sort: function (a, b) {
                                var hash = {  9:1, 6:2, 4:3, 3:4, 14:5, 13:6, 12:7, 11:8, 10:9, 8:10, 7:11, 5:12, 2:13, 1:14 };
                                return hash[a.value] - hash[b.value];
                            }

                        },
                        cl : {
                            uid: "FAO_Period_cstat",
                            version: "1.0"
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_training"]},
                    "meAccessibility.seConfidentiality.confidentialityStatus" : {codes: [{uid : "CL_CONF_STATUS", version: "1.0", codes: ["F"]}]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            catalogDM: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            id: 'dropdown',
                            source: [
                                {value: "cstat_training", label: "CountrySTAT Training"}
                            ],
                            default: ["cstat_training"]
                        }
                    },
                    dataDomain: {
                        selector: {
                            id : "dropdown",
                            config : {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                                mode: "multi"
                            }
                        },
                        cl : {
                            uid:  "CSTAT_Core"
                        },

                        format : {
                            output : "codes",
                            metadataAttribute: "meContent.seCoverage.coverageSectors"
                        }

                    },
                    referencePeriod: {
                        selector: {
                            id : "dropdown",
                            config: {
                                plugins: ["remove_button"], //in combination with mode:"multi" create a "X" button to remove items
                            },
                            sort: function (a, b) {
                                var hash = {  9:1, 6:2, 4:3, 3:4, 14:5, 13:6, 12:7, 11:8, 10:9, 8:10, 7:11, 5:12, 2:13, 1:14 };
                                return hash[a.value] - hash[b.value];
                            }

                        },
                        cl : {
                            uid: "FAO_Period_cstat",
                            version: "1.0"
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_training"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["freeText", "dataDomain", "region", "referenceArea"],
                menuExcludedItems: ["accessibility"]
            },
            dsd : {
                MLEditor: {
                    langs: ["EN", "FR"]
                },
                contextSystem:"cstat_training",
                datasources:["D3S"],
                D3SConnector: { },
                lang: "EN",
                columnEditorReader: {
                    "dimension": [
                        {
                            "subject": "item",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "indicator",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "other",
                            "datatypes": [
                                "year"
                            ]
                        }
                    ],
                    "value": [
                        {
                            "subject": "value",
                            "datatypes": [
                                "number"
                            ]
                        }
                    ],
                    "other": [
                        {
                            "subject": "flag",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "um",
                            "datatypes": [
                                "code"
                            ]
                        }
                    ]
                },
                subjects: [
                    {
                        "value": "freesubject",
                        "text": {
                            "EN": "Free Subject",
                            "FR": "Sujet libre"
                        },
                        "codelistSubject": "freesubject"
                    },
                    {
                        "value": "item",
                        "text": {
                            "EN": "Item",
                            "FR": "Article"
                        },
                        "codelistSubject": "item"
                    },
                    {
                        "value": "indicator",
                        "text": {
                            "EN": "Indicator",
                            "FR": "Indicateur"
                        },
                        "codelistSubject": "indicator"
                    },
                    {
                        "value": "time",
                        "text": {
                            "EN": "Time",
                            "FR": "Temps"
                        }
                    },
                    {
                        "value": "geo",
                        "text": {
                            "EN": "Geo",
                            "FR": "Geo"
                        },
                        "codelistSubject": "geo"
                    },
                    {
                        "value": "flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "codelistSubject": "flag"
                    },
                    {
                        "value": "value",
                        "text": {
                            "EN": "Value",
                            "FR": "Valeur"
                        }
                    },
                    {
                        "value": "um",
                        "text": {
                            "EN": "UM",
                            "FR": "Unité"
                        },
                        "codelistSubject": "um"
                    }
                ],
                DSD_EDITOR_CODELISTS: [
                    {
                        "value": "GAUL|2014",
                        "text": {
                            "EN": "GAUL",
                            "FR": "GAUL"
                        },
                        "subject": "geo"
                    },
                    {
                        "value": "CPC|2.1",
                        "text": {
                            "EN": "CPC 2.1",
                            "FR": "CPC 2.1"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Flag",
                        "text": {
                            "EN": "Flag",
                            "FR": "Flag"
                        },
                        "subject": "flag"
                    },
                    {
                        "value": "CountrySTAT_Agricultural_Population",
                        "text": {
                            "EN": "Agricultural",
                            "FR": "Population agricole"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Field_Management",
                        "text": {
                            "EN": "Field Management",
                            "FR": "Gestion du terrain"
                        },
                        "subject": "fieldManagement"
                    },
                    {
                        "value": "CountrySTAT_Food",
                        "text": {
                            "EN": "Food",
                            "FR": "Alimentaire"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "CountrySTAT_Indicators",
                        "text": {
                            "EN": "CountrySTAT Indicators",
                            "FR": "Indicateurs de CountrySTAT"
                        },
                        "subject": "indicator"
                    },
                    {
                        "value": "HS|full",
                        "text": {
                            "EN": "HS Full",
                            "FR": "HS complet"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_UM",
                        "text": {
                            "EN": "CountrySTAT UM",
                            "FR": "CountrySTAT Unité de mesure"
                        },
                        "subject": "um"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products",
                        "text": {
                            "EN": "Fishery products",
                            "FR": "Produits de la pêche"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Forest_products",
                        "text": {
                            "EN": "Forest products",
                            "FR": "Produits forestiers"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "CountrySTAT_Fishery_products_scientific",
                        "text": {
                            "EN": "Fishery scientific products",
                            "FR": "Produits de la pêche - scientifiques"
                        },
                        "subject": "item"
                    },
                    {
                        "value": "Activités_agricoles",
                        "text": {
                            "EN": "Farm activities",
                            "FR": "Activités agricoles"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Activités_forestières",
                        "text": {
                            "EN": "Forestry activities",
                            "FR": "Activités forestières"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Alphabetisation",
                        "text": {
                            "EN": "Alphabetisation",
                            "FR": "Alphabetisation"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Approvisionement_en_eau",
                        "text": {
                            "EN": "Water supply",
                            "FR": "Approvisionement en eau"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Classe_de_distance",
                        "text": {
                            "EN": "Distance class",
                            "FR": "Classe de distance"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Difficultés_rencontrées",
                        "text": {
                            "EN": "Encountered difficulties",
                            "FR": "Difficultés rencontrées"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Distance",
                        "text": {
                            "EN": "Distance",
                            "FR": "Distance"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Equipments_agricoles",
                        "text": {
                            "EN": "Agricultural equipments",
                            "FR": "Equipments agricoles"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Existence",
                        "text": {
                            "EN": "Existence",
                            "FR": "Existence"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Group_Age",
                        "text": {
                            "EN": "Group Age",
                            "FR": "Group Age"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Indicateurs_Recensement",
                        "text": {
                            "EN": "Census Indicators",
                            "FR": "Indicateurs Recensement"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Main_d'oeuvre",
                        "text": {
                            "EN": "Workforce",
                            "FR": "Main d'oeuvre"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Matériel",
                        "text": {
                            "EN": "Equipment",
                            "FR": "Matériel"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Mode_de_faire_valoir",
                        "text": {
                            "EN": "How to claim",
                            "FR": "Mode de faire valoir"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Niveau_Instruction",
                        "text": {
                            "EN": "Level Instruction",
                            "FR": "Niveau Instruction"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Nombre_conjointes",
                        "text": {
                            "EN": "Number of joint",
                            "FR": "Nombre conjointes"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Nombre_de_champs_possédés",
                        "text": {
                            "EN": "Number of owned fields",
                            "FR": "Nombre de champs possédés"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Nombre_de_pieds",
                        "text": {
                            "EN": "Number of feet",
                            "FR": "Nombre de pieds"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Objectifs_de_production",
                        "text": {
                            "EN": "Production targets",
                            "FR": "Objectifs de production"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Oui_Non",
                        "text": {
                            "EN": "Yes No",
                            "FR": "Oui Non"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Répartition_exploitations",
                        "text": {
                            "EN": "Breakdown of holdings",
                            "FR": "Répartition exploitations"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Route_bitumée",
                        "text": {
                            "EN": "Bitumen road",
                            "FR": "Route bitumée"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Situation_Matrimoniale",
                        "text": {
                            "EN": "Marriage Situation",
                            "FR": "Situation Matrimoniale"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Source_éléctricité",
                        "text": {
                            "EN": "Source Electricity",
                            "FR": "Source éléctricité"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Superficie_cultivée",
                        "text": {
                            "EN": "Cultivated area",
                            "FR": "Superficie cultivée"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Taille_de_menage",
                        "text": {
                            "EN": "Household Size",
                            "FR": "Taille de menage"
                        },
                        "subject": "freesubject"
                    },
                    {
                        "value": "Size",
                        "text": {
                            "EN": "Size",
                            "FR": "Taille"
                        },
                        "subject": "freesubject"
                    }

                ]
            }
        }
    };
});
