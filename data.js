const compensationData = {
    exchangeRates: {
        USD: 1.0,    // Base currency
        EUR: 0.93,   // Updated EUR/USD rate (as of 2024-03-14)
        PLN: 0.25,   // Updated PLN/USD rate (as of 2024-03-14)
        UAH: 0.026,  // Updated UAH/USD rate (as of 2024-03-14)
        CAD: 0.74,   // Updated CAD/USD rate (as of 2024-03-14)
        GBP: 1.28,   // Updated GBP/USD rate (as of 2024-03-14)
    },
    
    costOfLiving: {
        lithuania: {
            index: 45.2,  // Updated index (Numbeo, 2024)
            rent: "€600-1200", // Updated rent range
            details: {
                meal: "€10", // Updated meal cost
                transport: "€40", // Updated transport cost
                utilities: "€170" // Updated utilities cost
            }
        },
        spain: {
            index: 53.8, // Updated index (Numbeo, 2024)
            rent: "€800-1600", // Updated rent range
            details: {
                meal: "€12", // Updated meal cost
                transport: "€45", // Updated transport cost
                utilities: "€140" // Updated utilities cost
            }
        },
        poland: {
            index: 40.5, // Updated index (Numbeo, 2024)
            rent: "3,500-6,000 PLN", // Updated rent range
            details: {
                meal: "40 PLN", // Updated meal cost
                transport: "120 PLN", // Updated transport cost
                utilities: "1,000 PLN" // Updated utilities cost
            }
        },
        canada: {
            index: 70.2, // Updated index (Numbeo, 2024)
            rent: "CAD 1,900-2,700", // Updated rent range
            details: {
                meal: "CAD 25", // Updated meal cost
                transport: "CAD 130", // Updated transport cost
                utilities: "CAD 200" // Updated utilities cost
            }
        },
        ukraine: {
            index: 33.2, // Updated index (Numbeo, 2024)
            rent: "15,000-25,000 UAH", // Updated rent range
            details: {
                meal: "300 UAH", // Updated meal cost
                transport: "600 UAH", // Updated transport cost
                utilities: "3,500 UAH" // Updated utilities cost
            }
        },
        slovakia: {
            index: 44.7, // Updated index (Numbeo, 2024)
            rent: "€650-950", // Updated rent range
            details: {
                meal: "€9", // Updated meal cost
                transport: "€35", // Updated transport cost
                utilities: "€180" // Updated utilities cost
            }
        },
        wales: {
            index: 60.5, // Updated index (Numbeo, 2024)
            rent: "£700-1,000", // Updated rent range
            details: {
                meal: "£15", // Updated meal cost
                transport: "£70", // Updated transport cost
                utilities: "£170" // Updated utilities cost
            }
        },
        usa: {
            index: 72.5, // Updated index (Numbeo, 2024)
            rent: "$2,700-3,800", // Updated rent range (major cities)
            details: {
                meal: "$25", // Updated meal cost
                transport: "$150", // Updated transport cost
                utilities: "$220" // Updated utilities cost
            }
        },
        croatia: {
            index: 49.8, // Updated index (Numbeo, 2024)
            rent: "€500-800", // Updated rent range
            details: {
                meal: "€12", // Updated meal cost
                transport: "€45", // Updated transport cost
                utilities: "€200" // Updated utilities cost
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
                        min: 110000, // Updated salary range
                        max: 150000  // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 150000, // Updated salary range
                        max: 190000  // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 190000, // Updated salary range
                        max: 240000  // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 240000, // Updated salary range
                        max: 300000  // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 300000, // Updated salary range
                        max: 380000  // Updated salary range
                    }
                }
            },
            notes: "Salaries vary significantly by location and company size. Top tech companies and Silicon Valley/NYC typically offer 30-40% higher. Remote work has become standard with location-based pay adjustments."
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
            currency: "USD",
            levels: {
                L2: {
                    experience: "0-2 years",
                    employee: {
                        min: 14000,  // Updated salary range
                        max: 18000   // Updated salary range
                    }
                },
                L3: {
                    experience: "2-5 years",
                    employee: {
                        min: 20000,  // Updated salary range
                        max: 28000   // Updated salary range
                    }
                },
                L4: {
                    experience: "5-8 years",
                    employee: {
                        min: 38000,  // Updated salary range
                        max: 50000   // Updated salary range
                    }
                },
                L5: {
                    experience: "8-12 years",
                    employee: {
                        min: 50000,  // Updated salary range
                        max: 65000   // Updated salary range
                    }
                },
                L6: {
                    experience: "12+ years",
                    employee: {
                        min: 65000,  // Updated salary range
                        max: 80000   // Updated salary range
                    }
                }
            },
            notes: "Ukraine has a rapidly growing IT sector with a large pool of skilled developers. Salaries are often USD-based due to international clients."
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
        }
    },
    
    companyOverhead: {
        fixedCosts: {
            baseAmount: 900, // Updated base monthly overhead
            description: "Base overhead includes workspace, equipment, software licenses, remote work tools, cybersecurity measures, and increased compliance costs"
        },
        countrySpecific: {
            usa: {
                employerTax: 0.0765, // FICA (Social Security + Medicare)
                workersComp: 0.02,   // Average workers' compensation insurance
                otherFees: 0.04,    // Other fees (e.g., state unemployment insurance, benefits)
                description: "Includes FICA, workers' compensation, state-specific taxes, health insurance contributions, and other benefits"
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