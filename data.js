const compensationData = {
    exchangeRates: {
        USD: 1.0,  // Base currency
        EUR: 1.09,  // 1 EUR to USD
        PLN: 0.25,  // 1 PLN to USD
        UAH: 0.027, // 1 UAH to USD
        CAD: 0.74,  // 1 CAD to USD
        GBP: 1.27  // 1 HRK to USD (approximate)
    },
    
    costOfLiving: {
        lithuania: {
            index: 31.0, // Cost of living index (New York = 100)
            rent: "€400-800", // Average monthly rent for 1-bed apartment in city center
            details: {
                meal: "€5",
                transport: "€30",
                utilities: "€100"
            }
        },
        spain: {
            index: 54.12, // Cost of living index (New York = 100)
            rent: "€850-1500", // Average monthly rent for 1-bed apartment in city center
            details: {
                meal: "€12",
                transport: "€45",
                utilities: "€130"
            }
        },
        poland: {
            index: 41.89,
            rent: "2,500-4,000 PLN",
            details: {
                meal: "35 PLN",
                transport: "120 PLN",
                utilities: "750 PLN"
            }
        },
        canada: {
            index: 71.45,
            rent: "CAD 1,800-2,500",
            details: {
                meal: "CAD 20",
                transport: "CAD 150",
                utilities: "CAD 180"
            }
        },
        ukraine: {
            index: 30.83,
            rent: "12,000-20,000 UAH",
            details: {
                meal: "200 UAH",
                transport: "500 UAH",
                utilities: "3,000 UAH"
            }
        },
        slovakia: {
            index: 45.65,
            rent: "€600-900",
            details: {
                meal: "€8",
                transport: "€30",
                utilities: "€160"
            }
        },
        wales: {
            index: 65.23,  // Cost of living index (New York = 100)
            rent: "£600-900",  // Average monthly rent for 1-bed apartment in city center
            details: {
                meal: "£12",
                transport: "£65",
                utilities: "£150"
            }
        },
        usa: {
            index: 100,  // Base index (New York)
            rent: "$2,500-3,500",
            details: {
                meal: "$20",
                transport: "$130",
                utilities: "$200"
            }
        },
        croatia: {
            index: 40.00, // Cost of living index (New York = 100)
            rent: "HRK 3,000-5,000", // Average monthly rent for 1-bed apartment in city center
            details: {
                meal: "HRK 50",
                transport: "HRK 30",
                utilities: "HRK 800"
            }
        }
    },
    
    countries: {
        lithuania: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 20000,
                        max: 30000
                    }
                },
                L3: {
                    experience: "2-5 years", 
                    employee: {
                        min: 30000,
                        max: 40000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 40000,
                        max: 50000
                    }
                },
                L5: {
                    experience: "8+ years",
                    employee: {
                        min: 50000,
                        max: 60000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 60000,
                        max: 70000
                    }
                }
            },
        },
        usa: {
            currency: "USD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 90000,
                        max: 120000
                    },
                    responsibilities: [
                        "Write maintainable code",
                        "Debug and fix bugs",
                        "Participate in code reviews",
                        "Document code and processes"
                    ],
                    impact: [
                        "Contributes to team goals",
                        "Delivers tasks on time",
                        "Learns from feedback"
                    ]
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 120000,
                        max: 150000
                    },
                    responsibilities: [
                        "Design and implement features",
                        "Mentor junior developers",
                        "Participate in architectural discussions"
                    ],
                    impact: [
                        "Leads small projects",
                        "Influences team practices",
                        "Contributes to product direction"
                    ]
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 150000,
                        max: 180000
                    },
                    responsibilities: [
                        "Architect complex systems",
                        "Lead technical discussions",
                        "Drive best practices in coding"
                    ],
                    impact: [
                        "Shapes team culture",
                        "Leads cross-team initiatives",
                        "Drives significant product features"
                    ]
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 180000,
                        max: 220000
                    },
                    responsibilities: [
                        "Define technical strategy",
                        "Mentor senior engineers",
                        "Oversee multiple projects"
                    ],
                    impact: [
                        "Influences company direction",
                        "Drives innovation",
                        "Represents engineering in leadership"
                    ]
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 220000,
                        max: 260000
                    },
                    responsibilities: [
                        "Set vision for engineering",
                        "Lead large-scale initiatives",
                        "Shape organizational strategy"
                    ],
                    impact: [
                        "Drives company-wide change",
                        "Influences industry standards",
                        "Acts as a thought leader"
                    ]
                }
            },
            notes: "Salaries vary significantly by location. Silicon Valley and NYC typically offer 20-30% higher."
        },
        spain: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 35000,
                        max: 45000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 45000,
                        max: 55000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 55000,
                        max: 70000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 70000,
                        max: 85000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 85000,
                        max: 100000
                    }
                }
            },
            notes: "Salaries in Spain include 14 monthly payments."
        },
        poland: {
            currency: "PLN",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 72000,
                        max: 96000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 96000,
                        max: 144000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 144000,
                        max: 180000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 180000,
                        max: 240000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 240000,
                        max: 300000
                    }
                }
            },
            notes: "Polish IT sector offers competitive salaries with lower living costs compared to Western Europe."
        },
        canada: {
            currency: "CAD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 65000,
                        max: 85000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 85000,
                        max: 110000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 110000,
                        max: 140000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 145000,
                        max: 190000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 190000,
                        max: 230000
                    }
                }
            },
            notes: "Canadian tech hubs like Toronto offer competitive salaries. Benefits typically include health insurance and retirement plans."
        },
        ukraine: {
            currency: "USD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 12000,
                        max: 14000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 18000,
                        max: 24000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 36000,
                        max: 48000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 48000,
                        max: 60000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 60000,
                        max: 72000
                    }
                }
            },
            notes: "Ukraine has a growing IT sector with competitive rates for international clients."
        },
        slovakia: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 30000,
                        max: 40000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 40000,
                        max: 55000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 55000,
                        max: 70000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 70000,
                        max: 85000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 85000,
                        max: 100000
                    }
                }
            },
            notes: "Slovakia offers competitive salaries in the EU context with lower living costs than Western Europe."
        },
        wales: {
            currency: "GBP",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 35000,
                        max: 45000
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 45000,
                        max: 60000
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 60000,
                        max: 75000
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 75000,
                        max: 90000
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 90000,
                        max: 110000
                    }
                }
            },
            notes: "Salaries in Wales are typically 5-6% lower than London rates but come with lower living costs."
        },
        croatia: {
            currency: "HRK",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 60000,
                        max: 80000
                    },
                    responsibilities: [
                        "Assist in software development",
                        "Participate in code reviews",
                        "Write documentation"
                    ],
                    impact: [
                        "Contributes to team projects",
                        "Learns from senior developers"
                    ]
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 80000,
                        max: 100000
                    },
                    responsibilities: [
                        "Design and implement features",
                        "Mentor junior developers",
                        "Participate in architectural discussions"
                    ],
                    impact: [
                        "Leads small projects",
                        "Influences team practices"
                    ]
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 100000,
                        max: 120000
                    },
                    responsibilities: [
                        "Architect complex systems",
                        "Lead technical discussions"
                    ],
                    impact: [
                        "Shapes team culture",
                        "Leads cross-team initiatives"
                    ]
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 120000,
                        max: 140000
                    },
                    responsibilities: [
                        "Define technical strategy",
                        "Mentor senior engineers"
                    ],
                    impact: [
                        "Influences company direction",
                        "Drives innovation"
                    ]
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 140000,
                        max: 160000
                    },
                    responsibilities: [
                        "Set vision for engineering",
                        "Lead large-scale initiatives"
                    ],
                    impact: [
                        "Drives company-wide change",
                        "Acts as a thought leader"
                    ]
                }
            },
            notes: "Salaries in Croatia are competitive within the region, with a lower cost of living compared to Western Europe."
        }
    }
}; 