import { CalculationUtils } from '../utils/calculationUtils.js';
import { FormatUtils } from '../utils/formatUtils.js';
import { SalaryChart } from '../charts/salaryChart.js';
import { CostOfLivingChart } from '../charts/costOfLivingChart.js';
import { TaxChart } from '../charts/taxChart.js';
import { PurchasingPowerChart } from '../charts/purchasingPowerChart.js';

export class CompensationCalculator {
    constructor(data) {
        this.data = data;
        this.charts = {};
        this.initializeEventListeners();
        this.displayReleaseNotes();
    }

    initializeEventListeners() {
        const countrySelect = document.getElementById('country');
        const roleSelect = document.getElementById('role');
        const levelSelect = document.getElementById('level');
        const resetTaxesButton = document.getElementById('resetTaxes');
        const resetOverheadButton = document.getElementById('resetOverhead');

        // Country change handler
        countrySelect.addEventListener('change', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultTaxRates(country);
                this.setDefaultOverheadRates(country);
            }
            this.updateResults();
        });

        // Role and level change handlers
        roleSelect.addEventListener('change', () => this.updateResults());
        levelSelect.addEventListener('change', () => this.updateResults());

        // Reset buttons handlers
        resetTaxesButton.addEventListener('click', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultTaxRates(country);
            }
            this.updateResults();
        });

        resetOverheadButton.addEventListener('click', () => {
            const country = countrySelect.value;
            if (country) {
                this.setDefaultOverheadRates(country);
            }
            this.updateResults();
        });

        // Tax override listeners
        ['incomeTaxOverride', 'socialSecurityOverride', 'otherTaxesOverride'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });

        // Overhead listeners
        ['fixedOverheadOverride', 'employerTaxOverride', 'workersCompOverride', 'otherFeesOverride'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });

        // Set initial values if country is selected
        if (countrySelect.value) {
            this.setDefaultTaxRates(countrySelect.value);
            this.setDefaultOverheadRates(countrySelect.value);
        }
    }

    setDefaultTaxRates(country) {
        if (!country) return;
        
        const defaultRates = this.data.costOfLiving[country]?.taxRates || {
            incomeTax: 0.20,
            socialSecurity: 0.10,
            other: 0.05
        };
        
        const incomeTaxInput = document.getElementById('incomeTaxOverride');
        const socialSecurityInput = document.getElementById('socialSecurityOverride');
        const otherTaxesInput = document.getElementById('otherTaxesOverride');

        if (incomeTaxInput) incomeTaxInput.value = (defaultRates.incomeTax * 100).toFixed(1);
        if (socialSecurityInput) socialSecurityInput.value = (defaultRates.socialSecurity * 100).toFixed(1);
        if (otherTaxesInput) otherTaxesInput.value = (defaultRates.other * 100).toFixed(1);
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

    getTaxRates() {
        return {
            incomeTax: parseFloat(document.getElementById('incomeTaxOverride').value) / 100 || 0,
            socialSecurity: parseFloat(document.getElementById('socialSecurityOverride').value) / 100 || 0,
            other: parseFloat(document.getElementById('otherTaxesOverride').value) / 100 || 0
        };
    }

    getOverheadRates() {
        return {
            fixedOverhead: parseFloat(document.getElementById('fixedOverheadOverride').value) || 600,
            employerTax: parseFloat(document.getElementById('employerTaxOverride').value) / 100 || 0,
            workersComp: parseFloat(document.getElementById('workersCompOverride').value) / 100 || 0,
            otherFees: parseFloat(document.getElementById('otherFeesOverride').value) / 100 || 0
        };
    }

    getSelectedValues() {
        return {
            role: document.getElementById('role').value,
            country: document.getElementById('country').value,
            level: document.getElementById('level').value
        };
    }

    updateResults() {
        this.destroyCharts();

        const { role, country, level } = this.getSelectedValues();
        const resultsDiv = document.getElementById('results');

        if (!role || !country || !level) {
            resultsDiv.classList.add('d-none');
            return;
        }

        const countryData = this.data.countries[country];
        const roleData = countryData.roles[role];
        const levelData = roleData[level];
        const currency = countryData.currency;
        const costOfLiving = this.data.costOfLiving[country];

        // Get role-specific level details
        const roleLevelDetails = this.data.roles[role].levels[level];

        const range = levelData;
        const monthlyRange = CalculationUtils.calculateMonthlyRange(range);
        const minUSD = FormatUtils.convertToUSD(range.min, currency, this.data.exchangeRates);
        const maxUSD = FormatUtils.convertToUSD(range.max, currency, this.data.exchangeRates);

        this.updateDisplays(range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails);
        this.createCharts(minUSD, maxUSD, country, role, level);

        resultsDiv.classList.remove('d-none');
    }

    updateDisplays(range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails) {
        // Update compensation displays
        this.updateCompensationDisplays(range, monthlyRange, minUSD, maxUSD, currency);
        
        // Update overhead breakdown
        this.updateOverheadDisplay(minUSD);
        
        // Update location information
        this.updateLocationInfo(currency, country, costOfLiving);
        
        // Update role details
        this.updateRoleDetails(roleLevelDetails);
    }

    updateCompensationDisplays(range, monthlyRange, minUSD, maxUSD, currency) {
        document.getElementById('annualRange').innerHTML = this.createRangeHTML('Annual Compensation', range, monthlyRange, minUSD, maxUSD, currency);
        document.getElementById('monthlyRange').innerHTML = this.createRangeHTML('Monthly Compensation', monthlyRange, range, minUSD / 12, maxUSD / 12, currency);
    }

    createRangeHTML(title, range, monthlyRange, minUSD, maxUSD, currency) {
        return `
            <h6>${title}</h6>
            <div class="local-currency">
                ${FormatUtils.formatCurrency(range.min, currency)} - ${FormatUtils.formatCurrency(range.max, currency)} 
                <small class="text-muted">(Local Currency)</small>
            </div>
            <div class="usd-equivalent">
                ${FormatUtils.formatCurrency(minUSD, 'USD')} - ${FormatUtils.formatCurrency(maxUSD, 'USD')} 
                <small class="text-muted">(USD)</small>
            </div>
        `;
    }

    updateOverheadDisplay(salary) {
        const overhead = CalculationUtils.calculateTotalOverhead(salary, this.getOverheadRates());
        document.getElementById('overheadBreakdown').innerHTML = `
            <div class="overhead-breakdown mt-3">
                <div class="ms-2">
                    <div>Fixed Costs: ${FormatUtils.formatCurrency(overhead.fixed, 'USD')}</div>
                    <div>Employer Tax: ${FormatUtils.formatCurrency(overhead.breakdown.employerTax, 'USD')} (${(overhead.breakdown.employerTax / salary * 100).toFixed(1)}%)</div>
                    <div>Workers Comp: ${FormatUtils.formatCurrency(overhead.breakdown.workersComp, 'USD')} (${(overhead.breakdown.workersComp / salary * 100).toFixed(1)}%)</div>
                    <div>Other Fees: ${FormatUtils.formatCurrency(overhead.breakdown.otherFees, 'USD')} (${(overhead.breakdown.otherFees / salary * 100).toFixed(1)}%)</div>
                    <div class="mt-1"><strong>Total Overhead: ${FormatUtils.formatCurrency(overhead.total, 'USD')}</strong></div>
                </div>
            </div>
        `;
    }

    updateLocationInfo(currency, country, costOfLiving) {
        document.getElementById('exchangeRate').innerHTML = `
            <div>Exchange Rate: 1 ${currency} = ${this.data.exchangeRates[currency].toFixed(3)} USD</div>
        `;

        document.getElementById('costIndex').innerHTML = `
            <div>Cost of Living Index: ${costOfLiving.index} <small>(New York = 100)</small></div>
        `;

        document.getElementById('rentCosts').innerHTML = `
            <div>Monthly Rent (1 bed, city center): 
                ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.min, country, this.data)} - 
                ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.max, country, this.data)}
            </div>
        `;

        document.getElementById('livingCosts').innerHTML = `
            <div>
                <div>Average Meal Cost: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.meal, country, this.data)}</div>
                <div>Monthly Transport: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.transport, country, this.data)}</div>
                <div>Monthly Utilities: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.utilities, country, this.data)}</div>
            </div>
        `;
    }

    updateRoleDetails(roleLevelDetails) {
        if (!roleLevelDetails) {
            document.getElementById('levelDetails').innerHTML = `
                <div class="alert alert-info">
                    No detailed information available for this level.
                </div>
            `;
            return;
        }

        document.getElementById('levelDetails').innerHTML = `
            <div class="level-details mb-3">
                <h4 class="h6">${roleLevelDetails.title}</h4>
                <p class="text-muted mb-3">Experience: ${roleLevelDetails.experience}</p>
                
                <div class="responsibilities mb-4">
                    <h5 class="h6 text-primary">Key Responsibilities</h5>
                    <ul class="list-unstyled">
                        ${roleLevelDetails.responsibilities.map(r => `
                            <li class="mb-2">
                                <i class="bi bi-check2-circle text-success me-2"></i>${r}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="impact">
                    <h5 class="h6 text-primary">Expected Impact</h5>
                    <ul class="list-unstyled">
                        ${roleLevelDetails.impact.map(i => `
                            <li class="mb-2">
                                <i class="bi bi-star-fill text-warning me-2"></i>${i}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    createCharts(minUSD, maxUSD, country, role, level) {
        const selectedData = { country, role, level };
        
        this.charts.salaryComparison = SalaryChart.create(
            document.getElementById('salaryComparisonChart'),
            this.data,
            selectedData
        );

        this.charts.costOfLiving = CostOfLivingChart.create(
            document.getElementById('costOfLivingChart'),
            this.data,
            country
        );

        const takeHome = CalculationUtils.calculateTakeHome(minUSD, this.getTaxRates());
        this.charts.taxBreakdown = TaxChart.create(
            document.getElementById('taxBreakdownChart'),
            takeHome
        );

        this.charts.purchasingPower = PurchasingPowerChart.create(
            document.getElementById('purchasingPowerChart'),
            this.data,
            minUSD,
            country
        );
    }

    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.destroy();
            }
        });
        this.charts = {};
    }

    displayReleaseNotes() {
        const releaseNotesContent = document.getElementById('releaseNotesContent');
        if (!releaseNotesContent) return;

        const notes = this.data.releaseNotes;
        const notesHtml = notes
            .map(release => this.renderReleaseNote(release))
            .join('');

        releaseNotesContent.innerHTML = notesHtml;
    }

    renderReleaseNote(release) {
        return `
            <div class="release-note">
                <div class="version-header">
                    <div class="version">Version ${release.version}</div>
                    <div class="date">${release.date}</div>
                </div>
                
                ${this.renderReleaseSection(
                    release.major,
                    'Major Changes',
                    'major-changes',
                    'bi bi-star-fill'
                )}
                
                ${this.renderReleaseSection(
                    release.improvements,
                    'Improvements',
                    'improvements',
                    'bi bi-arrow-up-circle-fill'
                )}
                
                ${this.renderReleaseSection(
                    release.fixes,
                    'Fixes',
                    'fixes',
                    'bi bi-bug-fill'
                )}
            </div>
        `;
    }

    renderReleaseSection(items, title, sectionClass, iconClass) {
        if (!items || items.length === 0) return '';
        
        return `
            <div class="release-section ${sectionClass}">
                <div class="section-title">
                    <i class="${iconClass} me-2"></i>
                    ${title}
                </div>
                <ul>
                    ${items.map(item => `
                        <li>
                            <i class="${iconClass}"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
} 