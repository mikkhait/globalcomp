export const compensationData = {
    releaseNotes: [
        {
            version: "2.0.0",
            date: "March 2024",
            major: [
                "Added comprehensive role-based compensation data for Product Managers and Designers",
                "Introduced detailed level definitions and career progression paths for all roles",
                "Implemented role-specific salary comparison charts and insights"
            ],
            improvements: [
                "Enhanced UI with modern design and better user experience",
                "Updated salary ranges across all countries to reflect 2024 market conditions",
                "Added purchasing power comparison feature",
                "Improved cost of living data accuracy with local market adjustments"
            ],
            fixes: [
                "Corrected utilities costs for Ukraine to reflect actual market rates",
                "Standardized currency display formats across all calculations",
                "Fixed tax calculation edge cases for high income brackets",
                "Resolved data inconsistencies in role level transitions"
            ]
        },
        {
            version: "1.1.0",
            date: "January 2024",
            major: [
                "Introduced cost of living comparison feature",
                "Added comprehensive tax calculation system",
                "Implemented company overhead calculator"
            ],
            improvements: [
                "Enhanced data visualization with interactive charts",
                "Added support for custom tax rate configurations",
                "Improved salary range accuracy with local market data",
                "Added detailed breakdown of employer costs"
            ],
            fixes: [
                "Fixed exchange rate calculation issues",
                "Corrected social security calculation for EU countries",
                "Resolved mobile responsiveness issues"
            ]
        },
        {
            version: "1.0.0",
            date: "December 2023",
            major: [
                "Initial release of Global Compensation Calculator",
                "Support for 10 countries with detailed compensation data",
                "Basic salary calculator functionality"
            ],
            improvements: [
                "Implemented responsive design for all devices",
                "Added support for multiple experience levels",
                "Included cost of living indicators"
            ],
            fixes: [
                "Initial data validation and error handling",
                "Basic currency conversion implementation",
                "Core calculation engine stability"
            ]
        }
    ],
    
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
            roles: {
                engineer: {
                    L2: { min: 24000, max: 36000 },
                    L3: { min: 36000, max: 48000 },
                    L4: { min: 48000, max: 60000 },
                    L5: { min: 60000, max: 72000 },
                    L6: { min: 72000, max: 84000 }
                },
                pm: {
                    L2: { min: 22000, max: 32000 },
                    L3: { min: 32000, max: 45000 },
                    L4: { min: 45000, max: 58000 },
                    L5: { min: 58000, max: 70000 },
                    L6: { min: 70000, max: 85000 }
                },
                designer: {
                    L2: { min: 20000, max: 30000 },
                    L3: { min: 30000, max: 42000 },
                    L4: { min: 42000, max: 55000 },
                    L5: { min: 55000, max: 68000 },
                    L6: { min: 68000, max: 80000 }
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
            roles: {
                engineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 60000 },
                    L4: { min: 60000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 58000 },
                    L4: { min: 58000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 55000 },
                    L4: { min: 55000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Salaries in Spain include 14 monthly payments. The tech industry is growing, particularly in hubs like Barcelona and Madrid."
        },
        poland: {
            currency: "PLN",
            roles: {
                engineer: {
                    L2: { min: 100000, max: 130000 },
                    L3: { min: 130000, max: 190000 },
                    L4: { min: 160000, max: 210000 },
                    L5: { min: 210000, max: 270000 },
                    L6: { min: 270000, max: 330000 }
                },
                pm: {
                    L2: { min: 90000, max: 120000 },
                    L3: { min: 120000, max: 170000 },
                    L4: { min: 150000, max: 200000 },
                    L5: { min: 200000, max: 260000 },
                    L6: { min: 260000, max: 320000 }
                },
                designer: {
                    L2: { min: 85000, max: 115000 },
                    L3: { min: 115000, max: 165000 },
                    L4: { min: 145000, max: 195000 },
                    L5: { min: 195000, max: 250000 },
                    L6: { min: 250000, max: 310000 }
                }
            },
            notes: "Poland's IT sector is booming, with a large talent pool and competitive salaries. Remote work for international companies is increasingly common."
        },
        canada: {
            currency: "CAD",
            roles: {
                engineer: {
                    L2: { min: 70000, max: 90000 },
                    L3: { min: 90000, max: 120000 },
                    L4: { min: 120000, max: 150000 },
                    L5: { min: 150000, max: 200000 },
                    L6: { min: 200000, max: 250000 }
                },
                pm: {
                    L2: { min: 65000, max: 85000 },
                    L3: { min: 85000, max: 115000 },
                    L4: { min: 115000, max: 145000 },
                    L5: { min: 145000, max: 190000 },
                    L6: { min: 190000, max: 240000 }
                },
                designer: {
                    L2: { min: 60000, max: 80000 },
                    L3: { min: 80000, max: 110000 },
                    L4: { min: 110000, max: 140000 },
                    L5: { min: 140000, max: 180000 },
                    L6: { min: 180000, max: 230000 }
                }
            },
            notes: "Canadian tech hubs like Toronto, Vancouver, and Montreal offer competitive salaries. Benefits typically include health insurance and retirement plans."
        },
        ukraine: {
            currency: "UAH",
            roles: {
                engineer: {
                    L2: { min: 480000, max: 720000 },
                    L3: { min: 840000, max: 1200000 },
                    L4: { min: 1320000, max: 1800000 },
                    L5: { min: 1920000, max: 2400000 },
                    L6: { min: 2640000, max: 3600000 }
                },
                pm: {
                    L2: { min: 420000, max: 660000 },
                    L3: { min: 780000, max: 1140000 },
                    L4: { min: 1260000, max: 1740000 },
                    L5: { min: 1860000, max: 2340000 },
                    L6: { min: 2580000, max: 3300000 }
                },
                designer: {
                    L2: { min: 360000, max: 600000 },
                    L3: { min: 720000, max: 1080000 },
                    L4: { min: 1200000, max: 1680000 },
                    L5: { min: 1800000, max: 2280000 },
                    L6: { min: 2520000, max: 3240000 }
                }
            },
            notes: "Salaries are for US-based companies hiring in Ukraine. Local companies typically offer 30-50% lower. Strong tech talent pool, particularly in Kyiv, Lviv, and Kharkiv."
        },
        slovakia: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 33000, max: 44000 },
                    L3: { min: 44000, max: 58000 },
                    L4: { min: 58000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 30000, max: 40000 },
                    L3: { min: 40000, max: 55000 },
                    L4: { min: 55000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 28000, max: 38000 },
                    L3: { min: 38000, max: 52000 },
                    L4: { min: 52000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Slovakia offers competitive salaries within the EU, particularly in the growing tech sector. Living costs are relatively lower than in Western Europe."
        },
        wales: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 60000 },
                    L4: { min: 60000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 58000 },
                    L4: { min: 58000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 30000, max: 40000 },
                    L3: { min: 40000, max: 55000 },
                    L4: { min: 55000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Salaries in Wales are competitive, with lower living costs compared to other parts of the UK. Growing tech hub with good work-life balance."
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
            roles: {
                engineer: {
                    L2: { min: 50000, max: 65000 },
                    L3: { min: 65000, max: 85000 },
                    L4: { min: 85000, max: 110000 },
                    L5: { min: 110000, max: 140000 },
                    L6: { min: 140000, max: 180000 }
                },
                pm: {
                    L2: { min: 48000, max: 62000 },
                    L3: { min: 62000, max: 82000 },
                    L4: { min: 82000, max: 105000 },
                    L5: { min: 105000, max: 135000 },
                    L6: { min: 135000, max: 175000 }
                },
                designer: {
                    L2: { min: 45000, max: 60000 },
                    L3: { min: 60000, max: 80000 },
                    L4: { min: 80000, max: 100000 },
                    L5: { min: 100000, max: 130000 },
                    L6: { min: 130000, max: 170000 }
                }
            },
            notes: "Salaries include 13th month pay. Strong benefits package including ~30 days vacation, health insurance, and pension contributions."
        },
        uk: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 65000 },
                    L4: { min: 65000, max: 80000 },
                    L5: { min: 80000, max: 95000 },
                    L6: { min: 95000, max: 120000 }
                },
                pm: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 62000 },
                    L4: { min: 62000, max: 78000 },
                    L5: { min: 78000, max: 92000 },
                    L6: { min: 92000, max: 115000 }
                },
                designer: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 58000 },
                    L4: { min: 58000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                }
            },
            notes: "Salaries in the UK are competitive within the region, with a growing tech sector. Living costs are generally lower than in London."
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
    },

    roles: {
        engineer: {
            title: "Software Engineer",
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
        },
        pm: {
            title: "Product Manager",
            levels: {
                L2: {
                    title: "Associate Product Manager",
                    experience: "0-2 years",
                    responsibilities: [
                        "Support product feature development",
                        "Gather and analyze user feedback",
                        "Write clear product requirements",
                        "Coordinate with development teams",
                        "Track product metrics"
                    ],
                    impact: [
                        "Manages individual feature releases",
                        "Contributes to product roadmap",
                        "Identifies user needs",
                        "Supports data-driven decisions"
                    ]
                },
                L3: {
                    title: "Product Manager",
                    experience: "2-5 years",
                    responsibilities: [
                        "Own product features end-to-end",
                        "Define product requirements",
                        "Conduct user research",
                        "Prioritize product backlog",
                        "Work with cross-functional teams"
                    ],
                    impact: [
                        "Drives feature adoption",
                        "Improves product metrics",
                        "Builds stakeholder relationships",
                        "Influences product direction"
                    ]
                },
                L4: {
                    title: "Senior Product Manager",
                    experience: "5-8 years",
                    responsibilities: [
                        "Lead product strategy",
                        "Drive product vision",
                        "Manage complex stakeholders",
                        "Define success metrics",
                        "Guide product development"
                    ],
                    impact: [
                        "Owns product success metrics",
                        "Drives strategic initiatives",
                        "Mentors junior PMs",
                        "Influences company strategy"
                    ]
                },
                L5: {
                    title: "Group Product Manager",
                    experience: "8-12 years",
                    responsibilities: [
                        "Define product vision",
                        "Lead product organization",
                        "Drive business strategy",
                        "Manage product portfolio",
                        "Build product culture"
                    ],
                    impact: [
                        "Shapes product strategy",
                        "Drives business growth",
                        "Develops product leaders",
                        "Influences company direction"
                    ]
                },
                L6: {
                    title: "Director of Product",
                    experience: "12+ years",
                    responsibilities: [
                        "Set product vision",
                        "Drive company strategy",
                        "Lead product organization",
                        "Define product processes",
                        "Build product culture"
                    ],
                    impact: [
                        "Shapes company direction",
                        "Drives organizational growth",
                        "Builds product teams",
                        "Influences industry trends"
                    ]
                }
            }
        },
        designer: {
            title: "Product Designer",
            levels: {
                L2: {
                    title: "Junior Designer",
                    experience: "0-2 years",
                    responsibilities: [
                        "Create UI components",
                        "Support design systems",
                        "Conduct user research",
                        "Create wireframes",
                        "Maintain design documentation"
                    ],
                    impact: [
                        "Delivers quality designs",
                        "Contributes to design system",
                        "Supports user testing",
                        "Improves design processes"
                    ]
                },
                L3: {
                    title: "Product Designer",
                    experience: "2-5 years",
                    responsibilities: [
                        "Own feature design end-to-end",
                        "Create user flows",
                        "Conduct user research",
                        "Define interaction patterns",
                        "Collaborate with product teams"
                    ],
                    impact: [
                        "Improves user experience",
                        "Drives design consistency",
                        "Influences product decisions",
                        "Mentors junior designers"
                    ]
                },
                L4: {
                    title: "Senior Designer",
                    experience: "5-8 years",
                    responsibilities: [
                        "Lead design strategy",
                        "Define design systems",
                        "Drive user research",
                        "Mentor design team",
                        "Guide product direction"
                    ],
                    impact: [
                        "Shapes product experience",
                        "Drives design excellence",
                        "Influences product strategy",
                        "Builds design culture"
                    ]
                },
                L5: {
                    title: "Staff Designer",
                    experience: "8-12 years",
                    responsibilities: [
                        "Drive design vision",
                        "Lead design organization",
                        "Define design strategy",
                        "Build design systems",
                        "Guide design culture"
                    ],
                    impact: [
                        "Shapes company direction",
                        "Drives design innovation",
                        "Builds design teams",
                        "Influences industry trends"
                    ]
                },
                L6: {
                    title: "Principal Designer",
                    experience: "12+ years",
                    responsibilities: [
                        "Set design vision",
                        "Lead design organization",
                        "Drive design strategy",
                        "Define design principles",
                        "Build design culture"
                    ],
                    impact: [
                        "Shapes industry trends",
                        "Drives organizational growth",
                        "Builds design leaders",
                        "Influences company strategy"
                    ]
                }
            }
        }
    },

    countries: {
        usa: {
            currency: "USD",
            roles: {
                engineer: {
                    L2: { min: 95000, max: 135000 },
                    L3: { min: 130000, max: 180000 },
                    L4: { min: 160000, max: 220000 },
                    L5: { min: 200000, max: 280000 },
                    L6: { min: 250000, max: 350000 }
                },
                pm: {
                    L2: { min: 85000, max: 120000 },
                    L3: { min: 120000, max: 160000 },
                    L4: { min: 150000, max: 200000 },
                    L5: { min: 180000, max: 250000 },
                    L6: { min: 220000, max: 300000 }
                },
                designer: {
                    L2: { min: 80000, max: 110000 },
                    L3: { min: 110000, max: 150000 },
                    L4: { min: 140000, max: 190000 },
                    L5: { min: 170000, max: 230000 },
                    L6: { min: 200000, max: 280000 }
                }
            },
            notes: "Salaries vary significantly by location and company size. Top tech companies and Silicon Valley/NYC typically offer 30-50% higher. Remote work policies often include location-based adjustments."
        },
        germany: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 50000, max: 65000 },
                    L3: { min: 65000, max: 85000 },
                    L4: { min: 85000, max: 110000 },
                    L5: { min: 110000, max: 140000 },
                    L6: { min: 140000, max: 180000 }
                },
                pm: {
                    L2: { min: 48000, max: 62000 },
                    L3: { min: 62000, max: 82000 },
                    L4: { min: 82000, max: 105000 },
                    L5: { min: 105000, max: 135000 },
                    L6: { min: 135000, max: 175000 }
                },
                designer: {
                    L2: { min: 45000, max: 60000 },
                    L3: { min: 60000, max: 80000 },
                    L4: { min: 80000, max: 100000 },
                    L5: { min: 100000, max: 130000 },
                    L6: { min: 130000, max: 170000 }
                }
            },
            notes: "Salaries include 13th month pay. Strong benefits package including ~30 days vacation, health insurance, and pension contributions."
        },
        uk: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 65000 },
                    L4: { min: 65000, max: 80000 },
                    L5: { min: 80000, max: 95000 },
                    L6: { min: 95000, max: 120000 }
                },
                pm: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 62000 },
                    L4: { min: 62000, max: 78000 },
                    L5: { min: 78000, max: 92000 },
                    L6: { min: 92000, max: 115000 }
                },
                designer: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 58000 },
                    L4: { min: 58000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                }
            },
            notes: "Salaries in the UK are competitive within the region, with a growing tech sector. Living costs are generally lower than in London."
        },
        spain: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 60000 },
                    L4: { min: 60000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 58000 },
                    L4: { min: 58000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 55000 },
                    L4: { min: 55000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Salaries in Spain include 14 monthly payments. The tech industry is growing, particularly in hubs like Barcelona and Madrid."
        },
        poland: {
            currency: "PLN",
            roles: {
                engineer: {
                    L2: { min: 100000, max: 130000 },
                    L3: { min: 130000, max: 190000 },
                    L4: { min: 160000, max: 210000 },
                    L5: { min: 210000, max: 270000 },
                    L6: { min: 270000, max: 330000 }
                },
                pm: {
                    L2: { min: 90000, max: 120000 },
                    L3: { min: 120000, max: 170000 },
                    L4: { min: 150000, max: 200000 },
                    L5: { min: 200000, max: 260000 },
                    L6: { min: 260000, max: 320000 }
                },
                designer: {
                    L2: { min: 85000, max: 115000 },
                    L3: { min: 115000, max: 165000 },
                    L4: { min: 145000, max: 195000 },
                    L5: { min: 195000, max: 250000 },
                    L6: { min: 250000, max: 310000 }
                }
            },
            notes: "Poland's IT sector is booming, with a large talent pool and competitive salaries. Remote work for international companies is increasingly common."
        },
        ukraine: {
            currency: "UAH",
            roles: {
                engineer: {
                    L2: { min: 480000, max: 720000 },
                    L3: { min: 840000, max: 1200000 },
                    L4: { min: 1320000, max: 1800000 },
                    L5: { min: 1920000, max: 2400000 },
                    L6: { min: 2640000, max: 3600000 }
                },
                pm: {
                    L2: { min: 420000, max: 660000 },
                    L3: { min: 780000, max: 1140000 },
                    L4: { min: 1260000, max: 1740000 },
                    L5: { min: 1860000, max: 2340000 },
                    L6: { min: 2580000, max: 3300000 }
                },
                designer: {
                    L2: { min: 360000, max: 600000 },
                    L3: { min: 720000, max: 1080000 },
                    L4: { min: 1200000, max: 1680000 },
                    L5: { min: 1800000, max: 2280000 },
                    L6: { min: 2520000, max: 3240000 }
                }
            },
            notes: "Salaries are for US-based companies hiring in Ukraine. Local companies typically offer 30-50% lower. Strong tech talent pool, particularly in Kyiv, Lviv, and Kharkiv."
        },
        slovakia: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 33000, max: 44000 },
                    L3: { min: 44000, max: 58000 },
                    L4: { min: 58000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 30000, max: 40000 },
                    L3: { min: 40000, max: 55000 },
                    L4: { min: 55000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 28000, max: 38000 },
                    L3: { min: 38000, max: 52000 },
                    L4: { min: 52000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Slovakia offers competitive salaries within the EU, particularly in the growing tech sector. Living costs are relatively lower than in Western Europe."
        },
        lithuania: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 24000, max: 36000 },
                    L3: { min: 36000, max: 48000 },
                    L4: { min: 48000, max: 60000 },
                    L5: { min: 60000, max: 72000 },
                    L6: { min: 72000, max: 84000 }
                },
                pm: {
                    L2: { min: 22000, max: 32000 },
                    L3: { min: 32000, max: 45000 },
                    L4: { min: 45000, max: 58000 },
                    L5: { min: 58000, max: 70000 },
                    L6: { min: 70000, max: 85000 }
                },
                designer: {
                    L2: { min: 20000, max: 30000 },
                    L3: { min: 30000, max: 42000 },
                    L4: { min: 42000, max: 55000 },
                    L5: { min: 55000, max: 68000 },
                    L6: { min: 68000, max: 80000 }
                }
            },
            notes: "Lithuania's IT sector is growing rapidly, with increasing demand for skilled professionals. Remote work opportunities are also on the rise."
        },
        wales: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 60000 },
                    L4: { min: 60000, max: 75000 },
                    L5: { min: 75000, max: 90000 },
                    L6: { min: 90000, max: 110000 }
                },
                pm: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 58000 },
                    L4: { min: 58000, max: 72000 },
                    L5: { min: 72000, max: 88000 },
                    L6: { min: 88000, max: 105000 }
                },
                designer: {
                    L2: { min: 30000, max: 40000 },
                    L3: { min: 40000, max: 55000 },
                    L4: { min: 55000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 100000 }
                }
            },
            notes: "Salaries in Wales are competitive, with lower living costs compared to other parts of the UK. Growing tech hub with good work-life balance."
        },
        canada: {
            currency: "CAD",
            roles: {
                engineer: {
                    L2: { min: 70000, max: 90000 },
                    L3: { min: 90000, max: 120000 },
                    L4: { min: 120000, max: 150000 },
                    L5: { min: 150000, max: 200000 },
                    L6: { min: 200000, max: 250000 }
                },
                pm: {
                    L2: { min: 65000, max: 85000 },
                    L3: { min: 85000, max: 115000 },
                    L4: { min: 115000, max: 145000 },
                    L5: { min: 145000, max: 190000 },
                    L6: { min: 190000, max: 240000 }
                },
                designer: {
                    L2: { min: 60000, max: 80000 },
                    L3: { min: 80000, max: 110000 },
                    L4: { min: 110000, max: 140000 },
                    L5: { min: 140000, max: 180000 },
                    L6: { min: 180000, max: 230000 }
                }
            },
            notes: "Canadian tech hubs like Toronto, Vancouver, and Montreal offer competitive salaries. Benefits typically include health insurance and retirement plans."
        },
        croatia: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 20000, max: 30000 },
                    L3: { min: 30000, max: 40000 },
                    L4: { min: 40000, max: 50000 },
                    L5: { min: 50000, max: 60000 },
                    L6: { min: 60000, max: 70000 }
                },
                pm: {
                    L2: { min: 18000, max: 28000 },
                    L3: { min: 28000, max: 38000 },
                    L4: { min: 38000, max: 48000 },
                    L5: { min: 48000, max: 58000 },
                    L6: { min: 58000, max: 68000 }
                },
                designer: {
                    L2: { min: 16000, max: 26000 },
                    L3: { min: 26000, max: 36000 },
                    L4: { min: 36000, max: 46000 },
                    L5: { min: 46000, max: 56000 },
                    L6: { min: 56000, max: 66000 }
                }
            },
            notes: "Croatia's IT sector is developing, with a focus on outsourcing and nearshoring. Salaries are competitive within the region."
        }
    }
}; 