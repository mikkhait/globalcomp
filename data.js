const compensationData = {
    exchangeRates: {
        USD: 1.0,    // Base currency
        EUR: 0.92,   // Updated EUR/USD rate (March 2024)
        PLN: 0.25,   // Updated PLN/USD rate (March 2024)
        UAH: 0.023,  // Updated UAH/USD rate (March 2024)
        CAD: 0.74,   // Updated CAD/USD rate (March 2024)
        GBP: 1.27,   // Updated GBP/USD rate (March 2024)
    },
    
    currencySymbols: {
        USD: '$',
        EUR: '€',
        PLN: 'zł',
        UAH: '₴',
        CAD: 'C$',
        GBP: '£'
    },

    countryToCurrency: {
        usa: 'USD',
        spain: 'EUR',
        poland: 'PLN',
        ukraine: 'UAH',
        slovakia: 'EUR',
        canada: 'CAD',
        wales: 'GBP',
        lithuania: 'EUR',
        germany: 'EUR',
        uk: 'GBP',
        croatia: 'EUR'
    },
    
    costOfLiving: {
        lithuania: {
            index: 45.2,  // Updated index (Numbeo, 2024)
            rent: {
                min: 600,
                max: 1200
            },
            details: {
                meal: 10, // Updated meal cost
                transport: 40, // Updated transport cost
                utilities: 170 // Updated utilities cost
            }
        },
        spain: {
            index: 53.8, // Updated index (Numbeo, 2024)
            rent: {
                min: 800,
                max: 1600
            },
            details: {
                meal: 12, // Updated meal cost
                transport: 45, // Updated transport cost
                utilities: 140 // Updated utilities cost
            }
        },
        poland: {
            index: 40.5,  // Updated index (Numbeo, March 2024)
            rent: {
                min: 2500,
                max: 4500
            },
            details: {
                meal: 35, // Updated meal cost
                transport: 110, // Monthly public transport pass
                utilities: 750 // Basic utilities monthly
            }
        },
        canada: {
            index: 70.2, // Updated index (Numbeo, 2024)
            rent: {
                min: 1900,
                max: 2700
            },
            details: {
                meal: 25, // Updated meal cost
                transport: 130, // Updated transport cost
                utilities: 200 // Updated utilities cost
            }
        },
        ukraine: {
            index: 30.2,
            rent: {
                min: 12000,
                max: 25000
            },
            details: {
                meal: 250,
                transport: 500,
                utilities: 2200    // Updated based on recent data
            },
            taxRates: {           // Adding missing tax rates
                incomeTax: 0.18,
                socialSecurity: 0.05,
                other: 0.015
            }
        },
        slovakia: {
            index: 44.7, // Updated index (Numbeo, 2024)
            rent: {
                min: 650,
                max: 950
            },
            details: {
                meal: 9, // Updated meal cost
                transport: 35, // Updated transport cost
                utilities: 180 // Updated utilities cost
            }
        },
        wales: {
            index: 60.5, // Updated index (Numbeo, 2024)
            rent: {
                min: 1200,
                max: 2500
            },
            details: {
                meal: 15, // Updated meal cost
                transport: 170, // Monthly public transport pass
                utilities: 195 // Basic utilities monthly
            }
        },
        usa: {
            index: 71.5,  // Updated index (Numbeo, March 2024)
            rent: {
                min: 1800,
                max: 3500
            },
            details: {
                meal: 18, // Updated average meal cost
                transport: 120, // Monthly public transport pass
                utilities: 190 // Basic utilities monthly
            }
        },
        germany: {
            index: 65.26,
            rent: {
                min: 800,
                max: 1500
            },
            details: {
                meal: 12.5,
                transport: 80,
                utilities: 250
            },
            taxRates: {
                incomeTax: 0.42,
                socialSecurity: 0.20,
                other: 0.01
            }
        },
        uk: {
            index: 75.27,
            rent: {
                min: 700,
                max: 1200
            },
            details: {
                meal: 15, 
                transport: 125,
                utilities: 200
            },
            taxRates: {
                incomeTax: 0.20,
                socialSecurity: 0.12,
                other: 0.02
            }
        },
        croatia: {
            index: 49.8, // Updated index (Numbeo, 2024)
            rent: {
                min: 500,
                max: 800
            },
            details: {
                meal: 12, // Updated meal cost
                transport: 45, // Updated transport cost
                utilities: 200 // Updated utilities cost
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
                        min: 24000, // Updated salary range
                        max: 36000  // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 36000, // Updated salary range
                        max: 48000  // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 48000, // Updated salary range
                        max: 60000  // Updated salary range
                    }
                },
                L5: {
                    experience: "8+ years",
                    employee: {
                        min: 60000, // Updated salary range
                        max: 72000  // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 72000, // Updated salary range
                        max: 84000  // Updated salary range
                    }
                }
            },
            notes: "Lithuania's IT sector is growing rapidly, with increasing demand for skilled professionals. Remote work opportunities are also on the rise."
        },
        usa: {
            currency: "USD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 95000,    // Updated entry-level salary
                        max: 135000    // Updated based on recent data
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 130000,   // Updated mid-level salary
                        max: 180000    // Updated based on recent data
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 160000,   // Updated senior-level salary
                        max: 220000    // Updated based on recent data
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 200000,   // Updated staff-level salary
                        max: 280000    // Updated based on recent data
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 250000,   // Updated principal-level salary
                        max: 350000    // Updated based on recent data
                    }
                }
            },
            notes: "Salaries vary significantly by location and company size. Top tech companies and Silicon Valley/NYC typically offer 30-50% higher. Remote work policies often include location-based adjustments."
        },
        spain: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 38000,  // Updated salary range
                        max: 48000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 48000,  // Updated salary range
                        max: 60000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 60000,  // Updated salary range
                        max: 75000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 75000,  // Updated salary range
                        max: 90000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 90000,  // Updated salary range
                        max: 110000  // Updated salary range
                    }
                }
            },
            notes: "Salaries in Spain include 14 monthly payments. The tech industry is growing, particularly in hubs like Barcelona and Madrid."
        },
        poland: {
            currency: "PLN",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 100000, // Updated salary range
                        max: 130000  // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 130000, // Updated salary range
                        max: 190000  // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 160000, // Updated salary range
                        max: 210000  // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 210000, // Updated salary range
                        max: 270000  // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 270000, // Updated salary range
                        max: 330000  // Updated salary range
                    }
                }
            },
            notes: "Poland's IT sector is booming, with a large talent pool and competitive salaries. Remote work for international companies is increasingly common."
        },
        canada: {
            currency: "CAD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 70000,  // Updated salary range
                        max: 90000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 90000,  // Updated salary range
                        max: 120000  // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 120000, // Updated salary range
                        max: 150000  // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 150000, // Updated salary range
                        max: 200000  // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 200000, // Updated salary range
                        max: 250000  // Updated salary range
                    }
                }
            },
            notes: "Canadian tech hubs like Toronto, Vancouver, and Montreal offer competitive salaries. Benefits typically include health insurance and retirement plans."
        },
        ukraine: {
            currency: "UAH",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 480000,    // ~$12,500 USD annually
                        max: 720000     // ~$18,700 USD annually
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 840000,    // ~$21,800 USD annually
                        max: 1200000    // ~$31,200 USD annually
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 1320000,   // ~$34,300 USD annually
                        max: 1800000    // ~$46,800 USD annually
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 1920000,   // ~$50,000 USD annually
                        max: 2400000    // ~$62,400 USD annually
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 2640000,   // ~$68,600 USD annually
                        max: 3600000    // ~$93,600 USD annually
                    }
                }
            },
            notes: "Salaries are for US-based companies hiring in Ukraine. Local companies typically offer 30-50% lower. Strong tech talent pool, particularly in Kyiv, Lviv, and Kharkiv. Many developers work as private entrepreneurs (FOP) for tax optimization."
        },
        slovakia: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 33000,  // Updated salary range
                        max: 44000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 44000,  // Updated salary range
                        max: 58000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 58000,  // Updated salary range
                        max: 75000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 75000,  // Updated salary range
                        max: 90000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 90000,  // Updated salary range
                        max: 110000  // Updated salary range
                    }
                }
            },
            notes: "Slovakia offers competitive salaries within the EU, particularly in the growing tech sector. Living costs are relatively lower than in Western Europe."
        },
        wales: {
            currency: "GBP",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 38000,  // Updated salary range
                        max: 48000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 48000,  // Updated salary range
                        max: 65000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 65000,  // Updated salary range
                        max: 80000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 80000,  // Updated salary range
                        max: 95000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 95000,  // Updated salary range
                        max: 120000  // Updated salary range
                    }
                }
            },
            notes: "Salaries in Wales are competitive within the UK, with a growing tech sector. Living costs are generally lower than in London."
        },
        croatia: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 20000,  // Updated salary range
                        max: 30000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 30000,  // Updated salary range
                        max: 40000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 40000,  // Updated salary range
                        max: 50000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 50000,  // Updated salary range
                        max: 60000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 60000,  // Updated salary range
                        max: 70000   // Updated salary range
                    }
                }
            },
            notes: "Croatia's IT sector is developing, with a focus on outsourcing and nearshoring. Salaries are competitive within the region."
        },
        germany: {
            currency: "EUR",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 50000,    // Updated entry-level salary
                        max: 65000     // Updated based on recent data
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 65000,    // Updated mid-level salary
                        max: 85000     // Updated based on recent data
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 85000,    // Updated senior-level salary
                        max: 110000    // Updated based on recent data
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 110000,   // Updated staff-level salary
                        max: 140000    // Updated based on recent data
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 140000,   // Updated principal-level salary
                        max: 180000    // Updated based on recent data
                    }
                }
            },
            notes: "Salaries include 13th month pay. Strong benefits package including ~30 days vacation, health insurance, and pension contributions.",
            taxRates: {
                incomeTax: 0.42,
                socialSecurity: 0.20,
                other: 0.01
            }
        },
        uk: {
            currency: "GBP",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 38000,  // Updated salary range
                        max: 48000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 48000,  // Updated salary range
                        max: 65000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 65000,  // Updated salary range
                        max: 80000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 80000,  // Updated salary range
                        max: 95000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 95000,  // Updated salary range
                        max: 120000  // Updated salary range
                    }
                }
            },
            notes: "Salaries in the UK are competitive within the region, with a growing tech sector. Living costs are generally lower than in London.",
            taxRates: {
                incomeTax: 0.20,
                socialSecurity: 0.12,
                other: 0.02
            }
        }
    },
    
    companyOverhead: {
        fixedCosts: {
            baseAmount: 800,  // Updated monthly fixed costs per employee
            description: "Base overhead includes workspace, equipment, software licenses, remote work tools, cybersecurity measures, and increased compliance costs"
        },
        countrySpecific: {
            usa: {
                employerTax: 0.0765,  // FICA
                workersComp: 0.02,    // Updated workers comp rate
                otherFees: 0.04,      // Updated other fees
                description: "Includes FICA (7.65%), workers compensation, and state-specific fees"
            },
            spain: {
                employerTax: 0.298,  // Social Security contributions
                workersComp: 0.015,  // Work accident insurance
                otherFees: 0.03,     // Other contributions (e.g., unemployment, training)
                description: "Includes Social Security contributions, work accident insurance, unemployment fund, and other mandatory contributions"
            },
            poland: {
                employerTax: 0.205,  // Social contributions (ZUS)
                workersComp: 0.0167, // Accident insurance
                otherFees: 0.025,    // Other contributions (e.g., Labour Fund, Employee Guaranteed Benefits Fund)
                description: "Includes ZUS contributions (pension, disability, sickness, health), accident insurance, and other mandatory contributions"
            },
            ukraine: {
                employerTax: 0.22,   // Unified Social Contribution (USC)
                workersComp: 0.01,   // Occupational risk insurance (depending on risk class)
                otherFees: 0.01,     // Other contributions (e.g., military levy)
                description: "Includes Unified Social Contribution, occupational risk insurance, military levy, and other mandatory contributions"
            },
            slovakia: {
                employerTax: 0.352,  // Social and health insurance
                workersComp: 0.008,  // Accident insurance
                otherFees: 0.01,     // Other contributions (e.g., guarantee fund, reserve fund)
                description: "Includes social and health insurance contributions, accident insurance, and other mandatory contributions"
            },
            canada: {
                employerTax: 0.0545, // Canada Pension Plan (CPP) + Employment Insurance (EI)
                workersComp: 0.02,   // Workers' compensation (varies by province)
                otherFees: 0.025,    // Other contributions (e.g., provincial payroll taxes, health premiums)
                description: "Includes CPP and EI contributions, provincial workers' compensation, and other provincial taxes and premiums"
            },
            wales: {
                employerTax: 0.138,  // National Insurance contributions (Class 1)
                workersComp: 0.01,   // Employers' liability insurance
                otherFees: 0.025,    // Other contributions (e.g., pension contributions, apprenticeship levy)
                description: "Includes National Insurance contributions, employers' liability insurance, pension contributions, and other mandatory contributions"
            },
            lithuania: {
                employerTax: 0.3118, // Social insurance contributions (Sodra)
                workersComp: 0.0016, // Guarantee fund contribution
                otherFees: 0.01,     // Other contributions (e.g., long-term unemployment insurance)
                description: "Includes Sodra contributions (pension, sickness, maternity, unemployment), guarantee fund contribution, and other mandatory contributions"
            },
            croatia: {
                employerTax: 0.165,  // Health insurance contribution
                workersComp: 0.005,  // Special contribution for health protection at work
                otherFees: 0.02,     // Other contributions (e.g., employment contribution)
                description: "Includes health insurance contribution, special contribution for health protection at work, employment contribution, and other mandatory contributions"
            },
            germany: {
                employerTax: 0.21,    // Updated social security contribution
                workersComp: 0.015,   // Updated accident insurance
                otherFees: 0.03,      // Updated other fees
                description: "Includes social security contributions, accident insurance, and other mandatory benefits"
            }
        }
    },
    
    levels: {
        L2: {
            title: "Junior Engineer",
            experience: "0-2 years",
            responsibilities: [
                "Write maintainable and well-tested code",
                "Debug and fix bugs",
                "Participate in code reviews",
                "Write unit tests",
                "Document code and processes"
            ],
            impact: [
                "Delivers assigned tasks on schedule",
                "Contributes to team discussions",
                "Learns and applies team practices",
                "Grows technical skills consistently"
            ]
        },
        L3: {
            title: "Mid-Level Engineer",
            experience: "2-5 years",
            responsibilities: [
                "Design and implement features independently",
                "Review code from junior engineers",
                "Contribute to technical design discussions",
                "Improve development processes",
                "Write technical documentation"
            ],
            impact: [
                "Owns small to medium features end-to-end",
                "Mentors junior engineers",
                "Contributes to team planning",
                "Identifies and resolves technical debt"
            ]
        },
        L4: {
            title: "Senior Engineer",
            experience: "5-8 years",
            responsibilities: [
                "Design and implement complex systems",
                "Lead technical design discussions",
                "Drive best practices adoption",
                "Mentor other engineers",
                "Contribute to technical strategy"
            ],
            impact: [
                "Owns large features and projects",
                "Influences team technical decisions",
                "Drives engineering excellence",
                "Resolves complex technical challenges"
            ]
        },
        L5: {
            title: "Staff Engineer",
            experience: "8-12 years",
            responsibilities: [
                "Architect system-wide solutions",
                "Drive technical strategy",
                "Lead multiple projects simultaneously",
                "Establish engineering standards",
                "Guide technical decision-making"
            ],
            impact: [
                "Influences organization-wide decisions",
                "Drives innovation and best practices",
                "Mentors senior engineers",
                "Resolves critical technical challenges"
            ]
        },
        L6: {
            title: "Principal Engineer",
            experience: "12+ years",
            responsibilities: [
                "Define technical vision",
                "Lead organization-wide initiatives",
                "Drive architectural decisions",
                "Establish technical governance",
                "Guide long-term technical strategy"
            ],
            impact: [
                "Shapes company technical direction",
                "Influences product strategy",
                "Drives engineering culture",
                "Resolves strategic technical challenges"
            ]
        }
    }
}; 