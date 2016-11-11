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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_afg"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ago"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ben"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_bfa"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cmr"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_civ"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["referenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_cog"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_eth"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gha"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_gnb"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_hti"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ken"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ["MDGreferenceArea", "dataDomain"],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mdg"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mwi"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_mli"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_moz"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_ner"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_nga"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_rwa"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_sen"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tza"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_tgo"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_uga"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
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
                    },
                    dataDomain: {
                        cl: {
                            uid: "CountrySTAT_Indicators",
                            level: 1,
                            levels: 1
                        }
                    }
                },
                baseFilter: {
                    "dsd.contextSystem": {"enumeration": ["cstat_zmb"]},
                    "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
                },
                defaultSelectors: ['resourceType', 'contextSystem'],
                menuExcludedItems: ["accessibility"]
            }
        }
    }
});
