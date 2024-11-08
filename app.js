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
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const countrySelect = document.getElementById('country');
        const levelSelect = document.getElementById('level');

        countrySelect.addEventListener('change', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultTaxRates(country);
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
            }
        };

        const rates = defaultRates[country] || { incomeTax: 20.0, socialSecurity: 10.0, other: 5.0 };
        
        document.getElementById('incomeTaxOverride').value = rates.incomeTax;
        document.getElementById('socialSecurityOverride').value = rates.socialSecurity;
        document.getElementById('otherTaxesOverride').value = rates.other;
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
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
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

    updateResults() {
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

        if (!levelData) {
            resultsDiv.classList.add('d-none');
            return;
        }

        const range = levelData.employee;
        const monthlyRange = this.calculateMonthlyRange(range);
        const minUSD = this.convertToUSD(range.min, currency);
        const maxUSD = this.convertToUSD(range.max, currency);

        const minPurchasingPower = this.calculatePurchasingPower(minUSD, costOfLiving.index);
        const maxPurchasingPower = this.calculatePurchasingPower(maxUSD, costOfLiving.index);

        const rates = this.getTaxRates(country);
        const minTakeHome = this.calculateTakeHome(minUSD, country);
        const maxTakeHome = this.calculateTakeHome(maxUSD, country);

        document.getElementById('experienceRange').textContent = 
            `Experience: ${levelData.experience}`;
        
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

        document.getElementById('annualRange').innerHTML = 
            `Annual (Local): ${this.formatCurrency(range.min, currency)} - ${this.formatCurrency(range.max, currency)}<br>` +
            `Annual (USD): ${this.formatCurrency(minUSD, 'USD')} - ${this.formatCurrency(maxUSD, 'USD')}<br>` +
            `<small>Take-home: ${this.formatCurrency(minTakeHome.net, 'USD')} - ${this.formatCurrency(maxTakeHome.net, 'USD')}</small>`;
        
        document.getElementById('monthlyRange').innerHTML = 
            `Monthly (Local): ${this.formatCurrency(monthlyRange.min, currency)} - ${this.formatCurrency(monthlyRange.max, currency)}<br>` +
            `Monthly (USD): ${this.formatCurrency(minUSD/12, 'USD')} - ${this.formatCurrency(maxUSD/12, 'USD')}<br>` +
            `<small>Take-home (after ~${minTakeHome.taxRate.toFixed(1)}% tax): ${this.formatCurrency(minTakeHome.net/12, 'USD')} - ${this.formatCurrency(maxTakeHome.net/12, 'USD')}</small>` +
            `${taxBreakdown}`;

        // Always show level details (use USA data as default)
        const levelDetails = this.data.countries.usa.levels[level];
        if (levelDetails.responsibilities && levelDetails.impact) {
            document.getElementById('levelDetails').innerHTML = `
                <div class="level-details mb-3">
                    <h4 class="h6">Level Details for ${level}</h4>
                    <div class="responsibilities mb-2">
                        <strong>Key Responsibilities:</strong>
                        <ul>
                            ${levelDetails.responsibilities.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="impact">
                        <strong>Expected Impact:</strong>
                        <ul>
                            ${levelDetails.impact.map(i => `<li>${i}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }

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
                        <span class="cost-value">${costOfLiving.rent}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">🍽️ Average Meal:</span>
                        <span class="cost-value">${costOfLiving.details.meal}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">🚌 Public Transport:</span>
                        <span class="cost-value">${costOfLiving.details.transport}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">💡 Utilities:</span>
                        <span class="cost-value">${costOfLiving.details.utilities}</span>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('additionalNotes').textContent = countryData.notes;

        resultsDiv.classList.remove('d-none');
    }
} 