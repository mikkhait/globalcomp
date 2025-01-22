function showHowToUse() {
    const modal = new bootstrap.Modal(document.getElementById('howToUseModal'));
    modal.show();
}

// Show the modal on first visit
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('hasVisited')) {
        showHowToUse();
        localStorage.setItem('hasVisited', 'true');
    }
    
    const calculator = new CompensationCalculator(compensationData);
});

class CompensationCalculator {
    constructor(data) {
        this.data = data;
        this.charts = {}; // Store chart instances
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const countrySelect = document.getElementById('country');
        const levelSelect = document.getElementById('level');

        countrySelect.addEventListener('change', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultTaxRates(country);
                this.setDefaultOverheadRates(country);
            }
            this.updateResults();
        });

        levelSelect.addEventListener('change', () => this.updateResults());

        // Add tax override listeners
        ['incomeTaxOverride', 'socialSecurityOverride', 'otherTaxesOverride'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });

        // Reset taxes button
        document.getElementById('resetTaxes').addEventListener('click', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultTaxRates(country);
            }
            this.updateResults();
        });

        // Add overhead reset button listener
        document.getElementById('resetOverhead').addEventListener('click', () => {
            const country = document.getElementById('country').value;
            if (country) {
                this.setDefaultOverheadRates(country);
            }
            this.updateResults();
        });

        // Add fixed overhead input listener
        document.getElementById('fixedOverheadOverride').addEventListener('input', () => this.updateResults());
        
        // Add employer cost listeners
        ['employerTaxOverride', 'workersCompOverride', 'otherFeesOverride'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });
    }

    setDefaultTaxRates(country) {
        const defaultRates = {
            usa: {
                incomeTax: 22.0,
                socialSecurity: 6.2,
                other: 6.45  // Medicare + State
            },
            spain: {
                incomeTax: 24.0,
                socialSecurity: 6.4,
                other: 2.0
            },
            poland: {
                incomeTax: 17.0,
                socialSecurity: 13.71,
                other: 4.9
            },
            ukraine: {
                incomeTax: 18.0,
                socialSecurity: 22.0,
                other: 1.5
            },
            slovakia: {
                incomeTax: 19.0,
                socialSecurity: 13.6,
                other: 4.0
            },
            canada: {
                incomeTax: 20.5,
                socialSecurity: 5.95,
                other: 5.05
            },
            wales: {
                incomeTax: 20.0,
                socialSecurity: 12.0,
                other: 3.0
            },
            lithuania: {
                incomeTax: 15.0,
                socialSecurity: 9.0,
                other: 3.0
            },
            germany: {
                incomeTax: 42.0,
                socialSecurity: 20.0, 
                other: 1.0
            },
            uk: {
                incomeTax: 20.0,
                socialSecurity: 12.0,
                other: 2.0  
            }
        };

        const rates = defaultRates[country] || { incomeTax: 20.0, socialSecurity: 10.0, other: 5.0 };
        
        document.getElementById('incomeTaxOverride').value = rates.incomeTax;
        document.getElementById('socialSecurityOverride').value = rates.socialSecurity;
        document.getElementById('otherTaxesOverride').value = rates.other;
    }

    setDefaultOverheadRates(country) {
        const overhead = this.data.companyOverhead.countrySpecific[country] || {
            employerTax: 0.15,
            workersComp: 0.02,
            otherFees: 0.02
        };
        
        document.getElementById('employerTaxOverride').value = (overhead.employerTax * 100).toFixed(1);
        document.getElementById('workersCompOverride').value = (overhead.workersComp * 100).toFixed(1);
        document.getElementById('otherFeesOverride').value = (overhead.otherFees * 100).toFixed(1);
    }

    getTaxRates(country) {
        const incomeTax = parseFloat(document.getElementById('incomeTaxOverride').value) / 100;
        const socialSecurity = parseFloat(document.getElementById('socialSecurityOverride').value) / 100;
        const other = parseFloat(document.getElementById('otherTaxesOverride').value) / 100;

        return {
            incomeTax: incomeTax || 0,
            socialSecurity: socialSecurity || 0,
            other: other || 0
        };
    }

    getOverheadRates() {
        const fixedOverhead = parseFloat(document.getElementById('fixedOverheadOverride').value) || 600;
        const employerTax = parseFloat(document.getElementById('employerTaxOverride').value) / 100;
        const workersComp = parseFloat(document.getElementById('workersCompOverride').value) / 100;
        const otherFees = parseFloat(document.getElementById('otherFeesOverride').value) / 100;

        return {
            fixedOverhead,
            employerTax: employerTax || 0,
            workersComp: workersComp || 0,
            otherFees: otherFees || 0
        };
    }

    getSelectedValues() {
        return {
            country: document.getElementById('country').value,
            level: document.getElementById('level').value
        };
    }

    convertToUSD(amount, currency) {
        return amount * this.data.exchangeRates[currency];
    }

    formatCurrency(amount, currency) {
        const symbol = this.data.currencySymbols[currency];
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            currencyDisplay: 'symbol'
        }).format(amount);
    }

    formatCostWithCurrency(amount, country) {
        const currency = this.getCurrencyForCountry(country);
        const symbol = this.data.currencySymbols[currency];
        return `${symbol}${amount.toLocaleString()}`;
    }

    calculateMonthlyRange(range) {
        return {
            min: range.min / 12,
            max: range.max / 12
        };
    }

    calculatePurchasingPower(amountUSD, costOfLivingIndex) {
        const adjustmentFactor = 100 / costOfLivingIndex;
        return amountUSD * adjustmentFactor;
    }

    calculateTakeHome(amount, country) {
        const rates = this.getTaxRates(country);
        const totalTax = rates.incomeTax + rates.socialSecurity + rates.other;
        const net = amount * (1 - totalTax);

        return {
            gross: amount,
            net: net,
            taxRate: totalTax * 100,
            breakdown: {
                incomeTax: amount * rates.incomeTax,
                socialSecurity: amount * rates.socialSecurity,
                other: amount * rates.other
            }
        };
    }

    calculateCostOfLivingComparison(salary, fromCountry, toCountry) {
        const fromIndex = this.data.costOfLiving[fromCountry].index;
        const toIndex = this.data.costOfLiving[toCountry].index;
        return (salary * fromIndex) / toIndex;
    }

    calculateTotalOverhead(salary) {
        const rates = this.getOverheadRates();
        const annualFixed = rates.fixedOverhead * 12;
        const variableCosts = salary * (rates.employerTax + rates.workersComp + rates.otherFees);
        
        return {
            fixed: annualFixed,
            variable: variableCosts,
            total: annualFixed + variableCosts,
            breakdown: {
                employerTax: salary * rates.employerTax,
                workersComp: salary * rates.workersComp,
                otherFees: salary * rates.otherFees
            }
        };
    }

    createPurchasingPowerChart(salary, country) {
        const ctx = document.getElementById('purchasingPowerChart');
        
        if (this.charts.purchasingPower) {
            this.charts.purchasingPower.destroy();
        }

        const costData = this.data.costOfLiving;
        const baseIndex = costData[country].index;
        const baseSalary = salary;

        // Calculate purchasing power for top 5 countries
        const comparisonData = Object.entries(costData)
            .filter(([key]) => key !== country)
            .slice(0, 5)
            .map(([key, data]) => ({
                country: key.toUpperCase(),
                purchasingPower: (baseSalary * baseIndex) / data.index
            }));

        this.charts.purchasingPower = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [country.toUpperCase(), ...comparisonData.map(d => d.country)],
                datasets: [{
                    label: 'Equivalent Purchasing Power (USD)',
                    data: [baseSalary, ...comparisonData.map(d => d.purchasingPower)],
                    backgroundColor: ['rgba(75, 192, 192, 0.5)', ...Array(5).fill('rgba(153, 102, 255, 0.5)')]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Purchasing Power Comparison'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw.toFixed(0)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    updateResults() {
        // Destroy existing charts before creating new ones
        this.destroyCharts();

        const { country, level } = this.getSelectedValues();
        const resultsDiv = document.getElementById('results');

        if (!country || !level) {
            resultsDiv.classList.add('d-none');
            return;
        }

        const countryData = this.data.countries[country];
        const levelData = countryData.levels[level];
        const currency = countryData.currency;
        const costOfLiving = this.data.costOfLiving[country];

        const range = levelData.employee;
        const monthlyRange = this.calculateMonthlyRange(range);
        const minUSD = this.convertToUSD(range.min, currency);
        const maxUSD = this.convertToUSD(range.max, currency);

        const rates = this.getTaxRates(country);
        const minTakeHome = this.calculateTakeHome(minUSD, country);
        const maxTakeHome = this.calculateTakeHome(maxUSD, country);

        // Calculate and display overhead costs
        const minOverhead = this.calculateTotalOverhead(minUSD);
        const maxOverhead = this.calculateTotalOverhead(maxUSD);

        // Update the display with overhead costs
        document.getElementById('overheadBreakdown').innerHTML = `
            <div class="overhead-breakdown mt-3">
                <div class="ms-2">
                    <div>Fixed Costs: ${this.formatCurrency(minOverhead.fixed, 'USD')}</div>
                    <div>Employer Tax: ${this.formatCurrency(minOverhead.breakdown.employerTax, 'USD')} (${(minOverhead.breakdown.employerTax / minUSD * 100).toFixed(1)}%)</div>
                    <div>Workers Comp: ${this.formatCurrency(minOverhead.breakdown.workersComp, 'USD')} (${(minOverhead.breakdown.workersComp / minUSD * 100).toFixed(1)}%)</div>
                    <div>Other Fees: ${this.formatCurrency(minOverhead.breakdown.otherFees, 'USD')} (${(minOverhead.breakdown.otherFees / minUSD * 100).toFixed(1)}%)</div>
                    <div class="mt-1"><strong>Total Overhead: ${this.formatCurrency(minOverhead.total, 'USD')}</strong></div>
                </div>
            </div>
        `;

        // Update the annual and monthly ranges
        document.getElementById('annualRange').innerHTML = `
            Annual (Local): ${this.formatCurrency(range.min, currency)} - ${this.formatCurrency(range.max, currency)}<br>
            Annual (USD): ${this.formatCurrency(minUSD, 'USD')} - ${this.formatCurrency(maxUSD, 'USD')}<br>
            <small>Take-home: ${this.formatCurrency(minTakeHome.net, 'USD')} - ${this.formatCurrency(maxTakeHome.net, 'USD')}</small>
        `;

        document.getElementById('monthlyRange').innerHTML = `
            Monthly (Local): ${this.formatCurrency(monthlyRange.min, currency)} - ${this.formatCurrency(monthlyRange.max, currency)}<br>
            Monthly (USD): ${this.formatCurrency(minUSD / 12, 'USD')} - ${this.formatCurrency(maxUSD / 12, 'USD')}<br>
            <small>Take-home (after ~${minTakeHome.taxRate.toFixed(1)}% tax): ${this.formatCurrency(minTakeHome.net / 12, 'USD')} - ${this.formatCurrency(maxTakeHome.net / 12, 'USD')}</small>
        `;
        
        // Update tax breakdown display
        const taxBreakdown = `
            <div class="tax-breakdown mt-2">
                <h4 class="h6">Tax Breakdown (Annual)</h4>
                <div class="ms-2">
                    <div>Income Tax: ${this.formatCurrency(minTakeHome.breakdown.incomeTax, 'USD')} (${(rates.incomeTax * 100).toFixed(1)}%)</div>
                    <div>Social Security: ${this.formatCurrency(minTakeHome.breakdown.socialSecurity, 'USD')} (${(rates.socialSecurity * 100).toFixed(1)}%)</div>
                    <div>Other Taxes: ${this.formatCurrency(minTakeHome.breakdown.other, 'USD')} (${(rates.other * 100).toFixed(1)}%)</div>
                    <div class="mt-1">Total Tax: ${this.formatCurrency(minTakeHome.gross - minTakeHome.net, 'USD')} (${minTakeHome.taxRate.toFixed(1)}%)</div>
                </div>
            </div>
        `;

        document.getElementById('additionalNotes').textContent = countryData.notes;

        document.getElementById('exchangeRate').textContent = 
            `Exchange Rate: 1 ${currency} = ${this.formatCurrency(this.data.exchangeRates[currency], 'USD')}`;

        document.getElementById('costIndex').innerHTML = `
            <h6 class="mb-3">Cost of Living Comparison</h6>
            <div class="col-living-comparison mb-3">
                <div>Index: ${costOfLiving.index} <small>(New York = 100)</small></div>
                <div class="mt-2">Equivalent purchasing power in other cities:</div>
                <div class="comparison-table mt-2">
                    ${Object.entries(this.data.costOfLiving)
                        .filter(([key]) => key !== country)
                        .map(([countryKey, countryData]) => {
                            const equivalentSalary = this.calculateCostOfLivingComparison(
                                minUSD,
                                country,
                                countryKey
                            );
                            return `
                                <div class="comparison-row">
                                    <strong>${countryKey.charAt(0).toUpperCase() + countryKey.slice(1)}:</strong> 
                                    ${this.formatCurrency(equivalentSalary, 'USD')}
                                    <small class="text-muted">(Index: ${countryData.index})</small>
                                </div>
                            `;
                        }).join('')}
                </div>
            </div>
            <div class="living-costs-breakdown">
                <h6 class="mb-2">Monthly Living Costs</h6>
                <div class="costs-grid">
                    <div class="cost-item">
                        <span class="cost-label">🏠 Rent (1 bed, city center):</span>
                        <span class="cost-value">${this.formatCostWithCurrency(costOfLiving.rent.min, country)} - ${this.formatCostWithCurrency(costOfLiving.rent.max, country)}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">🍽️ Average Meal:</span>
                        <span class="cost-value">${this.formatCostWithCurrency(costOfLiving.details.meal, country)}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">🚌 Public Transport:</span>
                        <span class="cost-value">${this.formatCostWithCurrency(costOfLiving.details.transport, country)}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">💡 Utilities:</span>
                        <span class="cost-value">${this.formatCostWithCurrency(costOfLiving.details.utilities, country)}</span>
                    </div>
                </div>
            </div>
        `;

        // Get level details from the global levels object
        const levelDetails = this.data.levels[level];
        
        // Update level details display
        if (levelDetails) {
            document.getElementById('levelDetails').innerHTML = `
                <div class="level-details mb-3">
                    <h4 class="h6">${levelDetails.title} (${level})</h4>
                    <p class="text-muted mb-3">Experience: ${levelDetails.experience}</p>
                    
                    <div class="responsibilities mb-4">
                        <h5 class="h6 text-primary">Key Responsibilities</h5>
                        <ul class="list-unstyled">
                            ${levelDetails.responsibilities.map(r => `
                                <li class="mb-2">
                                    <i class="bi bi-check2-circle text-success me-2"></i>${r}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="impact">
                        <h5 class="h6 text-primary">Expected Impact</h5>
                        <ul class="list-unstyled">
                            ${levelDetails.impact.map(i => `
                                <li class="mb-2">
                                    <i class="bi bi-star-fill text-warning me-2"></i>${i}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        } else {
            document.getElementById('levelDetails').innerHTML = `
                <div class="alert alert-info">
                    No detailed information available for this level.
                </div>
            `;
        }

        resultsDiv.classList.remove('d-none');

        this.createSalaryComparisonChart(minUSD, maxUSD, country);
        this.createCostOfLivingChart(country);
        this.createTaxBreakdownChart(minTakeHome);
        this.createPurchasingPowerChart(minUSD, country);
    }

    // Add this method to destroy existing charts
    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.destroy();
            }
        });
        this.charts = {};
    }

    createSalaryComparisonChart(minUSD, maxUSD, country) {
        const ctx = document.getElementById('salaryComparisonChart');
        
        // Destroy existing chart if it exists
        if (this.charts.salaryComparison) {
            this.charts.salaryComparison.destroy();
        }

        const otherCountries = Object.entries(this.data.countries)
            .filter(([key]) => key !== country)
            .slice(0, 7); // Show top 7 countries including Germany and UK

        this.charts.salaryComparison = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [country.toUpperCase(), ...otherCountries.map(([key]) => key.toUpperCase())],
                datasets: [{
                    label: 'Salary Range (USD)',
                    data: [
                        [minUSD, maxUSD],
                        ...otherCountries.map(([key, data]) => [
                            this.convertToUSD(data.levels.L4.employee.min, data.currency),
                            this.convertToUSD(data.levels.L4.employee.max, data.currency)
                        ])
                    ],
                    backgroundColor: ['rgba(54, 162, 235, 0.5)', ...Array(6).fill('rgba(201, 203, 207, 0.5)')],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Salary Comparison Across Countries'
                    }
                }
            }
        });
    }

    createCostOfLivingChart(country) {
        const ctx = document.getElementById('costOfLivingChart');
        
        if (this.charts.costOfLiving) {
            this.charts.costOfLiving.destroy();
        }

        const costData = this.data.costOfLiving;
        
        // Helper function to get numeric value from details
        const getNumericValue = (countryKey, costType) => {
            const costData = this.data.costOfLiving[countryKey].details;
            return costData[costType] || 0;
        };

        // Helper function to get average rent
        const getAverageRent = (countryKey) => {
            const rentData = this.data.costOfLiving[countryKey].rent;
            return (rentData.min + rentData.max) / 2;
        };

        // Get top 6 countries for comparison including Germany and UK
        const comparisonCountries = Object.entries(costData)
            .filter(([key]) => key !== country) 
            .slice(0, 6);

        // Prepare data for each expense type
        const datasets = [
            {
                label: 'Rent (avg)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [
                    getAverageRent(country),
                    ...comparisonCountries.map(([key]) => 
                        getAverageRent(key)
                    )
                ]
            },
            {
                label: 'Utilities',
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                data: [
                    getNumericValue(country, 'utilities'),
                    ...comparisonCountries.map(([key]) => 
                        getNumericValue(key, 'utilities')
                    )
                ]
            },
            {
                label: 'Transport',
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                data: [
                    getNumericValue(country, 'transport'),
                    ...comparisonCountries.map(([key]) => 
                        getNumericValue(key, 'transport')
                    )
                ]
            },
            {
                label: 'Meal',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [
                    getNumericValue(country, 'meal'),
                    ...comparisonCountries.map(([key]) => 
                        getNumericValue(key, 'meal')
                    )
                ]
            }
        ];

        // Convert all values to USD for fair comparison
        datasets.forEach(dataset => {
            dataset.data = dataset.data.map((value, index) => {
                const countryKey = index === 0 ? country : comparisonCountries[index - 1][0];
                const currency = this.getCurrencyForCountry(countryKey);
                return this.convertToUSD(value, currency);
            });
        });

        this.charts.costOfLiving = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    country.toUpperCase(),
                    ...comparisonCountries.map(([key]) => key.toUpperCase())
                ],
                datasets: datasets
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Living Costs Comparison (USD)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw.toFixed(0)}`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    // Helper method to get currency for a country
    getCurrencyForCountry(countryKey) {
        return this.data.countryToCurrency[countryKey];
    }

    createTaxBreakdownChart(takeHome) {
        const ctx = document.getElementById('taxBreakdownChart');
        
        // Destroy existing chart if it exists
        if (this.charts.taxBreakdown) {
            this.charts.taxBreakdown.destroy();
        }
        
        this.charts.taxBreakdown = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Take-Home', 'Income Tax', 'Social Security', 'Other Taxes'],
                datasets: [{
                    data: [
                        takeHome.net,
                        takeHome.breakdown.incomeTax,
                        takeHome.breakdown.socialSecurity,
                        takeHome.breakdown.other
                    ],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(201, 203, 207, 0.5)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Tax Breakdown'
                    }
                }
            }
        });
    }
} 