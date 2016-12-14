/*global define*/

define(function () {

    'use strict';

    return {
        //Afghanistan AFG
        "AFG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_afg", label: "CountrySTAT Afghanistan"}
                            ],
                            default: ["cstat_afg"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Angola AGO
        "AGO": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_ago", label: "CountrySTAT Angola"}
                            ],
                            default: ["cstat_ago"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Benin BEN
        "BEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_ben", label: "CountrySTAT Benin"}
                            ],
                            default: ["cstat_ben"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Burkina Faso BFA
        "BFA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_bfa", label: "CountrySTAT Burkina Faso"}
                            ],
                            default: ["cstat_bfa"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Cameroon CMR
        "CMR": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_cmr", label: "CountrySTAT Cameroon"}
                            ],
                            default: ["cstat_cmr"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Cote d’Ivoire CIV
        "CIV": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_civ", label: "CountrySTAT Cote d’Ivoire"}
                            ],
                            default: ["cstat_civ"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Congo COG
        "COG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_cog", label: "CountrySTAT Congo"}
                            ],
                            default: ["cstat_cog"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
                            source: [
                                {value: "cstat_eth", label: "CountrySTAT Ethiopia"}
                            ],
                            default: ["cstat_eth"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Ghana GHA
        "GHA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_gha", label: "CountrySTAT Ghana"}
                            ],
                            default: ["cstat_gha"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Guinea-Bissau GNB
        "GNB": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_gnb", label: "CountrySTAT Guinea-Bissau"}
                            ],
                            default: ["cstat_gnb"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Haiti HTI
        "HTI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_hti", label: "CountrySTAT Haiti"}
                            ],
                            default: ["cstat_hti"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Kenya KEN
        "KEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_ken", label: "CountrySTAT Kenya"}
                            ],
                            default: ["cstat_ken"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Madagascar MDG
        "MDG": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_mdg", label: "CountrySTAT Madagascar"}
                            ],
                            default: ["cstat_mdg"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Malawi MWI
        "MWI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_mwi", label: "CountrySTAT Malawi"}
                            ],
                            default: ["cstat_mwi"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Mali MLI
        "MLI": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_mli", label: "CountrySTAT Mali"}
                            ],
                            default: ["cstat_mli"]
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
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Mozambique MOZ
        "MOZ": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_moz", label: "CountrySTAT Mozambique"}
                            ],
                            default: ["cstat_moz"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Niger NER
        "NER": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_ner", label: "CountrySTAT Niger"}
                            ],
                            default: ["cstat_ner"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Nigeria NGA
        "NGA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_nga", label: "CountrySTAT Nigeria"}
                            ],
                            default: ["cstat_nga"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Rwanda RWA
        "RWA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_rwa", label: "CountrySTAT Rwanda"}
                            ],
                            default: ["cstat_rwa"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Senegal SEN
        "SEN": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_sen", label: "CountrySTAT Senegal"}
                            ],
                            default: ["cstat_sen"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Tanzania TZA
        "TZA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_tza", label: "CountrySTAT Tanzania"}
                            ],
                            default: ["cstat_tza"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Togo TGO
        "TGO": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_tgo", label: "CountrySTAT Togo"}
                            ],
                            default: ["cstat_tgo"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Uganda UGA
        "UGA": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_uga", label: "CountrySTAT Uganda"}
                            ],
                            default: ["cstat_uga"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Zambia ZMB
        "ZMB": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_zmb", label: "CountrySTAT Zambia"}
                            ],
                            default: ["cstat_zmb"]
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
                        },
                        {
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
        //Training TRAINING
        "TRAINING": {
            catalog: {
                pluginRegistry: {
                    contextSystem: {
                        selector: {
                            source: [
                                {value: "cstat_training", label: "CountrySTAT Training"}
                            ],
                            default: ["cstat_training"]
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
                            "subject": "gender",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "residence",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "food",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "sector",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "fieldManagement",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "agriculturalPopulation",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "census",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "time",
                            "datatypes": [
                                "year",
                                "month",
                                "date"
                            ]
                        },
                        {
                            "subject": "geo",
                            "datatypes": [
                                "code"
                            ]
                        },
                        {
                            "subject": "undefined",
                            "datatypes": [
                                "code",
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
                        "subject": "agriculturalPopulation"
                    },
                    {
                        "value": "CountrySTAT_DAC",
                        "text": {
                            "EN": "DAC",
                            "FR": "DAC"
                        },
                        "subject": "sector"
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
                        "subject": "food"
                    },
                    {
                        "value": "CountrySTAT_Gender",
                        "text": {
                            "EN": "Gender",
                            "FR": "Genre"
                        },
                        "subject": "gender"
                    },
                    {
                        "value": "CountrySTAT_Residence",
                        "text": {
                            "EN": "Residence",
                            "FR": "Résidence"
                        },
                        "subject": "residence"
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
                        "value": "Taille_de_menage",
                        "text": {
                            "EN": "Household Size",
                            "FR": "Taille de menage"
                        },
                        "subject": "census"
                    }

                ]
            }
        }
    }
});
