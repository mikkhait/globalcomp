/**
 * Global Compensation Calculator Data
 * Version: 2.9.0
 * Last Updated: January 2026
 * 
 * This file contains comprehensive compensation data for tech roles across different countries.
 * Data includes:
 * - Salary ranges for different experience levels
 * - Cost of living indices
 * - Tax rates and employer costs
 * - Role definitions and career paths
 * - Exchange rates and currency information
 */

export const compensationData = {
    releaseNotes: [
        {
            version: "2.9.0",
            date: "August 2026",
            major: [
                "Refreshed FX rates to 2026-08-28 reference (EUR 1.1643, GBP 1.3583, CAD 0.7218, PLN 0.2684, UAH 0.0225 per USD; ECB/Frankfurter + NBU)",
                "Germany: employer + employee social security raised to ~21.15% (average GKV Zusatzbeitrag 2.5%→2.9%, effective Jan 2026)",
                "Spain: employer SS 29.8%→30.65%, employee 6.4%→6.5% (2026 MEI increase; Seguridad Social)",
                "Ukraine: military levy 1.5%→5% (Law 4015-IX, effective 1 Dec 2024; dataset was stale)",
                "Lithuania: CORRECTED employer Sodra 31.18%→~1.77% (2.49% fixed-term); employee carries the 19.5% VSD+PSD — previous employer value double-counted the burden",
                "UK: raised senior salary bands L5/L6 across all roles (e.g. SWE £70–90K / £90–120K) on 2026 market data showing >5% drift"
            ],
            improvements: [
                "Updated dataProvenance: FX asOf 2026-08-28, lastRefreshed August 2026; refreshed stale contribution descriptions"
            ]
        },
        {
            version: "2.8.0",
            date: "January 2026",
            major: [
                "Refreshed FX rates (EUR, GBP, CAD, PLN from ECB via Frankfurter; UAH from National Bank of Ukraine) to align USD conversions with early January 2026 market reference",
                "Updated UK National Insurance defaults (employee + employer) using GOV.UK 2025/26 published contribution rates",
                "Updated Canada payroll contribution defaults (EI + CPP, incl. CPP2 metadata) using CRA published 2026 payroll tables",
                "Corrected Ukraine employee tax defaults to reflect PIT (18%) + military levy (1.5%) with employer-paid USC (22%)"
            ],
            improvements: [
                "Aligned company overhead descriptions with underlying numeric rates (notably Canada and UK) for clearer interpretation",
                "Improved dataset provenance notes for January 2026 refresh"
            ],
            fixes: [
                "Fixed an internal mismatch where Canada employer tax rate did not include employer EI premium costs",
                "Fixed an internal mismatch where UK employer NI default lagged the published 2025/26 employer contribution rate"
            ]
        },
        {
            version: "2.7.0",
            date: "November 2025",
            major: [
                "Refreshed cost of living, salary context, and employer overhead metadata using November 2025 inputs",
                "Updated exchange rates (USD, EUR, GBP, CAD, PLN, UAH) to November 2025 market averages",
                "Documented November 2025 provenance across all country notes and supporting sources"
            ],
            improvements: [
                "Realigned company overhead defaults so the calculator matches the $850 fixed cost baseline",
                "Fine-tuned cost of living data for USA, Canada, Germany, and Spain with current rents and recurring expenses",
                "Polished release notes content for clearer monthly change tracking"
            ],
            fixes: [
                "Resolved an issue that reset company overhead to a legacy $600 value",
                "Standardized USD conversion precision across location and salary displays",
                "General data consistency and rounding improvements"
            ]
        },
        {
            version: "2.6.0",
            date: "August 2025",
            major: [
                "Fast refresh of compensation ranges across all countries (~3% conservative uplift)",
                "Added DevOps Engineer role (L2–L6) across all countries",
                "Updated exchange rates to August 2025 values"
            ],
            improvements: [
                "Updated country notes to reflect August 2025 market context",
                "Added role definitions for DevOps Engineer",
                "Extended aggregate salaryRanges with DevOps Engineer for USA/UK/Germany"
            ],
            fixes: [
                "Corrected number formatting in Spain Data Engineer L6 max value",
                "General data consistency and rounding cleanups"
            ]
        },
        {
            version: "2.5.3",
            date: "June 2025",
            major: [
                "Updated exchange rates to reflect June 2025 market values (notably GBP to USD)",
                "Ensured all compensation calculations use the latest currency conversion rates"
            ],
            improvements: [
                "Improved accuracy of USD equivalents for all non-USD salaries",
                "Release notes now clearly indicate currency update cycles"
            ],
            fixes: [
                "Corrected outdated GBP to USD conversion logic in compensation summary display"
            ]
        },
        {
            version: "2.5.2",
            date: "June 2025",
            major: [
                "Comprehensive overhaul of all Role Definitions (Software Engineer, Product Manager, Designer, Data Engineer for levels L2-L6) providing significantly more detailed and nuanced descriptions, responsibilities, and skill sets for improved clarity and accuracy."
            ],
            improvements: [
                "Enhanced mobile responsiveness across the application, including optimized header layout, improved readability, and better content flow on smaller devices.",
                "Refined visual styling for various UI components on mobile for a cleaner user experience."
            ],
            fixes: [
                "Addressed minor CSS structural issues and improved overall stylesheet consistency."
            ]
        },
        {
            version: "2.5.1",
            date: "May 2025",
            major: [
                "Updated exchange rates to current market values",
                "Adjusted cost of living indices for key regions",
                "Refined salary ranges for specialized roles"
            ],
            improvements: [
                "Enhanced data accuracy for emerging markets",
                "Updated documentation for all data fields",
                "Improved tax calculation precision"
            ],
            fixes: [
                "Corrected exchange rate calculations",
                "Fixed inconsistencies in role level transitions",
                "Updated outdated cost of living data"
            ]
        },
        {
            version: "2.5.0",
            date: "May 2025",
            major: [
                "Added comprehensive Data Engineer role across all countries",
                "Updated role definitions and career paths for Data Engineers",
                "Adjusted compensation ranges to reflect market rates for data engineering skills",
                "Enhanced documentation for data engineering competencies"
            ],
            improvements: [
                "Added detailed role definitions for Data Engineers across all levels",
                "Updated salary ranges for all countries to include Data Engineer role",
                "Enhanced documentation for data engineering skills and responsibilities",
                "Included data engineering-specific career progression paths"
            ],
            fixes: [
                "Standardized data engineering compensation ranges across regions",
                "Aligned data engineering roles with existing engineering levels",
                "Corrected compensation differences between similar engineering disciplines"
            ]
        },
        {
            version: "2.4.0",
            date: "April 2025",
            major: [
                "Updated compensation ranges to reflect startup market conditions",
                "Added detailed equity compensation guidelines",
                "Implemented funding stage-based compensation adjustments",
                "Enhanced role-specific compensation documentation"
            ],
            improvements: [
                "Added comprehensive startup compensation notes",
                "Updated salary ranges for all roles and levels",
                "Included funding stage impact on compensation",
                "Enhanced equity compensation documentation",
                "Added detailed startup benefits information"
            ],
            fixes: [
                "Adjusted compensation ranges for startup market conditions",
                "Updated role progression documentation",
                "Corrected compensation stage transitions",
                "Standardized equity compensation ranges"
            ]
        },
        {
            version: "2.3.0",
            date: "April 2025",
            major: [
                "Comprehensive update of all salary ranges to reflect Q1 2024 market conditions",
                "Added detailed role definitions and career progression paths",
                "Enhanced company overhead calculations with updated tax rates",
                "Implemented new cost of living indices for all regions"
            ],
            improvements: [
                "Updated exchange rates to current market values",
                "Enhanced documentation for all data fields",
                "Added detailed role-specific responsibilities and skills",
                "Improved accuracy of tax calculations across all countries",
                "Added comprehensive employer cost breakdowns"
            ],
            fixes: [
                "Corrected inconsistencies in role level transitions",
                "Updated outdated cost of living data",
                "Standardized salary range formats across all countries",
                "Fixed tax calculation edge cases for high income brackets",
                "Resolved currency conversion precision issues"
            ]
        },
        {
            version: "2.2.0",
            date: "February 2025",
            major: [
                "Updated salary ranges across all countries to reflect Q1 2024 market conditions",
                "Refreshed exchange rates to current market values",
                "Enhanced data accuracy for tech roles in emerging markets",
                "Added detailed documentation for all data fields"
            ],
            improvements: [
                "Adjusted compensation data based on latest industry reports",
                "Updated cost of living indices for major tech hubs",
                "Refined salary ranges for specialized roles",
                "Improved accuracy of tax calculations",
                "Added comprehensive inline documentation"
            ],
            fixes: [
                "Corrected exchange rate calculations for several currencies",
                "Fixed inconsistencies in role level transitions",
                "Standardized salary range formats across all countries",
                "Updated outdated cost of living data"
            ]
        },
        {
            version: "2.0.0",
            date: "January 2025",
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
            date: "December 2024",
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
        USD: 1.0,
        // Aug 2026 refresh: USD per unit of currency
        // EUR/GBP/CAD/PLN from ECB reference rates via Frankfurter (date: 2026-08-28)
        // UAH from National Bank of Ukraine (date: 2026-08-31; USD/UAH => inverted to USD per UAH)
        EUR: 1.1643,
        PLN: 0.2684,
        UAH: 0.0225,
        CAD: 0.7218,
        GBP: 1.3583,
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
        ukraine: 'USD',
        slovakia: 'EUR',
        canada: 'CAD',
        lithuania: 'EUR',
        germany: 'EUR',
        uk: 'GBP'
    },
    
    costOfLiving: {
        lithuania: {
            index: 49.5,
            rent: {
                min: 720,
                max: 1450
            },
            details: {
                meal: 13,
                transport: 52,
                utilities: 210
            },
            taxRates: {
                incomeTax: 0.20,      // Progressive rate for higher income (15-20%)
                socialSecurity: 0.195, // 19.5% social insurance (VSD 18.5% + PSD 0.7-3%; employee carries the main share)
                other: 0.015          // Health insurance
            }
        },
        spain: {
            index: 57.4,
            rent: {
                min: 920,
                max: 1850
            },
            details: {
                meal: 15,
                transport: 54,
                utilities: 170
            },
            taxRates: {
                incomeTax: 0.37,      // Progressive rate for tech salaries (30-47%)
                socialSecurity: 0.065, // ~6.5% (common 4.70 + unemployment 1.55 + MEI ~0.25; 2026)
                other: 0.02           // Regional taxes
            }
        },
        poland: {
            index: 44.2,
            rent: {
                min: 2900,
                max: 5200
            },
            details: {
                meal: 42,
                transport: 130,
                utilities: 850
            },
            taxRates: {
                incomeTax: 0.32,      // Higher bracket for tech salaries (17-32%)
                socialSecurity: 0.1371,// ZUS employee contribution (13.71%)
                other: 0.09           // Health insurance (9%)
            }
        },
        canada: {
            index: 74.2,
            rent: {
                min: 2150,
                max: 3050
            },
            details: {
                meal: 29,
                transport: 145,
                utilities: 225
            },
            taxRates: {
                incomeTax: 0.335,     // Federal + Provincial (ON) average (29-38%)
                socialSecurity: 0.0758,// CPP (5.95%) + EI (1.63%) employee rates (2026 CRA tables)
                other: 0.015          // Health premium
            }
        },
        ukraine: {
            index: 33.5,
            rent: {
                min: 600,
                max: 1100
            },
            details: {
                meal: 12,
                transport: 25,
                utilities: 150
            },
            taxRates: {
                incomeTax: 0.18,      // Personal income tax (18%)
                socialSecurity: 0.00,  // Employee does not pay USC; employer pays USC (22%)
                other: 0.05           // Military levy 5% (Law 4015-IX, eff. 1 Dec 2024; was 1.5%)
            }
        },
        slovakia: {
            index: 46.8,
            rent: {
                min: 700,
                max: 1000
            },
            details: {
                meal: 10,
                transport: 38,
                utilities: 190
            },
            taxRates: {
                incomeTax: 0.25,      // Progressive rate for tech salaries (19-25%)
                socialSecurity: 0.138, // Employee social insurance (13.8%)
                other: 0.04           // Health insurance (4%)
            }
        },

        usa: {
            index: 75.6,
            rent: {
                min: 2100,
                max: 3950
            },
            details: {
                meal: 21,
                transport: 135,
                utilities: 215
            },
            taxRates: {
                incomeTax: 0.32,      // Federal + State average for tech hubs (22-37%)
                socialSecurity: 0.0765,// FICA (6.2% Social Security + 1.45% Medicare)
                other: 0.03           // State specific fees
            }
        },
        germany: {
            index: 68.1,
            rent: {
                min: 880,
                max: 1650
            },
            details: {
                meal: 14,
                transport: 88,
                utilities: 275
            },
            taxRates: {
                incomeTax: 0.42,      // Progressive rate for tech salaries (14-45%)
                socialSecurity: 0.2115, // ~21.15% (GKV Zusatzbeitrag avg 2.9% from Jan 2026: pension 9.3 + health 8.75 + unemployment 1.3 + care 1.8)
                other: 0.012          // Solidarity surcharge (5.5% of income tax)
            }
        },
        uk: {
            index: 78.4,
            rent: {
                min: 750,
                max: 1300
            },
            details: {
                meal: 16,
                transport: 135,
                utilities: 220
            },
            taxRates: {
                incomeTax: 0.40,      // Higher rate band (20-45%)
                socialSecurity: 0.08,  // Class 1 employee NI main rate (8%) for 2025/26 published table
                other: 0.00           // Kept at 0 by default; use overrides for pensions/other deductions
            }
        }
    },
    
    companyOverhead: {
        fixedCosts: {
            baseAmount: 850,  // Updated monthly fixed costs per employee for 2024
            description: "Base overhead includes workspace, equipment, software licenses, remote work tools, cybersecurity measures, and increased compliance costs"
        },
        countrySpecific: {
            usa: {
                employerTax: 0.0765,  // FICA (6.2% Social Security + 1.45% Medicare)
                workersComp: 0.018,   // Workers comp insurance (1-3% based on industry)
                otherFees: 0.03,      // FUTA, SUTA, and other fees
                description: "Includes FICA (7.65%), workers compensation insurance (1.8%), and payroll taxes including FUTA and SUTA (3%)"
            },
            spain: {
                employerTax: 0.3065,  // SS 2026: common 23.60 + unemployment 5.50 + FOGASA 0.20 + training 0.60 + MEI 0.75
                workersComp: 0.016,   // Work accident insurance (1.6%)
                otherFees: 0.032,     // Other contributions (unemployment, training)
                description: "Includes Social Security contributions (30.65% for 2026, incl. MEI 0.75%), work accident insurance (1.6%), and other mandatory contributions such as unemployment and professional training funds (3.2%)"
            },
            poland: {
                employerTax: 0.197,   // Social contributions (ZUS) (19.7%)
                workersComp: 0.0167,  // Accident insurance (varies by industry, 0.67-3.33%)
                otherFees: 0.028,     // Labour Fund (2.45%), Employee Guaranteed Benefits Fund (0.1%)
                description: "Includes ZUS contributions for pension, disability and sickness (19.7%), accident insurance (1.67%), Labour Fund (2.45%), and Employee Guaranteed Benefits Fund (0.1%)"
            },
            ukraine: {
                employerTax: 0.22,    // Unified Social Contribution (USC) (22%)
                workersComp: 0.012,   // Occupational risk insurance (0.6-1.5%)
                otherFees: 0.015,     // Military levy and other contributions
                description: "Includes Unified Social Contribution (22%), occupational risk insurance (1.2%), military levy (5% since Dec 2024) and other mandatory contributions"
            },
            slovakia: {
                employerTax: 0.352,   // Social and health insurance (35.2%)
                workersComp: 0.008,   // Accident insurance (0.8%)
                otherFees: 0.012,     // Guarantee fund, reserve fund (1.2%)
                description: "Includes social and health insurance contributions (35.2%), accident insurance (0.8%), and other mandatory contributions including guarantee fund and reserve fund (1.2%)"
            },
            canada: {
                // CRA 2026 payroll tables: CPP 5.95% (employee+employer); EI employee 1.63%, employer = 1.4x = 2.282%
                // Note: CPP and EI are capped; this model treats them as a simple % for a reasonable approximation.
                employerTax: 0.0823,  // CPP (5.95%) + EI employer (2.282%) = 8.232%
                workersComp: 0.019,   // Workers' compensation (varies by province, 1.5-2.19%)
                otherFees: 0.025,     // Provincial payroll taxes, health premiums, supplemental benefits
                description: "Includes Canada Pension Plan (CPP) employer contributions (5.95%), Employment Insurance (EI) employer premiums (2.282%; 1.4× employee rate), provincial workers' compensation (1.9%), and other provincial health premiums and payroll taxes (2.5%). CPP2 (second additional CPP, 4% on a narrow earnings band) is not explicitly modeled here."
            },
            lithuania: {
                employerTax: 0.0177,  // CORRECTED Aug 2026: employer Sodra ~1.77% (2.49% fixed-term); employee carries the 19.5% VSD+PSD — prior value double-counted employer burden
                workersComp: 0.0018,  // Guarantee fund contribution (0.18%)
                otherFees: 0.012,     // Long-term unemployment insurance (1.2%)
                description: "Includes employer Sodra contribution (~1.77% for 2026 — corrected Aug 2026; the employee carries the main 19.5% VSD+PSD social insurance), guarantee fund contribution (0.18%), and long-term unemployment insurance (1.2%)"
            },
            germany: {
                employerTax: 0.2115,  // SS 2026: pension 9.3 + health 8.55 (7.3 base + ~1.45 avg Zusatzbeitrag from Jan 2026) + unemployment 1.3 + care 1.85
                workersComp: 0.014,   // Accident insurance (1.4%)
                otherFees: 0.025,     // Insolvency levy and other contributions
                description: "Includes social security contributions for pension, health, unemployment and nursing care (21.15% for 2026, reflecting the raised GKV Zusatzbeitrag), statutory accident insurance (1.4%), and insolvency levy and other mandatory contributions (2.5%)"
            },
            uk: {
                employerTax: 0.15,    // Employer NI per GOV.UK table for 6 Apr 2025–5 Apr 2026 (category A)
                workersComp: 0.012,   // Employers' liability insurance (1-2%)
                otherFees: 0.025,     // Apprenticeship levy, pension auto-enrollment
                description: "Includes employer National Insurance contributions (15% per GOV.UK published 2025/26 contribution table for category A), employers' liability insurance (1.2%), apprenticeship levy, and pension auto-enrollment contributions (2.5%)"
            }
        }
    },

    dataProvenance: {
        lastRefreshed: "August 2026",
        exchangeRates: {
            eurGbpCadPln: {
                source: "Frankfurter API (ECB reference rates)",
                asOf: "2026-08-28",
                note: "Weekend/holiday dates roll to last available ECB reference rate."
            },
            uah: {
                source: "National Bank of Ukraine (NBU) JSON endpoint",
                asOf: "31.08.2026",
                note: "NBU provides UAH per USD; dataset stores USD per UAH."
            }
        },
        taxesAndPayroll: {
            uk: { source: "GOV.UK National Insurance rates and categories", asOf: "6 April 2025 to 5 April 2026" },
            canada: { source: "Canada Revenue Agency payroll deduction tables (EI + CPP + CPP2)", asOf: "2026 (published Oct 2025)" }
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

    roleDefinitions: {
        engineer: {
            l2: {
                title: "Software Engineer I",
                description: "A foundational engineering role for individuals with 0-2 years of experience. Software Engineer I focuses on developing core technical skills by implementing well-defined features and bug fixes under the mentorship of senior team members. Key contributions include writing clean, tested code and actively participating in team collaboration and learning processes.",
                responsibilities: [
                    "Develop, test, and deploy code for assigned features and bug fixes with guidance from senior engineers.",
                    "Write comprehensive unit tests and contribute to technical documentation.",
                    "Actively participate in code reviews, providing and receiving constructive feedback.",
                    "Continuously learn and apply software development best practices, coding standards, and team processes.",
                    "Collaborate effectively with team members in technical discussions and problem-solving."
                ],
                skills: [
                    "Proficiency in at least one core programming language (e.g., JavaScript, Python, Java, C#).",
                    "Fundamental understanding of data structures, algorithms, and object-oriented principles.",
                    "Working knowledge of version control systems (e.g., Git).",
                    "Basic understanding of the software development lifecycle (SDLC) and agile methodologies.",
                    "Strong problem-solving aptitude and a proactive learning orientation.",
                    "Good communication skills and ability to work effectively within a collaborative team."
                ]
            },
            l3: {
                title: "Software Engineer II",
                description: "An developing engineer with 2-5 years of experience, capable of independently owning and delivering features of moderate complexity. Software Engineer II contributes to design discussions, begins to mentor junior engineers, and actively seeks to improve code quality and team processes.",
                responsibilities: [
                    "Independently design, develop, test, and deploy robust and scalable software features.",
                    "Effectively debug and resolve complex issues across different parts of the software stack.",
                    "Conduct thorough code reviews and provide mentorship to L2 engineers.",
                    "Proactively contribute to technical design discussions and offer solutions to improve system architecture.",
                    "Identify opportunities and implement improvements for development processes, testing strategies, and internal tooling."
                ],
                skills: [
                    "Strong proficiency in one or more core programming languages and related frameworks.",
                    "Solid experience with system design principles and contributing to architectural decisions.",
                    "Good understanding of performance optimization techniques and database technologies (SQL/NoSQL).",
                    "Familiarity with cloud platforms (e.g., AWS, Azure, GCP) and CI/CD pipelines.",
                    "Ability to manage technical debt effectively while meeting project deadlines.",
                    "Developing leadership skills and clear technical communication."
                ]
            },
            l4: {
                title: "Senior Software Engineer",
                description: "A seasoned engineer with 5-8 years of experience, taking a leading role in the design, development, and delivery of complex software systems. Senior Software Engineers drive technical initiatives, make key architectural decisions within their domain, and actively mentor other engineers to foster technical growth within the team.",
                responsibilities: [
                    "Lead the end-to-end design and implementation of significant features and complex system components.",
                    "Define and uphold architectural standards and best practices for team projects, ensuring scalability and maintainability.",
                    "Mentor L2 and L3 engineers, providing technical guidance, fostering skill development, and championing code quality.",
                    "Collaborate effectively with product managers, designers, and other stakeholders to translate requirements into robust technical solutions.",
                    "Proactively identify and advocate for technical improvements, driving innovation and engineering excellence within the team.",
                    "Take ownership of operational stability for owned systems, including troubleshooting and resolving critical issues."
                ],
                skills: [
                    "Expertise in multiple programming languages, paradigms (e.g., OOP, functional), and associated frameworks.",
                    "Proven ability in system design, distributed systems, and building scalable, resilient applications.",
                    "Deep understanding of software engineering principles, design patterns, and data modeling.",
                    "Experience with performance tuning, monitoring, and operating services in production environments (cloud or on-prem).",
                    "Strong leadership, communication, and collaboration skills, with an ability to influence technical direction.",
                    "Adept at balancing technical strategy with business objectives and product requirements."
                ]
            },
            l5: {
                title: "Staff Software Engineer",
                description: "A highly experienced engineer (8-12+ years) demonstrating profound technical expertise and leadership. Staff Software Engineers are responsible for architecting and leading the development of complex, large-scale projects that often span multiple teams or systems. They define technical strategy, mentor senior engineers, and exert significant influence on engineering practices and direction across the organization.",
                responsibilities: [
                    "Architect, design, and spearhead the implementation of critical, large-scale systems and services with significant business impact.",
                    "Define and drive the technical strategy for a major domain or product area, anticipating future needs and technological shifts.",
                    "Act as a technical leader and mentor to senior engineers (L3/L4), fostering a culture of technical excellence and innovation.",
                    "Influence and align engineering practices, architectural patterns, and technology choices across multiple teams and departments.",
                    "Resolve the most ambiguous and technically challenging problems, often requiring novel solutions or deep system-wide analysis.",
                    "Represent the engineering team in cross-functional strategic discussions, providing expert technical perspective."
                ],
                skills: [
                    "Recognized deep expertise in multiple critical technical domains (e.g., distributed computing, data infrastructure, specific platform internals).",
                    "Exceptional ability to architect, design, and implement highly scalable, available, and resilient distributed systems.",
                    "Proven track record of successfully leading and delivering complex, multi-faceted technical projects with broad impact.",
                    "Outstanding communication, negotiation, and influencing skills, capable of driving consensus and technical decisions at senior levels.",
                    "Strong strategic thinking, with the ability to translate business goals into long-term technical roadmaps.",
                    "Ability to effectively mentor and develop other senior technical talent."
                ]
            },
            l6: {
                title: "Principal Software Engineer",
                description: "A distinguished technical leader with 12+ years of experience, recognized for their deep and broad technical expertise and visionary impact on the company's technology landscape. Principal Software Engineers set long-term technical vision, drive groundbreaking innovation, mentor other senior technologists, and often represent the company's technical capabilities externally.",
                responsibilities: [
                    "Define and champion the long-term technical vision and strategy for the entire engineering organization or significant parts thereof.",
                    "Initiate, lead, and deliver transformative, high-impact technical projects and innovations that provide a distinct competitive advantage.",
                    "Solve the company's most critical, complex, and ambiguous technical challenges, often pioneering new approaches or technologies.",
                    "Mentor and cultivate the growth of Staff and other Principal Engineers, shaping the next generation of technical leadership.",
                    "Act as a key technical advisor to executive leadership, influencing company-wide strategy and investment in technology.",
                    "Represent the company as a technical authority at industry conferences, in publications, and within open-source communities."
                ],
                skills: [
                    "World-class, internationally recognized expertise across a broad range of technologies and architectural paradigms.",
                    "Demonstrated ability to set and drive long-term technical vision that aligns with and propels business strategy.",
                    "Exceptional leadership, mentorship, and influencing capabilities, able to inspire and align large engineering groups.",
                    "Visionary thinking coupled with pragmatic execution, consistently driving innovation from conception to impactful delivery.",
                    "Strong industry presence, credibility, and an extensive professional network.",
                    "Ability to communicate complex technical concepts effectively to both technical and non-technical audiences at all levels."
                ]
            }
        },
        productManager: {
            l2: {
                title: "Associate Product Manager",
                description: "A foundational product management role for individuals with 0-2 years of experience. Associate Product Managers support the product lifecycle by assisting with market research, defining clear product requirements, and collaborating closely with engineering and design teams under the guidance of senior PMs. They focus on developing core PM skills and understanding user needs.",
                responsibilities: [
                    "Assist in the development and maintenance of the product roadmap and backlog.",
                    "Conduct foundational market, competitor, and user research to identify opportunities and inform product decisions.",
                    "Draft clear and concise product specifications, user stories, and acceptance criteria.",
                    "Collaborate effectively with engineering, design, and other stakeholders to facilitate product development.",
                    "Help track key product metrics and gather user feedback to iterate on features."
                ],
                skills: [
                    "Fundamental understanding of product management principles and the product development lifecycle.",
                    "Strong analytical and problem-solving abilities with a data-informed mindset.",
                    "Excellent written and verbal communication and interpersonal skills.",
                    "Familiarity with agile/scrum methodologies and product management tools.",
                    "High degree of user empathy and a passion for building valuable products.",
                    "Proactive learner with strong organizational skills."
                ]
            },
            l3: {
                title: "Product Manager",
                description: "A product manager with 2-5 years of experience, responsible for owning a specific product, feature set, or significant component of the product strategy. Product Managers define and drive the roadmap, conduct in-depth research, and lead cross-functional teams to deliver valuable user experiences and achieve business objectives.",
                responsibilities: [
                    "Define, own, and communicate the product vision, strategy, and roadmap for a specific product or feature area.",
                    "Conduct comprehensive market analysis, user research, and competitive intelligence to identify user needs and market opportunities.",
                    "Author detailed product requirements, user stories, and functional specifications; manage and prioritize the product backlog.",
                    "Lead and collaborate with engineering, design, marketing, and sales teams throughout the product lifecycle.",
                    "Analyze product performance data and user feedback to make informed decisions and drive continuous improvement.",
                    "Manage stakeholder expectations and ensure alignment on product goals and timelines."
                ],
                skills: [
                    "Proven product management skills, including roadmap development, requirements definition, and backlog prioritization.",
                    "Strong experience with agile development methodologies (Scrum, Kanban) and lean product principles.",
                    "Excellent analytical skills with proficiency in data analysis and A/B testing to inform product decisions.",
                    "Effective communication, presentation, and stakeholder management abilities.",
                    "Demonstrated ability to translate user needs and business requirements into successful product outcomes.",
                    "Good understanding of UX/UI principles and technical concepts."
                ]
            },
            l4: {
                title: "Senior Product Manager",
                description: "An experienced product leader (5-8 years) who owns and drives strategic product initiatives with significant business impact. Senior Product Managers define and champion product vision, mentor other PMs, and play a key role in shaping overall product strategy and influencing cross-functional teams.",
                responsibilities: [
                    "Lead the definition, development, and launch of strategic products or complex feature sets that address major user needs and business opportunities.",
                    "Develop and evangelize a compelling product vision and strategy, ensuring alignment with broader company goals.",
                    "Mentor and coach L2/L3 Product Managers, fostering their growth and improving the team's overall effectiveness.",
                    "Collaborate closely with engineering, design, marketing, sales, and executive leadership to drive product success.",
                    "Own market positioning and go-to-market strategy for their product areas, driving adoption and achieving key performance indicators.",
                    "Proactively identify and pursue opportunities for product innovation and market differentiation."
                ],
                skills: [
                    "Advanced product management expertise, including strategic planning, market analysis, and product lifecycle management.",
                    "Demonstrated success in launching and iterating on complex products that achieve significant market traction.",
                    "Strong leadership, mentoring, and team development capabilities.",
                    "Exceptional communication, presentation, and negotiation skills, with the ability to influence at all levels.",
                    "Deep understanding of market dynamics, competitive landscapes, and emerging technology trends.",
                    "Proficiency in financial modeling, business case development, and defining/tracking product success metrics."
                ]
            },
            l5: {
                title: "Group Product Manager / Director of Product",
                description: "A senior product leader (8-12+ years) responsible for guiding the strategy and execution for a significant product portfolio or group of related products. They lead and mentor a team of product managers, define multi-year product visions, and play a critical role in shaping overall business strategy and driving organizational alignment.",
                responsibilities: [
                    "Lead, manage, and mentor a team of Product Managers (L2-L4), fostering their professional development and ensuring high team performance.",
                    "Define and champion the overarching product vision, strategy, and roadmap for a major product line or group, aligning with company objectives.",
                    "Drive strategic alignment with executive leadership (VPs, C-suite) on product direction, investments, and key business initiatives.",
                    "Oversee the entire product lifecycle for their portfolio, from ideation through launch, growth, and sun-setting, ensuring P&L success where applicable.",
                    "Cultivate a strong product culture, promoting innovation, data-driven decision-making, and customer-centricity across the organization.",
                    "Represent the product organization in high-level strategic planning and cross-functional leadership forums."
                ],
                skills: [
                    "Exceptional product leadership, team management, and organizational development skills.",
                    "Proven expertise in defining and executing successful product strategies for complex product portfolios at scale.",
                    "Strong business acumen, financial literacy, and experience with P&L management or budget oversight.",
                    "Mastery in influencing and aligning executive stakeholders and navigating complex organizational dynamics.",
                    "Visionary thinking, with the ability to identify and capitalize on long-term market trends and strategic opportunities.",
                    "Deep understanding of various business models, market analysis techniques, and competitive strategy."
                ]
            },
            l6: {
                title: "VP of Product / Head of Product",
                description: "An executive leader (12+ years) who directs the entire product vision, strategy, and execution for the company or a major business unit. They are responsible for building and leading a high-performing product organization, shaping company-level strategy, and ensuring product initiatives drive substantial business growth and market leadership.",
                responsibilities: [
                    "Define, articulate, and champion the overall product vision, strategy, and long-term roadmap for the entire company or a significant business unit.",
                    "Lead, scale, and mentor the entire product management organization, including Directors/Group PMs, fostering a world-class product culture.",
                    "Serve as the primary product voice at the executive leadership level, and to the Board of Directors, influencing company direction and investment.",
                    "Drive a culture of innovation, customer obsession, and data-driven execution across the product portfolio.",
                    "Make critical, high-stakes decisions regarding product investments, resource allocation, and strategic partnerships.",
                    "Ensure the product organization is structured and operates effectively to achieve ambitious business objectives and market impact."
                ],
                skills: [
                    "World-class product leadership, organizational design, and executive management capabilities.",
                    "Demonstrated track record of building, scaling, and leading high-performing, global product organizations.",
                    "Profound expertise in product strategy formulation, market analysis, business operations, and P&L management at a company-wide scale.",
                    "Exceptional executive presence, with outstanding communication, negotiation, and influencing skills at the highest levels.",
                    "Visionary ability to shape overall company strategy and consistently drive significant business growth, brand loyalty, and market leadership through product innovation.",
                    "Deep understanding of industry trends, M&A, and strategic corporate development from a product perspective."
                ]
            }
        },
        designer: {
            l2: {
                title: "Associate Designer",
                description: "A foundational design role for individuals with 0-2 years of experience. Associate Designers support various design projects by learning and applying core design principles and tools. They contribute to UI/UX solutions for specific features under the mentorship of senior designers, focusing on developing their craft and collaborative skills.",
                responsibilities: [
                    "Assist senior designers in various stages of the design process, from concept to execution.",
                    "Create wireframes, mockups, and prototypes for specific features based on established design patterns and guidance.",
                    "Learn and effectively utilize design software (e.g., Figma, Sketch, Adobe Creative Suite).",
                    "Prepare and maintain design assets, style guides, and detailed specifications for development teams.",
                    "Collaborate with product managers and engineers to understand requirements and contribute to design solutions.",
                    "Actively participate in design critiques, incorporating feedback to refine work."
                ],
                skills: [
                    "Fundamental understanding of UI/UX design principles, typography, color theory, and layout.",
                    "Growing proficiency in industry-standard design and prototyping tools (e.g., Figma, Sketch, Adobe XD).",
                    "A keen eye for detail and a burgeoning creative problem-solving ability.",
                    "Good communication and interpersonal skills, with an eagerness to collaborate within a team.",
                    "Proactive approach to learning new design techniques and receiving constructive feedback.",
                    "Basic understanding of user-centered design methodologies."
                ]
            },
            l3: {
                title: "Designer",
                description: "A designer with 2-5 years of experience who takes ownership of the UI/UX design for specific products or features. Designers conduct user research, translate insights into intuitive and effective design solutions, and contribute to the evolution of design systems, working independently on moderately complex projects.",
                responsibilities: [
                    "Lead the end-to-end design process for assigned features or products, including user research, ideation, wireframing, prototyping, and high-fidelity visual design.",
                    "Plan and conduct user research (e.g., interviews, surveys, usability testing) to gather insights and validate design decisions.",
                    "Create compelling and user-centered design solutions that meet user needs and business goals, adhering to accessibility best practices.",
                    "Actively contribute to the development, maintenance, and adoption of design systems and component libraries.",
                    "Collaborate closely with product managers to define user stories and requirements, and with engineers to ensure faithful implementation of designs.",
                    "Present design work effectively to stakeholders and articulate design rationale clearly."
                ],
                skills: [
                    "Strong portfolio showcasing proficiency in UI/UX design, interaction design, and visual design across multiple platforms.",
                    "Advanced skills in industry-standard design and prototyping tools (e.g., Figma, Sketch, Adobe Creative Suite).",
                    "Solid experience with various user research methodologies and usability testing techniques.",
                    "Good understanding and application of web and mobile accessibility standards (WCAG).",
                    "Ability to translate complex requirements and user feedback into elegant and intuitive design solutions.",
                    "Strong problem-solving skills and the ability to iterate on designs effectively."
                ]
            },
            l4: {
                title: "Senior Designer",
                description: "An experienced design leader (5-8 years) who spearheads the design of complex products or significant feature areas. Senior Designers mentor other designers, contribute significantly to design strategy and vision, and advocate for user-centered design principles across the organization.",
                responsibilities: [
                    "Lead the design vision and execution for complex, high-impact products or strategic feature initiatives from concept through delivery.",
                    "Mentor and provide guidance to L2/L3 designers, fostering their skills and ensuring high-quality design output from the team.",
                    "Play a key role in defining and evolving the overall design strategy, design systems, and best practices within the organization.",
                    "Collaborate effectively with product, engineering, and research leadership to align on product goals and ensure design excellence.",
                    "Champion user-centered design methodologies and advocate for the user throughout the product development lifecycle.",
                    "Present and defend design decisions to senior stakeholders and executive leadership, clearly articulating strategic rationale."
                ],
                skills: [
                    "Expert-level UI/UX design skills, demonstrated through a strong portfolio of impactful and well-crafted products.",
                    "Proven ability to lead complex design projects, manage ambiguity, and deliver innovative solutions.",
                    "Strong strategic thinking, with the ability to connect design decisions to broader business objectives.",
                    "Excellent communication, presentation, and interpersonal skills, with experience influencing cross-functional teams and leadership.",
                    "Deep understanding of user psychology, behavioral science, and advanced research methodologies.",
                    "Experience in establishing and scaling design systems and processes."
                ]
            },
            l5: {
                title: "Lead Designer / Design Manager",
                description: "A senior design leader (8-12+ years) who directs a team of designers and shapes the design culture and strategy for a significant product area or platform. They are responsible for delivering world-class user experiences, mentoring design talent, and influencing overall product and brand strategy at a high level.",
                responsibilities: [
                    "Lead, manage, and mentor a team of designers (L2-L4), fostering their growth, ensuring design quality, and building a high-performing team culture.",
                    "Define and drive the comprehensive design vision, strategy, and execution for a major product line, platform, or user journey.",
                    "Establish and champion design processes, standards, and systems that elevate the quality and consistency of design across the organization.",
                    "Collaborate with executive leadership (VPs, C-suite) to align design strategy with overall business objectives and brand identity.",
                    "Develop and nurture design talent, creating opportunities for growth and ensuring the team has the skills to meet future challenges.",
                    "Oversee large-scale design initiatives, ensuring they are user-centered, innovative, and effectively meet business goals."
                ],
                skills: [
                    "Exceptional design leadership, team management, and organizational development capabilities.",
                    "Demonstrated ability to define, drive, and deliver world-class, end-to-end product experiences for complex systems.",
                    "Strong strategic thinking and ability to translate business goals into compelling design strategies and tangible outcomes.",
                    "Excellent communication, negotiation, and influencing skills, capable of advocating for design at the executive level.",
                    "Deep expertise in user-centered design, interaction design, visual design, branding, and content strategy.",
                    "Proven experience in building, scaling, and motivating high-performing design teams and fostering a positive design culture."
                ]
            },
            l6: {
                title: "Head of Design / VP of Design",
                description: "An executive leader (12+ years) who directs the comprehensive design vision, strategy, and execution across the entire company or a major business unit. They are responsible for building and leading a world-class design organization, shaping company-level strategy through design, and ensuring a cohesive, innovative, and market-leading user experience across all products and brand touchpoints.",
                responsibilities: [
                    "Define, articulate, and champion the overall design vision, strategy, and brand identity for the entire company.",
                    "Lead, scale, and mentor the entire design organization, including senior design leadership (Managers/Leads), fostering a culture of excellence and innovation.",
                    "Serve as the principal design voice at the executive leadership level and to the Board of Directors, profoundly influencing company direction, strategy, and brand perception.",
                    "Drive a pervasive culture of design thinking, user-centricity, and creative problem-solving throughout the organization.",
                    "Make critical, high-impact decisions regarding design investments, organizational structure, and strategic design partnerships.",
                    "Ensure all product experiences and brand expressions are of the highest quality, cohesive, and effectively differentiate the company in the market."
                ],
                skills: [
                    "World-class design leadership, organizational design, and executive management capabilities, with a transformative impact.",
                    "Demonstrated track record of building, scaling, and leading globally recognized, high-performing design organizations.",
                    "Profound expertise in design strategy, brand development, multi-channel user experience, and design operations at an enterprise scale.",
                    "Exceptional executive presence, with masterful communication, storytelling, and influencing skills at the highest corporate levels.",
                    "Visionary ability to shape overall company strategy and consistently drive significant business growth, brand loyalty, and market leadership through design innovation.",
                    "Deep understanding of global design trends, emerging technologies, and their strategic application to business and user experience."
                ]
            }
        },
        dataEngineer: {
            l2: {
                title: "Associate Data Engineer",
                description: "A foundational data engineering role for individuals with 0-2 years of experience. Associate Data Engineers focus on learning to build and maintain data pipelines, understand ETL processes, and grasp data warehousing fundamentals under the guidance of senior team members. They contribute by writing scripts for data tasks and supporting data infrastructure.",
                responsibilities: [
                    "Assist in the development, testing, and maintenance of data ingestion scripts and ETL/ELT pipelines with guidance.",
                    "Learn and apply data transformation techniques and support basic data modeling tasks.",
                    "Help monitor and troubleshoot data pipeline jobs and data quality issues.",
                    "Contribute to the documentation of data processes, systems, and infrastructure.",
                    "Collaborate with data analysts, data scientists, and other engineers on data-related requirements."
                ],
                skills: [
                    "Basic understanding of relational (SQL) and NoSQL database concepts.",
                    "Familiarity with at least one programming language relevant to data engineering (e.g., Python, Scala, Java).",
                    "Introductory knowledge of data pipeline orchestration (e.g., Airflow), ETL/ELT principles, and data warehousing.",
                    "Good analytical and problem-solving abilities with an attention to detail.",
                    "A strong desire to learn new data technologies and distributed systems concepts.",
                    "Effective communication skills for collaborating within a technical team."
                ]
            },
            l3: {
                title: "Data Engineer",
                description: "A data engineer with 2-5 years of experience, responsible for designing, building, and optimizing scalable and reliable data pipelines and infrastructure. Data Engineers implement robust ETL/ELT processes, develop data models, and increasingly work with big data technologies to support analytics and data science initiatives.",
                responsibilities: [
                    "Independently design, develop, test, and deploy efficient and scalable data pipelines and ETL/ELT processes.",
                    "Develop and optimize data models and schemas for data warehouses, data lakes, and analytical systems.",
                    "Implement solutions using big data technologies (e.g., Spark, Kafka, Flink) and cloud data services (e.g., AWS Glue, GCP Dataflow, Azure Data Factory).",
                    "Establish and maintain data quality checks, integrity constraints, and reliability monitoring for critical datasets.",
                    "Collaborate closely with data scientists, analysts, and business stakeholders to understand data needs and deliver appropriate solutions.",
                    "Automate data engineering workflows and contribute to CI/CD processes for data infrastructure."
                ],
                skills: [
                    "Strong proficiency in SQL and programming languages like Python or Scala for data manipulation and pipeline development.",
                    "Hands-on experience with big data processing frameworks (e.g., Apache Spark, Hadoop MapReduce) and distributed systems.",
                    "Experience with cloud-based data platforms (AWS, GCP, Azure) and their respective data services (e.g., S3, Redshift, BigQuery, Synapse).",
                    "Solid understanding of data warehousing, data lake architectures, and data modeling techniques (e.g., dimensional modeling).",
                    "Knowledge of data governance principles, data security best practices, and data pipeline orchestration tools (e.g., Airflow, Prefect).",
                    "Ability to troubleshoot and optimize performance of complex data systems."
                ]
            },
            l4: {
                title: "Senior Data Engineer",
                description: "An experienced data engineer (5-8 years) who leads the design and implementation of complex data architectures and systems. Senior Data Engineers drive best practices, mentor other engineers, and play a key role in shaping data strategy and governance within their domain.",
                responsibilities: [
                    "Lead the architectural design, development, and deployment of large-scale, complex data platforms, pipelines, and warehousing solutions.",
                    "Define and champion data engineering best practices, coding standards, and robust testing methodologies within the team.",
                    "Mentor and provide technical guidance to L2/L3 data engineers, fostering their growth and ensuring high-quality deliverables.",
                    "Collaborate with data architects, data scientists, and business leaders to define data strategy, governance policies, and technology roadmaps.",
                    "Evaluate, prototype, and recommend new data technologies, tools, and architectural patterns to enhance system capabilities.",
                    "Take ownership of the operational stability, scalability, and performance of critical data infrastructure components."
                ],
                skills: [
                    "Deep expertise in data architecture patterns, big data technologies (e.g., Spark, Kafka, Presto), and cloud data services (AWS, GCP, Azure).",
                    "Proven track record of leading and successfully delivering complex data engineering projects from conception to production.",
                    "Strong understanding of data governance, data security, privacy regulations (e.g., GDPR, CCPA), and data quality management.",
                    "Excellent problem-solving, system optimization, and analytical skills, particularly for distributed data systems.",
                    "Effective leadership, mentoring, and communication skills, with the ability to influence technical decisions.",
                    "Experience with infrastructure-as-code (e.g., Terraform, CloudFormation) and CI/CD for data systems."
                ]
            },
            l5: {
                title: "Staff Data Engineer / Lead Data Engineer",
                description: "A highly experienced data engineering leader (8-12+ years) who defines data strategy and architects solutions for major business domains or company-wide data platforms. They lead critical, large-scale data initiatives, mentor senior engineers, and exert significant influence on data governance and technology adoption across the organization.",
                responsibilities: [
                    "Architect, design, and spearhead the implementation of enterprise-wide data platforms, data lakes, and critical data services with significant business impact.",
                    "Define and drive the data engineering strategy for major business domains, aligning with overall company objectives and anticipating future technological needs.",
                    "Act as a technical leader and mentor to senior data engineers (L3/L4), fostering a culture of technical excellence and innovation in data practices.",
                    "Influence and align data governance policies, data quality standards, and technology choices across multiple teams and departments.",
                    "Resolve the most ambiguous and technically challenging data engineering problems, often requiring pioneering new solutions or deep system-wide optimization.",
                    "Represent data engineering in strategic discussions with executive leadership, providing expert guidance on data-related investments and initiatives."
                ],
                skills: [
                    "Recognized deep expertise in multiple critical data domains (e.g., distributed data processing, stream processing, data mesh, data modeling at scale).",
                    "Exceptional ability to architect, design, and deliver highly scalable, available, and resilient data platforms and ecosystems.",
                    "Proven track record of successfully leading and delivering complex, multi-faceted data projects with broad organizational impact.",
                    "Outstanding communication, negotiation, and influencing skills, capable of driving consensus and technical decisions with senior leadership.",
                    "Strong strategic thinking, with the ability to translate business goals into long-term data technology roadmaps and scalable architectures.",
                    "Ability to effectively mentor and develop other senior data engineering talent and lead technical communities of practice."
                ]
            },
            l6: {
                title: "Principal Data Engineer",
                description: "A distinguished data engineering leader (12+ years), recognized for their deep and broad expertise and visionary impact on the company's entire data landscape. Principal Data Engineers set the long-term technical vision for data, drive groundbreaking innovation in data practices and platforms, mentor other senior technologists, and often represent the company's data capabilities externally.",
                responsibilities: [
                    "Define and champion the long-term technical vision, strategy, and architecture for all data engineering and platform initiatives across the company.",
                    "Initiate, lead, and deliver transformative, high-impact data projects and innovations that provide a significant competitive advantage through data.",
                    "Solve the company's most critical, complex, and ambiguous data engineering challenges, frequently pioneering new architectural patterns or technologies.",
                    "Mentor and cultivate the growth of Staff and other Principal Data Engineers, shaping the next generation of data technology leadership.",
                    "Act as a key technical advisor on data to executive leadership, profoundly influencing company-wide strategy and investment in data capabilities.",
                    "Represent the company as a data technology authority at industry conferences, in publications, and within relevant open-source and data communities."
                ],
                skills: [
                    "World-class, internationally recognized expertise across a broad range of data technologies, distributed systems, and data architectural paradigms.",
                    "Demonstrated ability to set and drive long-term technical vision for data that aligns with and propels overarching business strategy.",
                    "Exceptional leadership, mentorship, and influencing capabilities, able to inspire and align large, diverse data engineering and analytics groups.",
                    "Visionary thinking coupled with pragmatic execution, consistently driving data innovation from concept to impactful, company-wide deployment.",
                    "Strong industry presence, credibility, and an extensive professional network within the data and analytics community.",
                    "Ability to articulate complex data concepts and strategies effectively to both highly technical and non-technical audiences at all organizational levels."
                ]
            }
        }
        ,
        devOpsEngineer: {
            l2: {
                title: "Associate DevOps Engineer",
                description: "An entry-level DevOps role (0-2 years) focused on learning CI/CD, infrastructure-as-code, observability, and cloud fundamentals. Contributes to build/deploy pipelines and environment reliability under guidance.",
                responsibilities: [
                    "Assist with maintaining CI/CD pipelines and deployment workflows",
                    "Write and maintain infrastructure-as-code (e.g., Terraform) with supervision",
                    "Monitor services and respond to basic alerts and incidents",
                    "Contribute to documentation of runbooks and platform tooling",
                    "Collaborate with engineers on reliability and performance tasks"
                ],
                skills: [
                    "Foundational knowledge of at least one cloud provider (AWS/GCP/Azure)",
                    "Basics of CI/CD (e.g., GitHub Actions, GitLab CI, Jenkins)",
                    "Intro to infrastructure-as-code (Terraform/CloudFormation)",
                    "Linux fundamentals, shell scripting, and version control (Git)",
                    "Strong willingness to learn SRE/DevOps practices"
                ]
            },
            l3: {
                title: "DevOps Engineer",
                description: "A DevOps engineer (2-5 years) who independently builds and maintains CI/CD pipelines, IaC modules, and observability. Improves developer experience and environment reliability.",
                responsibilities: [
                    "Design, implement, and own CI/CD pipelines and release strategies",
                    "Develop reusable infrastructure-as-code modules and standards",
                    "Implement monitoring, logging, and alerting with SLO/SLI practices",
                    "Automate environment provisioning and configuration management",
                    "Collaborate with product teams to improve operability and performance"
                ],
                skills: [
                    "Proficiency with a major cloud provider and VPC/networking basics",
                    "Strong CI/CD tooling expertise and artifact/versioning strategy",
                    "Hands-on with Terraform/CloudFormation and configuration management",
                    "Observability stacks (e.g., Prometheus, Grafana, ELK, OpenTelemetry)",
                    "Containerization/orchestration fundamentals (Docker/Kubernetes)"
                ]
            },
            l4: {
                title: "Senior DevOps Engineer",
                description: "A senior DevOps engineer (5-8 years) leading platform reliability, cost/scale efficiency, security-by-default CI/CD, and incident response. Mentors DevOps engineers and drives best practices.",
                responsibilities: [
                    "Architect reliable, secure, and scalable platform/infrastructure solutions",
                    "Own incident response processes and drive post-incident improvements",
                    "Establish platform standards for IaC, CI/CD, and observability",
                    "Optimize performance and cost across environments",
                    "Mentor L2/L3 engineers and uplift operational excellence"
                ],
                skills: [
                    "Deep cloud architecture and Kubernetes operations",
                    "Advanced IaC patterns, modules, and policy as code",
                    "SRE practices: SLOs, error budgets, capacity planning",
                    "Strong security posture in pipelines and runtime environments",
                    "Infra cost analysis and optimization"
                ]
            },
            l5: {
                title: "Staff DevOps Engineer / Platform Engineer",
                description: "A staff-level DevOps/platform leader (8-12+ years) defining the platform roadmap, scaling patterns, and reliability strategies across multiple teams; aligns infrastructure with business goals.",
                responsibilities: [
                    "Define platform strategy and multi-region/HA architectures",
                    "Lead cross-team initiatives on developer experience and reliability",
                    "Set standards for security, compliance, and governance in the platform",
                    "Drive significant cost/performance improvements at scale",
                    "Coach senior engineers and influence technical direction across org"
                ],
                skills: [
                    "Expertise in distributed systems and multi-cluster operations",
                    "Platform product thinking and strong stakeholder communication",
                    "Compliance and governance in cloud environments",
                    "Incident/chaos engineering and resilience patterns",
                    "Long-term capacity, reliability, and cost modeling"
                ]
            },
            l6: {
                title: "Principal DevOps Engineer",
                description: "A principal-level platform/SRE leader (12+ years) setting vision for reliability, platform products, and automation across the company; represents platform externally.",
                responsibilities: [
                    "Set long-term reliability and platform vision for the company",
                    "Lead transformative platform programs and large-scale migrations",
                    "Evolve org-wide incident management and resilience practices",
                    "Mentor Staff/Principal engineers and build platform communities of practice",
                    "Represent platform strategy with executives and at industry forums"
                ],
                skills: [
                    "World-class platform/SRE expertise across clouds and orchestration",
                    "Visionary thinking with pragmatic execution in large environments",
                    "Exceptional influence and communication at executive level",
                    "Proven record of operating planet-scale or mission-critical systems",
                    "Ecosystem leadership and strong external credibility"
                ]
            }
        }
    },

    countries: {
        lithuania: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 32960, max: 43260 },
                    L3: { min: 43260, max: 55620 },
                    L4: { min: 55620, max: 69010 },
                    L5: { min: 69010, max: 84460 },
                    L6: { min: 84460, max: 97850 }
                },
                dataEngineer: {
                    L2: { min: 35020, max: 46350 },
                    L3: { min: 46350, max: 58710 },
                    L4: { min: 58710, max: 72100 },
                    L5: { min: 72100, max: 87550 },
                    L6: { min: 87550, max: 103000 }
                },
                pm: {
                    L2: { min: 30900, max: 41200 },
                    L3: { min: 41200, max: 53560 },
                    L4: { min: 53560, max: 66950 },
                    L5: { min: 66950, max: 82400 },
                    L6: { min: 82400, max: 97850 }
                },
                designer: {
                    L2: { min: 28840, max: 38110 },
                    L3: { min: 38110, max: 49440 },
                    L4: { min: 49440, max: 61800 },
                    L5: { min: 61800, max: 77250 },
                    L6: { min: 77250, max: 92700 }
                },
                devOpsEngineer: {
                    L2: { min: 32960, max: 43260 },
                    L3: { min: 43260, max: 55620 },
                    L4: { min: 55620, max: 69010 },
                    L5: { min: 69010, max: 84460 },
                    L6: { min: 84460, max: 97850 }
                }
            },
            notes: "Lithuania's IT sector continues steady growth with demand for engineers and data talent. Fast refresh applied (~3%) with November 2025 market context and updated EUR/USD."
        },
        usa: {
            currency: "USD",
            roles: {
                engineer: {
                    L2: { min: 92700, max: 123600 },
                    L3: { min: 123600, max: 159650 },
                    L4: { min: 159650, max: 200850 },
                    L5: { min: 200850, max: 247200 },
                    L6: { min: 247200, max: 309000 }
                },
                dataEngineer: {
                    L2: { min: 97850, max: 128750 },
                    L3: { min: 128750, max: 164800 },
                    L4: { min: 164800, max: 206000 },
                    L5: { min: 206000, max: 257500 },
                    L6: { min: 257500, max: 319300 }
                },
                pm: {
                    L2: { min: 87550, max: 123600 },
                    L3: { min: 123600, max: 164800 },
                    L4: { min: 154500, max: 200850 },
                    L5: { min: 175100, max: 247200 },
                    L6: { min: 206000, max: 278100 }
                },
                designer: {
                    L2: { min: 82400, max: 113300 },
                    L3: { min: 113300, max: 154500 },
                    L4: { min: 144200, max: 185400 },
                    L5: { min: 164800, max: 216300 },
                    L6: { min: 195700, max: 257500 }
                },
                devOpsEngineer: {
                    L2: { min: 92700, max: 123600 },
                    L3: { min: 123600, max: 159650 },
                    L4: { min: 159650, max: 200850 },
                    L5: { min: 200850, max: 247200 },
                    L6: { min: 247200, max: 309000 }
                }
            },
            notes: "Salaries reflect 2025–2025H2 US market, uplifted ~3% in fast refresh. Major hubs (SF, NYC, Seattle) trend materially higher. Exchange rates updated November 2025."
        },
        spain: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 25750, max: 36050 },
                    L3: { min: 36050, max: 51500 },
                    L4: { min: 51500, max: 66950 },
                    L5: { min: 66950, max: 82400 },
                    L6: { min: 82400, max: 97850 }
                },
                dataEngineer: {
                    L2: { min: 27810, max: 38110 },
                    L3: { min: 38110, max: 53560 },
                    L4: { min: 53560, max: 69010 },
                    L5: { min: 69010, max: 84460 },
                    L6: { min: 84460, max: 100940 }
                },
                pm: {
                    L2: { min: 23690, max: 32960 },
                    L3: { min: 32960, max: 46350 },
                    L4: { min: 46350, max: 61800 },
                    L5: { min: 61800, max: 77250 },
                    L6: { min: 77250, max: 92700 }
                },
                designer: {
                    L2: { min: 21630, max: 30900 },
                    L3: { min: 30900, max: 43320 },
                    L4: { min: 43320, max: 56650 },
                    L5: { min: 56650, max: 72100 },
                    L6: { min: 72100, max: 87550 }
                },
                devOpsEngineer: {
                    L2: { min: 25750, max: 36050 },
                    L3: { min: 36050, max: 51500 },
                    L4: { min: 51500, max: 66950 },
                    L5: { min: 66950, max: 82400 },
                    L6: { min: 82400, max: 97850 }
                }
            },
            notes: "Spain salaries typically paid in 14 installments; Barcelona and Madrid remain above national medians. Fast refresh (~3%) and November 2025 FX incorporated."
        },
        poland: {
            currency: "PLN",
            roles: {
                engineer: {
                    L2: { min: 97850, max: 133900 },
                    L3: { min: 133900, max: 185400 },
                    L4: { min: 185400, max: 247200 },
                    L5: { min: 247200, max: 319300 },
                    L6: { min: 319300, max: 401700 }
                },
                dataEngineer: {
                    L2: { min: 103000, max: 139050 },
                    L3: { min: 139050, max: 190550 },
                    L4: { min: 190550, max: 252350 },
                    L5: { min: 252350, max: 329600 },
                    L6: { min: 329600, max: 412000 }
                },
                pm: {
                    L2: { min: 92700, max: 123600 },
                    L3: { min: 123600, max: 164800 },
                    L4: { min: 164800, max: 216300 },
                    L5: { min: 216300, max: 278100 },
                    L6: { min: 278100, max: 350200 }
                },
                designer: {
                    L2: { min: 82400, max: 113300 },
                    L3: { min: 113300, max: 154500 },
                    L4: { min: 154500, max: 206000 },
                    L5: { min: 206000, max: 267800 },
                    L6: { min: 267800, max: 329600 }
                },
                devOpsEngineer: {
                    L2: { min: 97850, max: 133900 },
                    L3: { min: 133900, max: 185400 },
                    L4: { min: 185400, max: 247200 },
                    L5: { min: 247200, max: 319300 },
                    L6: { min: 319300, max: 401700 }
                }
            },
            notes: "Strong IT demand in Warsaw/Krakow; ranges reflect ~3% fast uplift and PLN/USD parity as of November 2025."
        },
        canada: {
            currency: "CAD",
            roles: {
                engineer: {
                    L2: { min: 82400, max: 108150 },
                    L3: { min: 108150, max: 139050 },
                    L4: { min: 139050, max: 175100 },
                    L5: { min: 175100, max: 226600 },
                    L6: { min: 226600, max: 278100 }
                },
                dataEngineer: {
                    L2: { min: 87550, max: 113300 },
                    L3: { min: 113300, max: 144200 },
                    L4: { min: 144200, max: 180250 },
                    L5: { min: 180250, max: 231750 },
                    L6: { min: 231750, max: 288400 }
                },
                pm: {
                    L2: { min: 77250, max: 103000 },
                    L3: { min: 103000, max: 133900 },
                    L4: { min: 133900, max: 169950 },
                    L5: { min: 169950, max: 216300 },
                    L6: { min: 216300, max: 267800 }
                },
                designer: {
                    L2: { min: 72100, max: 97850 },
                    L3: { min: 97850, max: 128750 },
                    L4: { min: 128750, max: 164800 },
                    L5: { min: 164800, max: 206000 },
                    L6: { min: 206000, max: 257500 }
                },
                devOpsEngineer: {
                    L2: { min: 82400, max: 108150 },
                    L3: { min: 108150, max: 139050 },
                    L4: { min: 139050, max: 175100 },
                    L5: { min: 175100, max: 226600 },
                    L6: { min: 226600, max: 278100 }
                }
            },
            notes: "Toronto/Vancouver/Montreal lead ranges. Fast refresh (~3%) with CAD/USD November 2025 rate applied."
        },
        ukraine: {
            currency: "USD",
            roles: {
                engineer: {
                    L2: { min: 13400, max: 19400 },
                    L3: { min: 19400, max: 26800 },
                    L4: { min: 26800, max: 37300 },
                    L5: { min: 37200, max: 52100 },
                    L6: { min: 52100, max: 67000 }
                },
                dataEngineer: {
                    L2: { min: 14100, max: 20400 },
                    L3: { min: 20400, max: 28600 },
                    L4: { min: 28600, max: 39700 },
                    L5: { min: 39700, max: 54600 },
                    L6: { min: 54600, max: 70700 }
                },
                pm: {
                    L2: { min: 11900, max: 17400 },
                    L3: { min: 17400, max: 24800 },
                    L4: { min: 24800, max: 34800 },
                    L5: { min: 34800, max: 47200 },
                    L6: { min: 47200, max: 62100 }
                },
                designer: {
                    L2: { min: 10400, max: 14900 },
                    L3: { min: 14900, max: 22300 },
                    L4: { min: 22300, max: 32300 },
                    L5: { min: 32300, max: 44700 },
                    L6: { min: 44700, max: 59600 }
                },
                devOpsEngineer: {
                    L2: { min: 13400, max: 19400 },
                    L3: { min: 19400, max: 26800 },
                    L4: { min: 26800, max: 37300 },
                    L5: { min: 37200, max: 52100 },
                    L6: { min: 52100, max: 67000 }
                }
            },
            notes: "Currency converted to USD for Ukraine using November 2025 FX. Ranges reflect fast refresh (~3%) with Djinni 30-day market thresholds as reference.",
            sources: {
                djinni: {
                    url: "https://djinni.co/salaries/",
                    updated: "November 2025",
                    window: "last 30 days",
                    currency: "USD",
                    expectationsAvg: { min: 1000, max: 3500 },
                    jobsMedianRange: { min: 1200, max: 2500 },
                    hiredMedian: 2300
                }
            }
        },
        slovakia: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 28840, max: 38110 },
                    L3: { min: 38110, max: 51500 },
                    L4: { min: 51500, max: 66950 },
                    L5: { min: 66950, max: 82400 },
                    L6: { min: 82400, max: 97850 }
                },
                dataEngineer: {
                    L2: { min: 30900, max: 41200 },
                    L3: { min: 41200, max: 55620 },
                    L4: { min: 55620, max: 72100 },
                    L5: { min: 72100, max: 87550 },
                    L6: { min: 87550, max: 103000 }
                },
                pm: {
                    L2: { min: 25750, max: 35020 },
                    L3: { min: 35020, max: 47380 },
                    L4: { min: 47380, max: 61800 },
                    L5: { min: 61800, max: 77250 },
                    L6: { min: 77250, max: 92700 }
                },
                designer: {
                    L2: { min: 23690, max: 32960 },
                    L3: { min: 32960, max: 43320 },
                    L4: { min: 43320, max: 56650 },
                    L5: { min: 56650, max: 72100 },
                    L6: { min: 72100, max: 87550 }
                },
                devOpsEngineer: {
                    L2: { min: 28840, max: 38110 },
                    L3: { min: 38110, max: 51500 },
                    L4: { min: 51500, max: 66950 },
                    L5: { min: 66950, max: 82400 },
                    L6: { min: 82400, max: 97850 }
                }
            },
            notes: "Competitive within EU with lower living costs versus Western Europe. Fast refresh (~3%) and November 2025 FX."
        },
        germany: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 61800, max: 82400 },
                    L3: { min: 82400, max: 103000 },
                    L4: { min: 103000, max: 128750 },
                    L5: { min: 128750, max: 159650 },
                    L6: { min: 159650, max: 206000 }
                },
                dataEngineer: {
                    L2: { min: 64890, max: 87550 },
                    L3: { min: 87550, max: 108150 },
                    L4: { min: 108150, max: 133900 },
                    L5: { min: 133900, max: 164800 },
                    L6: { min: 164800, max: 216300 }
                },
                pm: {
                    L2: { min: 56650, max: 72100 },
                    L3: { min: 72100, max: 92700 },
                    L4: { min: 92700, max: 118450 },
                    L5: { min: 118450, max: 149350 },
                    L6: { min: 149350, max: 190550 }
                },
                designer: {
                    L2: { min: 53560, max: 69010 },
                    L3: { min: 69010, max: 89610 },
                    L4: { min: 89610, max: 113300 },
                    L5: { min: 113300, max: 144200 },
                    L6: { min: 144200, max: 185400 }
                },
                devOpsEngineer: {
                    L2: { min: 61800, max: 82400 },
                    L3: { min: 82400, max: 103000 },
                    L4: { min: 103000, max: 128750 },
                    L5: { min: 128750, max: 159650 },
                    L6: { min: 159650, max: 206000 }
                }
            },
            notes: "Some employers include 13th month pay; Berlin/Munich trend higher. Fast refresh (~3%) and November 2025 exchange rates applied."
        },
        uk: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 42230, max: 50470 },
                    L3: { min: 50470, max: 59740 },
                    L4: { min: 59740, max: 67980 },
                    L5: { min: 70000, max: 90000 },
                    L6: { min: 90000, max: 120000 }
                },
                dataEngineer: {
                    L2: { min: 55620, max: 61800 },
                    L3: { min: 61800, max: 75190 },
                    L4: { min: 75190, max: 97850 },
                    L5: { min: 73500, max: 94500 },
                    L6: { min: 94500, max: 126000 }
                },
                pm: {
                    L2: { min: 39140, max: 49440 },
                    L3: { min: 49440, max: 66950 },
                    L4: { min: 66950, max: 84460 },
                    L5: { min: 70000, max: 90000 },
                    L6: { min: 90000, max: 120000 }
                },
                designer: {
                    L2: { min: 36050, max: 46350 },
                    L3: { min: 46350, max: 61800 },
                    L4: { min: 61800, max: 80340 },
                    L5: { min: 56000, max: 72000 },
                    L6: { min: 72000, max: 96000 }
                },
                devOpsEngineer: {
                    L2: { min: 42230, max: 50470 },
                    L3: { min: 50470, max: 59740 },
                    L4: { min: 59740, max: 67980 },
                    L5: { min: 71400, max: 91800 },
                    L6: { min: 91800, max: 122400 }
                }
            },
            notes: "UK ranges validated for Wales; London typically 15–25% higher. Fast refresh (~3%) and GBP/USD as of August 2026."
        }
    },

    salaryRanges: {
        engineer: {
            usa: {
                L2: { min: 87550, max: 113300 },
                L3: { min: 113300, max: 144200 },
                L4: { min: 144200, max: 185400 },
                L5: { min: 185400, max: 226600 },
                L6: { min: 226600, max: 288400 }
            },
            uk: {
                L2: { min: 46350, max: 66950 },
                L3: { min: 66950, max: 87650 },
                L4: { min: 87650, max: 113300 },
                L5: { min: 113300, max: 144200 },
                L6: { min: 144200, max: 185400 }
            },
            germany: {
                L2: { min: 56650, max: 77250 },
                L3: { min: 77250, max: 97850 },
                L4: { min: 97850, max: 123600 },
                L5: { min: 123600, max: 154500 },
                L6: { min: 154500, max: 195700 }
            }
        },
        dataEngineer: {
            usa: {
                L2: { min: 92700, max: 118450 },
                L3: { min: 118450, max: 149350 },
                L4: { min: 149350, max: 190550 },
                L5: { min: 190550, max: 231750 },
                L6: { min: 231750, max: 293550 }
            },
            uk: {
                L2: { min: 49440, max: 70040 },
                L3: { min: 70040, max: 90680 },
                L4: { min: 90680, max: 118450 },
                L5: { min: 118450, max: 149350 },
                L6: { min: 149350, max: 190550 }
            },
            germany: {
                L2: { min: 59740, max: 80340 },
                L3: { min: 80340, max: 100040 },
                L4: { min: 100040, max: 127500 },
                L5: { min: 127500, max: 158650 },
                L6: { min: 158650, max: 199650 }
            }
        },
        devOpsEngineer: {
            usa: {
                L2: { min: 92700, max: 123600 },
                L3: { min: 123600, max: 159650 },
                L4: { min: 159650, max: 200850 },
                L5: { min: 200850, max: 247200 },
                L6: { min: 247200, max: 309000 }
            },
            uk: {
                L2: { min: 42230, max: 50470 },
                L3: { min: 50470, max: 59740 },
                L4: { min: 59740, max: 67980 },
                L5: { min: 67980, max: 82400 },
                L6: { min: 82400, max: 97850 }
            },
            germany: {
                L2: { min: 61800, max: 82400 },
                L3: { min: 82400, max: 103000 },
                L4: { min: 103000, max: 128750 },
                L5: { min: 128750, max: 159650 },
                L6: { min: 159650, max: 206000 }
            }
        }
    }
}; 