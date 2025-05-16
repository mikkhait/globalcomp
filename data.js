/**
 * Global Compensation Calculator Data
 * Version: 2.5.0
 * Last Updated: June 2025
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
            version: "2.5.0",
            date: "June 2025",
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
        EUR: 0.9185,
        PLN: 0.2512,
        UAH: 0.0258,
        CAD: 0.7389,
        GBP: 0.7876,
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
        uk: 'GBP'
    },
    
    costOfLiving: {
        lithuania: {
            index: 48.2,
            rent: {
                min: 680,
                max: 1350
            },
            details: {
                meal: 12,
                transport: 48,
                utilities: 195
            },
            taxRates: {
                incomeTax: 0.20,      // Progressive rate for higher income
                socialSecurity: 0.195, // 19.5% social insurance
                other: 0.015          // Health insurance
            }
        },
        spain: {
            index: 55.2,
            rent: {
                min: 850,
                max: 1700
            },
            details: {
                meal: 13,
                transport: 48,
                utilities: 150
            },
            taxRates: {
                incomeTax: 0.37,      // Progressive rate for tech salaries
                socialSecurity: 0.064, // Employee social security
                other: 0.02           // Regional taxes
            }
        },
        poland: {
            index: 42.8,
            rent: {
                min: 2700,
                max: 4800
            },
            details: {
                meal: 38,
                transport: 120,
                utilities: 800
            },
            taxRates: {
                incomeTax: 0.32,      // Higher bracket for tech salaries
                socialSecurity: 0.1371,// ZUS employee contribution
                other: 0.09           // Health insurance
            }
        },
        canada: {
            index: 73.5,
            rent: {
                min: 2100,
                max: 2900
            },
            details: {
                meal: 28,
                transport: 140,
                utilities: 220
            },
            taxRates: {
                incomeTax: 0.335,     // Federal + Provincial (ON) average
                socialSecurity: 0.0595,// CPP + EI
                other: 0.015          // Health premium
            }
        },
        ukraine: {
            index: 33.5,
            rent: {
                min: 15000,
                max: 30000
            },
            details: {
                meal: 300,
                transport: 600,
                utilities: 2500
            },
            taxRates: {
                incomeTax: 0.18,      // Flat rate
                socialSecurity: 0.05,  // Military tax + social security
                other: 0.015          // Additional levies
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
                incomeTax: 0.25,      // Progressive rate for tech salaries
                socialSecurity: 0.138, // Employee social insurance
                other: 0.04           // Health insurance
            }
        },
        wales: {
            index: 63.2,
            rent: {
                min: 1300,
                max: 2600
            },
            details: {
                meal: 16,
                transport: 180,
                utilities: 210
            },
            taxRates: {
                incomeTax: 0.40,      // Higher rate for tech salaries
                socialSecurity: 0.12,  // National Insurance
                other: 0.02           // Additional contributions
            }
        },
        usa: {
            index: 74.8,
            rent: {
                min: 2000,
                max: 3800
            },
            details: {
                meal: 20,
                transport: 130,
                utilities: 210
            },
            taxRates: {
                incomeTax: 0.32,      // Federal + State average for tech hubs
                socialSecurity: 0.0765,// FICA (Social Security + Medicare)
                other: 0.03           // State specific fees
            }
        },
        germany: {
            index: 67.5,
            rent: {
                min: 850,
                max: 1600
            },
            details: {
                meal: 13.5,
                transport: 85,
                utilities: 270
            },
            taxRates: {
                incomeTax: 0.42,      // Progressive rate for tech salaries
                socialSecurity: 0.20,  // Social insurance contributions
                other: 0.01           // Solidarity surcharge
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
                incomeTax: 0.40,      // Higher rate band
                socialSecurity: 0.12,  // National Insurance
                other: 0.02           // Additional contributions
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
                employerTax: 0.0765,  // FICA
                workersComp: 0.022,   // Updated workers comp rate for 2024
                otherFees: 0.045,     // Updated other fees for 2024
                description: "Includes FICA (7.65%), workers compensation, and state-specific fees"
            },
            spain: {
                employerTax: 0.298,  // Social Security contributions
                workersComp: 0.016,  // Work accident insurance
                otherFees: 0.032,    // Other contributions (e.g., unemployment, training)
                description: "Includes Social Security contributions, work accident insurance, unemployment fund, and other mandatory contributions"
            },
            poland: {
                employerTax: 0.205,  // Social contributions (ZUS)
                workersComp: 0.0167, // Accident insurance
                otherFees: 0.028,    // Other contributions (e.g., Labour Fund, Employee Guaranteed Benefits Fund)
                description: "Includes ZUS contributions (pension, disability, sickness, health), accident insurance, and other mandatory contributions"
            },
            ukraine: {
                employerTax: 0.22,   // Unified Social Contribution (USC)
                workersComp: 0.012,  // Occupational risk insurance (depending on risk class)
                otherFees: 0.015,    // Other contributions (e.g., military levy)
                description: "Includes Unified Social Contribution, occupational risk insurance, military levy, and other mandatory contributions"
            },
            slovakia: {
                employerTax: 0.352,  // Social and health insurance
                workersComp: 0.008,  // Accident insurance
                otherFees: 0.012,    // Other contributions (e.g., guarantee fund, reserve fund)
                description: "Includes social and health insurance contributions, accident insurance, and other mandatory contributions"
            },
            canada: {
                employerTax: 0.0565, // Canada Pension Plan (CPP) + Employment Insurance (EI)
                workersComp: 0.022,  // Workers' compensation (varies by province)
                otherFees: 0.028,    // Other contributions (e.g., provincial payroll taxes, health premiums)
                description: "Includes CPP and EI contributions, provincial workers' compensation, and other provincial taxes and premiums"
            },
            wales: {
                employerTax: 0.138,  // National Insurance contributions (Class 1)
                workersComp: 0.012,  // Employers' liability insurance
                otherFees: 0.028,    // Other contributions (e.g., pension contributions, apprenticeship levy)
                description: "Includes National Insurance contributions, employers' liability insurance, pension contributions, and other mandatory contributions"
            },
            lithuania: {
                employerTax: 0.3118, // Social insurance contributions (Sodra)
                workersComp: 0.0018, // Guarantee fund contribution
                otherFees: 0.012,    // Other contributions (e.g., long-term unemployment insurance)
                description: "Includes Sodra contributions (pension, sickness, maternity, unemployment), guarantee fund contribution, and other mandatory contributions"
            },
            germany: {
                employerTax: 0.206,  // Social security contributions
                workersComp: 0.014,  // Accident insurance
                otherFees: 0.025,    // Other contributions
                description: "Includes social security contributions, accident insurance, and other mandatory contributions"
            },
            uk: {
                employerTax: 0.138,  // National Insurance contributions
                workersComp: 0.012,  // Employers' liability insurance
                otherFees: 0.028,    // Other contributions
                description: "Includes National Insurance contributions, employers' liability insurance, and other mandatory contributions"
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

    roleDefinitions: {
        engineer: {
            l2: {
                title: "Software Engineer I",
                description: "Entry-level engineer with 0-2 years of experience. Focuses on implementing well-defined tasks, learning coding standards, and contributing to team projects under guidance.",
                responsibilities: [
                    "Implement features and bug fixes with guidance",
                    "Write unit tests and documentation",
                    "Participate in code reviews and team meetings",
                    "Learn and apply best practices and coding standards",
                    "Contribute to technical discussions"
                ],
                skills: [
                    "Proficiency in at least one programming language",
                    "Basic understanding of data structures and algorithms",
                    "Familiarity with version control systems",
                    "Understanding of software development lifecycle",
                    "Ability to work in a team environment"
                ]
            },
            l3: {
                title: "Software Engineer II",
                description: "Mid-level engineer with 2-5 years of experience. Works independently on features, mentors junior engineers, and contributes to architectural discussions.",
                responsibilities: [
                    "Design and implement features independently",
                    "Debug complex issues across the stack",
                    "Review code and mentor junior engineers",
                    "Contribute to technical design discussions",
                    "Improve development processes and tooling"
                ],
                skills: [
                    "Strong proficiency in multiple programming languages",
                    "Experience with system design and architecture",
                    "Solid understanding of performance optimization",
                    "Knowledge of cloud services and deployment strategies",
                    "Ability to balance technical debt with delivery needs"
                ]
            },
            l4: {
                title: "Senior Software Engineer",
                description: "Experienced engineer with 5-8 years of experience. Leads technical initiatives, makes architectural decisions, and mentors team members.",
                responsibilities: [
                    "Lead technical initiatives and feature development",
                    "Make architectural decisions for team projects",
                    "Mentor engineers and provide technical guidance",
                    "Collaborate with product and design teams",
                    "Drive technical excellence and best practices"
                ],
                skills: [
                    "Expert in multiple programming languages and frameworks",
                    "Strong system design and architecture skills",
                    "Experience with distributed systems and scalability",
                    "Deep understanding of software engineering principles",
                    "Ability to balance business needs with technical considerations"
                ]
            },
            l5: {
                title: "Staff Software Engineer",
                description: "Senior technical leader with 8-12 years of experience. Drives technical strategy across multiple teams, solves complex architectural challenges, and influences organization-wide technical decisions.",
                responsibilities: [
                    "Drive technical strategy across multiple teams",
                    "Solve complex architectural challenges",
                    "Influence organization-wide technical decisions",
                    "Mentor senior engineers and technical leads",
                    "Collaborate with leadership on technical roadmaps"
                ],
                skills: [
                    "Expert-level technical depth in multiple domains",
                    "Ability to design complex distributed systems",
                    "Experience with large-scale system architecture",
                    "Strong technical leadership and communication skills",
                    "Deep understanding of business domain and strategy"
                ]
            },
            l6: {
                title: "Principal Software Engineer",
                description: "Distinguished technical leader with 12+ years of experience. Sets technical vision for the organization, leads cross-functional initiatives, and represents the company externally.",
                responsibilities: [
                    "Set technical vision for the organization",
                    "Lead cross-functional technical initiatives",
                    "Represent the company externally (conferences, papers)",
                    "Drive innovation and technical excellence",
                    "Influence product strategy and business direction"
                ],
                skills: [
                    "Recognized technical authority in the industry",
                    "Ability to solve unprecedented technical challenges",
                    "Experience leading organization-wide technical transformations",
                    "Strategic thinking and business acumen",
                    "Exceptional leadership and communication skills"
                ]
            }
        },
        productManager: {
            l2: {
                title: "Associate Product Manager",
                description: "Entry-level product manager with 0-2 years of experience. Supports product initiatives, gathers requirements, and learns product development processes.",
                responsibilities: [
                    "Support product initiatives under guidance",
                    "Gather and document requirements",
                    "Coordinate with engineering and design teams",
                    "Analyze user feedback and product metrics",
                    "Assist with product launches and updates"
                ],
                skills: [
                    "Basic understanding of product development lifecycle",
                    "Strong analytical and problem-solving skills",
                    "Good communication and collaboration abilities",
                    "Familiarity with user research methods",
                    "Ability to prioritize tasks effectively"
                ]
            },
            l3: {
                title: "Product Manager",
                description: "Mid-level product manager with 2-5 years of experience. Manages product features independently, conducts user research, and drives product roadmap execution.",
                responsibilities: [
                    "Manage product features from conception to launch",
                    "Conduct user research and validate product ideas",
                    "Create and maintain product roadmaps",
                    "Work closely with engineering and design teams",
                    "Analyze product metrics and make data-driven decisions"
                ],
                skills: [
                    "Strong product development and management skills",
                    "Experience with user research and validation methods",
                    "Ability to create clear product specifications",
                    "Understanding of technical constraints and possibilities",
                    "Data analysis and decision-making capabilities"
                ]
            },
            l4: {
                title: "Senior Product Manager",
                description: "Experienced product manager with 5-8 years of experience. Leads product strategy for a product area, manages cross-functional teams, and drives business outcomes.",
                responsibilities: [
                    "Lead product strategy for a product area",
                    "Manage cross-functional teams to deliver products",
                    "Drive business outcomes through product initiatives",
                    "Develop product vision and roadmap",
                    "Balance user needs with business objectives"
                ],
                skills: [
                    "Expert in product management methodologies",
                    "Strong strategic thinking and business acumen",
                    "Experience leading cross-functional teams",
                    "Ability to influence stakeholders without authority",
                    "Deep understanding of market and competitive landscape"
                ]
            },
            l5: {
                title: "Group Product Manager",
                description: "Senior product leader with 8-12 years of experience. Oversees multiple product lines, develops product strategy, and mentors product managers.",
                responsibilities: [
                    "Oversee multiple product lines or areas",
                    "Develop product strategy aligned with company goals",
                    "Mentor and develop product managers",
                    "Drive innovation and product excellence",
                    "Collaborate with executive leadership on business strategy"
                ],
                skills: [
                    "Expert-level product management skills",
                    "Strong leadership and team development abilities",
                    "Strategic thinking and business planning",
                    "Experience with product portfolio management",
                    "Ability to translate business strategy into product roadmaps"
                ]
            },
            l6: {
                title: "Director of Product",
                description: "Executive product leader with 12+ years of experience. Sets product vision and strategy for the organization, leads product teams, and drives business growth.",
                responsibilities: [
                    "Set product vision and strategy for the organization",
                    "Lead and develop product management teams",
                    "Drive business growth through product innovation",
                    "Represent product externally to customers and partners",
                    "Collaborate with C-level executives on company strategy"
                ],
                skills: [
                    "Visionary product leadership",
                    "Executive-level communication and influence",
                    "Experience building and scaling product organizations",
                    "Strong business acumen and strategic thinking",
                    "Ability to balance innovation with execution"
                ]
            }
        },
        designer: {
            l2: {
                title: "Junior Designer",
                description: "Entry-level designer with 0-2 years of experience. Creates UI elements, assists with design implementation, and learns design systems and processes.",
                responsibilities: [
                    "Create UI elements and assets under guidance",
                    "Assist with design implementation",
                    "Participate in design reviews and team meetings",
                    "Learn and apply design systems and guidelines",
                    "Support user research and testing activities"
                ],
                skills: [
                    "Proficiency in design tools (Figma, Adobe Creative Suite)",
                    "Basic understanding of UI/UX principles",
                    "Familiarity with responsive design concepts",
                    "Ability to receive and implement feedback",
                    "Attention to detail and visual aesthetics"
                ]
            },
            l3: {
                title: "Product Designer",
                description: "Mid-level designer with 2-5 years of experience. Designs complete features, conducts user research, and contributes to design systems.",
                responsibilities: [
                    "Design complete features independently",
                    "Conduct user research and usability testing",
                    "Create wireframes, prototypes, and high-fidelity designs",
                    "Collaborate with product and engineering teams",
                    "Contribute to design systems and guidelines"
                ],
                skills: [
                    "Strong UI/UX design skills",
                    "Experience with user research methodologies",
                    "Proficiency in creating interactive prototypes",
                    "Understanding of accessibility standards",
                    "Ability to communicate design decisions effectively"
                ]
            },
            l4: {
                title: "Senior Product Designer",
                description: "Experienced designer with 5-8 years of experience. Leads design for product areas, mentors designers, and drives design strategy.",
                responsibilities: [
                    "Lead design for product areas or features",
                    "Mentor junior designers and provide guidance",
                    "Drive design strategy and vision",
                    "Collaborate with product and engineering leadership",
                    "Champion user-centered design processes"
                ],
                skills: [
                    "Expert-level UI/UX design skills",
                    "Strong understanding of product development",
                    "Experience leading design projects end-to-end",
                    "Ability to balance user needs with business goals",
                    "Strong communication and presentation skills"
                ]
            },
            l5: {
                title: "Staff Designer",
                description: "Senior design leader with 8-12 years of experience. Shapes design strategy across multiple products, establishes design systems, and influences product direction.",
                responsibilities: [
                    "Shape design strategy across multiple products",
                    "Establish and evolve design systems",
                    "Influence product direction and roadmap",
                    "Mentor senior designers and design leads",
                    "Drive design innovation and excellence"
                ],
                skills: [
                    "Expert-level design leadership",
                    "Experience creating and scaling design systems",
                    "Strategic thinking and business understanding",
                    "Ability to influence cross-functional stakeholders",
                    "Deep understanding of user behavior and needs"
                ]
            },
            l6: {
                title: "Principal Designer",
                description: "Distinguished design leader with 12+ years of experience. Sets design vision for the organization, leads design teams, and represents the company's design philosophy externally.",
                responsibilities: [
                    "Set design vision for the organization",
                    "Lead design teams and develop design culture",
                    "Represent the company's design philosophy externally",
                    "Drive innovation in design practices and tools",
                    "Collaborate with executive leadership on strategy"
                ],
                skills: [
                    "Visionary design leadership",
                    "Experience building and leading design organizations",
                    "Ability to connect design to business outcomes",
                    "Strong executive presence and communication",
                    "Industry recognition and thought leadership"
                ]
            }
        },
        dataEngineer: {
            l2: {
                title: "Data Engineer I",
                description: "Entry-level data engineer with 0-2 years of experience. Focuses on building and maintaining data pipelines, ETL processes, and data storage solutions under guidance.",
                responsibilities: [
                    "Develop and maintain basic data pipelines with guidance",
                    "Implement ETL processes for data transformation",
                    "Assist with data storage and retrieval solutions",
                    "Write and optimize data queries",
                    "Participate in data architecture discussions"
                ],
                skills: [
                    "Proficiency in SQL and at least one programming language (Python, Scala)",
                    "Basic understanding of data modeling and database design",
                    "Familiarity with ETL tools and processes",
                    "Understanding of data warehousing concepts",
                    "Ability to work with structured and semi-structured data"
                ]
            },
            l3: {
                title: "Data Engineer II",
                description: "Mid-level data engineer with 2-5 years of experience. Works independently on data pipelines, optimizes data workflows, and contributes to data architecture decisions.",
                responsibilities: [
                    "Design and implement data pipelines independently",
                    "Optimize ETL processes for performance and reliability",
                    "Develop data models and storage solutions",
                    "Implement data quality checks and monitoring",
                    "Collaborate with data scientists and analysts on data needs"
                ],
                skills: [
                    "Strong proficiency in multiple data technologies (DBT, Airflow, Spark)",
                    "Experience with cloud data services (AWS, GCP, Azure)",
                    "Knowledge of data modeling methodologies",
                    "Understanding of distributed systems and big data processing",
                    "Ability to balance performance with data integrity needs"
                ]
            },
            l4: {
                title: "Senior Data Engineer",
                description: "Experienced data engineer with 5-8 years of experience. Leads data infrastructure initiatives, designs data architecture, and mentors junior data engineers.",
                responsibilities: [
                    "Lead data infrastructure initiatives and development",
                    "Design scalable data architectures",
                    "Mentor data engineers and provide technical guidance",
                    "Collaborate with cross-functional teams on data strategy",
                    "Drive data engineering best practices and standards"
                ],
                skills: [
                    "Expert in multiple data engineering tools and frameworks",
                    "Strong data architecture and system design skills",
                    "Experience with real-time and batch data processing",
                    "Deep understanding of data security and governance",
                    "Ability to translate business requirements into data solutions"
                ]
            },
            l5: {
                title: "Staff Data Engineer",
                description: "Senior technical leader with 8-12 years of experience. Drives data strategy across multiple teams, solves complex data architecture challenges, and influences organization-wide data decisions.",
                responsibilities: [
                    "Drive data strategy and architecture across multiple teams",
                    "Solve complex data engineering challenges",
                    "Influence organization-wide data decisions",
                    "Mentor senior data engineers and technical leads",
                    "Collaborate with leadership on data roadmaps"
                ],
                skills: [
                    "Expert-level technical depth in data engineering",
                    "Ability to design complex data ecosystems",
                    "Experience with large-scale data architecture",
                    "Strong technical leadership and communication skills",
                    "Deep understanding of business domains and data strategy"
                ]
            },
            l6: {
                title: "Principal Data Engineer",
                description: "Distinguished technical leader with 12+ years of experience. Sets data vision for the organization, leads cross-functional data initiatives, and represents the company externally in data engineering contexts.",
                responsibilities: [
                    "Set data vision and strategy for the organization",
                    "Lead cross-functional data engineering initiatives",
                    "Represent the company externally (conferences, papers)",
                    "Drive innovation in data engineering practices",
                    "Influence product and business strategy through data capabilities"
                ],
                skills: [
                    "Recognized authority in data engineering",
                    "Ability to solve unprecedented data challenges",
                    "Experience leading organization-wide data transformations",
                    "Strategic thinking and business acumen",
                    "Exceptional leadership and communication skills"
                ]
            }
        }
    },

    countries: {
        lithuania: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 25000, max: 38000 },
                    L3: { min: 38000, max: 50000 },
                    L4: { min: 50000, max: 65000 },
                    L5: { min: 65000, max: 80000 },
                    L6: { min: 80000, max: 95000 }
                },
                dataEngineer: {
                    L2: { min: 27000, max: 40000 },
                    L3: { min: 40000, max: 52000 },
                    L4: { min: 52000, max: 68000 },
                    L5: { min: 68000, max: 84000 },
                    L6: { min: 84000, max: 98000 }
                },
                pm: {
                    L2: { min: 23000, max: 34000 },
                    L3: { min: 34000, max: 48000 },
                    L4: { min: 48000, max: 62000 },
                    L5: { min: 62000, max: 75000 },
                    L6: { min: 75000, max: 90000 }
                },
                designer: {
                    L2: { min: 22000, max: 32000 },
                    L3: { min: 32000, max: 45000 },
                    L4: { min: 45000, max: 58000 },
                    L5: { min: 58000, max: 72000 },
                    L6: { min: 72000, max: 85000 }
                }
            },
            notes: "Lithuania's IT sector continues to grow, with increasing demand for skilled professionals. Remote work opportunities are expanding, and the government is offering additional incentives for tech companies."
        },
        usa: {
            currency: "USD",
            roles: {
                engineer: {
                    L2: { min: 85000, max: 120000 },    // Startup adjusted
                    L3: { min: 110000, max: 160000 },   // Startup adjusted
                    L4: { min: 140000, max: 190000 },   // Startup adjusted
                    L5: { min: 170000, max: 240000 },   // Startup adjusted
                    L6: { min: 210000, max: 300000 }    // Startup adjusted
                },
                dataEngineer: {
                    L2: { min: 90000, max: 125000 },    // Startup adjusted
                    L3: { min: 115000, max: 165000 },   // Startup adjusted
                    L4: { min: 145000, max: 195000 },   // Startup adjusted
                    L5: { min: 175000, max: 245000 },   // Startup adjusted
                    L6: { min: 215000, max: 305000 }    // Startup adjusted
                },
                pm: {
                    L2: { min: 80000, max: 110000 },    // Startup adjusted
                    L3: { min: 110000, max: 150000 },   // Startup adjusted
                    L4: { min: 140000, max: 180000 },   // Startup adjusted
                    L5: { min: 160000, max: 220000 },   // Startup adjusted
                    L6: { min: 190000, max: 260000 }    // Startup adjusted
                },
                designer: {
                    L2: { min: 75000, max: 100000 },    // Startup adjusted
                    L3: { min: 100000, max: 140000 },   // Startup adjusted
                    L4: { min: 130000, max: 170000 },   // Startup adjusted
                    L5: { min: 150000, max: 200000 },   // Startup adjusted
                    L6: { min: 180000, max: 240000 }    // Startup adjusted
                }
            },
            notes: "Salaries reflect startup compensation levels. Base salaries are typically 20-30% lower than large tech companies. Equity compensation varies by role and stage: Engineers (0.1-2% early, 0.02-0.2% later), PMs (0.1-1% early, 0.01-0.1% later), Designers (0.1-1.5% early, 0.02-0.15% later). Benefits typically include health insurance, 401(k) matching (0-4%), unlimited PTO, and professional development budget. Remote work policies often include location-based adjustments. Data updated June 2025."
        },
        spain: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 36000, max: 46000 },
                    L3: { min: 46000, max: 58000 },
                    L4: { min: 58000, max: 73000 },
                    L5: { min: 73000, max: 88000 },
                    L6: { min: 88000, max: 108000 }
                },
                dataEngineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 60000 },
                    L4: { min: 60000, max: 76000 },
                    L5: { min: 76000, max: 92000 },
                    L6: { min: 92000, max: 112000 }
                },
                pm: {
                    L2: { min: 34000, max: 44000 },
                    L3: { min: 44000, max: 56000 },
                    L4: { min: 56000, max: 70000 },
                    L5: { min: 70000, max: 85000 },
                    L6: { min: 85000, max: 103000 }
                },
                designer: {
                    L2: { min: 32000, max: 42000 },
                    L3: { min: 42000, max: 54000 },
                    L4: { min: 54000, max: 68000 },
                    L5: { min: 68000, max: 83000 },
                    L6: { min: 83000, max: 98000 }
                }
            },
            notes: "Salaries in Spain include 14 monthly payments. The tech industry is growing, particularly in hubs like Barcelona and Madrid. Data updated June 2025."
        },
        poland: {
            currency: "PLN",
            roles: {
                engineer: {
                    L2: { min: 110000, max: 140000 },
                    L3: { min: 140000, max: 200000 },
                    L4: { min: 170000, max: 220000 },
                    L5: { min: 220000, max: 280000 },
                    L6: { min: 280000, max: 340000 }
                },
                dataEngineer: {
                    L2: { min: 115000, max: 145000 },
                    L3: { min: 145000, max: 205000 },
                    L4: { min: 175000, max: 225000 },
                    L5: { min: 225000, max: 285000 },
                    L6: { min: 285000, max: 345000 }
                },
                pm: {
                    L2: { min: 100000, max: 130000 },
                    L3: { min: 130000, max: 180000 },
                    L4: { min: 160000, max: 210000 },
                    L5: { min: 210000, max: 270000 },
                    L6: { min: 270000, max: 330000 }
                },
                designer: {
                    L2: { min: 90000, max: 120000 },
                    L3: { min: 120000, max: 170000 },
                    L4: { min: 150000, max: 200000 },
                    L5: { min: 200000, max: 260000 },
                    L6: { min: 260000, max: 320000 }
                }
            },
            notes: "Poland's IT sector is booming, with a large talent pool and competitive salaries. Remote work for international companies is increasingly common. Warsaw and Krakow offer higher salaries. Data updated June 2025."
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
                dataEngineer: {
                    L2: { min: 75000, max: 95000 },
                    L3: { min: 95000, max: 125000 },
                    L4: { min: 125000, max: 155000 },
                    L5: { min: 155000, max: 205000 },
                    L6: { min: 205000, max: 255000 }
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
            notes: "Canadian tech hubs like Toronto, Vancouver, and Montreal offer competitive salaries. Benefits typically include health insurance and retirement plans. Data updated June 2025."
        },
        ukraine: {
            currency: "UAH",
            roles: {
                engineer: {
                    L2: { min: 600000, max: 840000 },
                    L3: { min: 960000, max: 1320000 },
                    L4: { min: 1440000, max: 1920000 },
                    L5: { min: 2040000, max: 2520000 },
                    L6: { min: 2760000, max: 3720000 }
                },
                dataEngineer: {
                    L2: { min: 630000, max: 870000 },
                    L3: { min: 990000, max: 1350000 },
                    L4: { min: 1470000, max: 1950000 },
                    L5: { min: 2070000, max: 2550000 },
                    L6: { min: 2790000, max: 3750000 }
                },
                pm: {
                    L2: { min: 540000, max: 780000 },
                    L3: { min: 900000, max: 1260000 },
                    L4: { min: 1380000, max: 1860000 },
                    L5: { min: 1980000, max: 2460000 },
                    L6: { min: 2700000, max: 3420000 }
                },
                designer: {
                    L2: { min: 480000, max: 720000 },
                    L3: { min: 840000, max: 1200000 },
                    L4: { min: 1320000, max: 1800000 },
                    L5: { min: 1920000, max: 2400000 },
                    L6: { min: 2640000, max: 3360000 }
                }
            },
            notes: "Salaries are for US-based companies hiring in Ukraine. Local companies typically offer 30-50% lower. Strong tech talent pool, particularly in Kyiv, Lviv, and Kharkiv. Data updated June 2025 reflecting wartime conditions."
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
                dataEngineer: {
                    L2: { min: 35000, max: 46000 },
                    L3: { min: 46000, max: 60000 },
                    L4: { min: 60000, max: 78000 },
                    L5: { min: 78000, max: 93000 },
                    L6: { min: 93000, max: 114000 }
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
            notes: "Slovakia offers competitive salaries within the EU, particularly in the growing tech sector. Living costs are relatively lower than in Western Europe. Data updated June 2025."
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
                dataEngineer: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 63000 },
                    L4: { min: 63000, max: 78000 },
                    L5: { min: 78000, max: 93000 },
                    L6: { min: 93000, max: 115000 }
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
            notes: "Salaries in Wales are competitive, with lower living costs compared to other parts of the UK. Growing tech hub with good work-life balance. Data updated June 2025."
        },
        germany: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 52000, max: 68000 },
                    L3: { min: 68000, max: 88000 },
                    L4: { min: 88000, max: 115000 },
                    L5: { min: 115000, max: 145000 },
                    L6: { min: 145000, max: 185000 }
                },
                dataEngineer: {
                    L2: { min: 55000, max: 72000 },
                    L3: { min: 72000, max: 92000 },
                    L4: { min: 92000, max: 120000 },
                    L5: { min: 120000, max: 150000 },
                    L6: { min: 150000, max: 190000 }
                },
                pm: {
                    L2: { min: 50000, max: 65000 },
                    L3: { min: 65000, max: 85000 },
                    L4: { min: 85000, max: 110000 },
                    L5: { min: 110000, max: 140000 },
                    L6: { min: 140000, max: 180000 }
                },
                designer: {
                    L2: { min: 48000, max: 63000 },
                    L3: { min: 63000, max: 83000 },
                    L4: { min: 83000, max: 105000 },
                    L5: { min: 105000, max: 135000 },
                    L6: { min: 135000, max: 175000 }
                }
            },
            notes: "Salaries include 13th month pay. Strong benefits package including ~30 days vacation, health insurance, and pension contributions. Berlin and Munich offer higher salaries than other regions. Data updated June 2025."
        },
        uk: {
            currency: "GBP",
            roles: {
                engineer: {
                    L2: { min: 40000, max: 50000 },
                    L3: { min: 50000, max: 68000 },
                    L4: { min: 68000, max: 85000 },
                    L5: { min: 85000, max: 100000 },
                    L6: { min: 100000, max: 125000 }
                },
                dataEngineer: {
                    L2: { min: 43000, max: 53000 },
                    L3: { min: 53000, max: 72000 },
                    L4: { min: 72000, max: 88000 },
                    L5: { min: 88000, max: 105000 },
                    L6: { min: 105000, max: 130000 }
                },
                pm: {
                    L2: { min: 38000, max: 48000 },
                    L3: { min: 48000, max: 65000 },
                    L4: { min: 65000, max: 82000 },
                    L5: { min: 82000, max: 95000 },
                    L6: { min: 95000, max: 120000 }
                },
                designer: {
                    L2: { min: 35000, max: 45000 },
                    L3: { min: 45000, max: 60000 },
                    L4: { min: 60000, max: 78000 },
                    L5: { min: 78000, max: 93000 },
                    L6: { min: 93000, max: 115000 }
                }
            },
            notes: "Salaries in the UK are competitive within the region, with a growing tech sector. London salaries are typically 15-25% higher than listed. Data updated June 2025."
        }
    }
}; 