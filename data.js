/**
 * Global Compensation Calculator Data
 * Version: 2.5.1
 * Last Updated: March 2024
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
        EUR: 1.07,
        PLN: 0.25,
        UAH: 0.025,
        CAD: 0.73,
        GBP: 1.2686,
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
                socialSecurity: 0.195, // 19.5% social insurance
                other: 0.015          // Health insurance
            }
        },
        spain: {
            index: 56.8,
            rent: {
                min: 900,
                max: 1800
            },
            details: {
                meal: 14,
                transport: 52,
                utilities: 165
            },
            taxRates: {
                incomeTax: 0.37,      // Progressive rate for tech salaries (30-47%)
                socialSecurity: 0.064, // 6.4% Employee social security
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
                incomeTax: 0.335,     // Federal + Provincial (ON) average (29-38%)
                socialSecurity: 0.0595,// CPP (5.95%) + EI (1.63%)
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
                incomeTax: 0.18,      // Flat personal income tax (18%)
                socialSecurity: 0.05,  // Military tax (1.5%) + social security (3.6%)
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
                incomeTax: 0.25,      // Progressive rate for tech salaries (19-25%)
                socialSecurity: 0.138, // Employee social insurance (13.8%)
                other: 0.04           // Health insurance (4%)
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
                incomeTax: 0.32,      // Federal + State average for tech hubs (22-37%)
                socialSecurity: 0.0765,// FICA (6.2% Social Security + 1.45% Medicare)
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
                incomeTax: 0.42,      // Progressive rate for tech salaries (14-45%)
                socialSecurity: 0.195, // Social insurance contributions (19.5%)
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
                socialSecurity: 0.12,  // National Insurance (10-12%)
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
                employerTax: 0.0765,  // FICA (6.2% Social Security + 1.45% Medicare)
                workersComp: 0.018,   // Workers comp insurance (1-3% based on industry)
                otherFees: 0.03,      // FUTA, SUTA, and other fees
                description: "Includes FICA (7.65%), workers compensation insurance (1.8%), and payroll taxes including FUTA and SUTA (3%)"
            },
            spain: {
                employerTax: 0.298,   // Social Security contributions (29.8%)
                workersComp: 0.016,   // Work accident insurance (1.6%)
                otherFees: 0.032,     // Other contributions (unemployment, training)
                description: "Includes Social Security contributions (29.8%), work accident insurance (1.6%), and other mandatory contributions such as unemployment and professional training funds (3.2%)"
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
                description: "Includes Unified Social Contribution (22%), occupational risk insurance (1.2%), military levy and other mandatory contributions (1.5%)"
            },
            slovakia: {
                employerTax: 0.352,   // Social and health insurance (35.2%)
                workersComp: 0.008,   // Accident insurance (0.8%)
                otherFees: 0.012,     // Guarantee fund, reserve fund (1.2%)
                description: "Includes social and health insurance contributions (35.2%), accident insurance (0.8%), and other mandatory contributions including guarantee fund and reserve fund (1.2%)"
            },
            canada: {
                employerTax: 0.0565,  // CPP (5.95%) + EI (2.21% employer portion)
                workersComp: 0.019,   // Workers' compensation (varies by province, 1.5-2.19%)
                otherFees: 0.025,     // Provincial payroll taxes, health premiums
                description: "Includes Canada Pension Plan (5.95%), Employment Insurance (2.21% employer portion), provincial workers' compensation (1.9%), and other provincial health premiums and payroll taxes (2.5%)"
            },
            lithuania: {
                employerTax: 0.3118,  // Social insurance contributions (Sodra) (31.18%)
                workersComp: 0.0018,  // Guarantee fund contribution (0.18%)
                otherFees: 0.012,     // Long-term unemployment insurance (1.2%)
                description: "Includes Sodra social insurance contributions for pension, sickness, maternity and unemployment (31.18%), guarantee fund contribution (0.18%), and long-term unemployment insurance (1.2%)"
            },
            germany: {
                employerTax: 0.206,   // Social security contributions (20.6%)
                workersComp: 0.014,   // Accident insurance (1.4%)
                otherFees: 0.025,     // Insolvency levy and other contributions
                description: "Includes social security contributions for pension, health, unemployment and nursing care (20.6%), statutory accident insurance (1.4%), and insolvency levy and other mandatory contributions (2.5%)"
            },
            uk: {
                employerTax: 0.138,   // National Insurance contributions (13.8%)
                workersComp: 0.012,   // Employers' liability insurance (1-2%)
                otherFees: 0.025,     // Apprenticeship levy, pension auto-enrollment
                description: "Includes National Insurance contributions (13.8%), employers' liability insurance (1.2%), apprenticeship levy, and pension auto-enrollment contributions (2.5%)"
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
                    "Mentor and coach L2/L3 Product Managers, fostering their growth and improving the team\'s overall effectiveness.",
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
                    "Visionary ability to shape overall company strategy and consistently drive significant business growth and competitive advantage through product innovation.",
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
                description: "A distinguished data engineering leader (12+ years), recognized for their deep and broad expertise and visionary impact on the company\'s entire data landscape. Principal Data Engineers set the long-term technical vision for data, drive groundbreaking innovation in data practices and platforms, mentor other senior technologists, and often represent the company\'s data capabilities externally.",
                responsibilities: [
                    "Define and champion the long-term technical vision, strategy, and architecture for all data engineering and platform initiatives across the company.",
                    "Initiate, lead, and deliver transformative, high-impact data projects and innovations that provide a significant competitive advantage through data.",
                    "Solve the company\'s most critical, complex, and ambiguous data engineering challenges, frequently pioneering new architectural patterns or technologies.",
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
                    L2: { min: 85000, max: 110000 },
                    L3: { min: 110000, max: 140000 },
                    L4: { min: 140000, max: 180000 },
                    L5: { min: 180000, max: 220000 },
                    L6: { min: 220000, max: 280000 }
                },
                dataEngineer: {
                    L2: { min: 90000, max: 115000 },
                    L3: { min: 115000, max: 145000 },
                    L4: { min: 145000, max: 185000 },
                    L5: { min: 185000, max: 225000 },
                    L6: { min: 225000, max: 285000 }
                },
                pm: {
                    L2: { min: 80000, max: 110000 },
                    L3: { min: 110000, max: 150000 },
                    L4: { min: 140000, max: 180000 },
                    L5: { min: 160000, max: 220000 },
                    L6: { min: 190000, max: 260000 }
                },
                designer: {
                    L2: { min: 75000, max: 100000 },
                    L3: { min: 100000, max: 140000 },
                    L4: { min: 130000, max: 170000 },
                    L5: { min: 150000, max: 200000 },
                    L6: { min: 180000, max: 240000 }
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

        germany: {
            currency: "EUR",
            roles: {
                engineer: {
                    L2: { min: 55000, max: 75000 },
                    L3: { min: 75000, max: 95000 },
                    L4: { min: 95000, max: 120000 },
                    L5: { min: 120000, max: 150000 },
                    L6: { min: 150000, max: 190000 }
                },
                dataEngineer: {
                    L2: { min: 58000, max: 78000 },
                    L3: { min: 78000, max: 98000 },
                    L4: { min: 98000, max: 125000 },
                    L5: { min: 125000, max: 155000 },
                    L6: { min: 155000, max: 195000 }
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
                    L2: { min: 45000, max: 65000 },
                    L3: { min: 65000, max: 85000 },
                    L4: { min: 85000, max: 110000 },
                    L5: { min: 110000, max: 140000 },
                    L6: { min: 140000, max: 180000 }
                },
                dataEngineer: {
                    L2: { min: 48000, max: 68000 },
                    L3: { min: 68000, max: 88000 },
                    L4: { min: 88000, max: 115000 },
                    L5: { min: 115000, max: 145000 },
                    L6: { min: 145000, max: 185000 }
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
    },

    salaryRanges: {
        engineer: {
            usa: {
                L2: { min: 85000, max: 110000 },
                L3: { min: 110000, max: 140000 },
                L4: { min: 140000, max: 180000 },
                L5: { min: 180000, max: 220000 },
                L6: { min: 220000, max: 280000 }
            },
            uk: {
                L2: { min: 45000, max: 65000 },
                L3: { min: 65000, max: 85000 },
                L4: { min: 85000, max: 110000 },
                L5: { min: 110000, max: 140000 },
                L6: { min: 140000, max: 180000 }
            },
            germany: {
                L2: { min: 55000, max: 75000 },
                L3: { min: 75000, max: 95000 },
                L4: { min: 95000, max: 120000 },
                L5: { min: 120000, max: 150000 },
                L6: { min: 150000, max: 190000 }
            }
        },
        dataEngineer: {
            usa: {
                L2: { min: 90000, max: 115000 },
                L3: { min: 115000, max: 145000 },
                L4: { min: 145000, max: 185000 },
                L5: { min: 185000, max: 225000 },
                L6: { min: 225000, max: 285000 }
            },
            uk: {
                L2: { min: 48000, max: 68000 },
                L3: { min: 68000, max: 88000 },
                L4: { min: 88000, max: 115000 },
                L5: { min: 115000, max: 145000 },
                L6: { min: 145000, max: 185000 }
            },
            germany: {
                L2: { min: 58000, max: 78000 },
                L3: { min: 78000, max: 98000 },
                L4: { min: 98000, max: 125000 },
                L5: { min: 125000, max: 155000 },
                L6: { min: 155000, max: 195000 }
            }
        }
    }
}; 