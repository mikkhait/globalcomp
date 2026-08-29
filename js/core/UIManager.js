'use strict';

import { FormatUtils } from '../utils/formatUtils.js';
import { CalculationUtils } from '../utils/calculationUtils.js';
import { SalaryChart } from '../charts/salaryChart.js';
import { CostOfLivingChart } from '../charts/costOfLivingChart.js';
import { TaxChart } from '../charts/taxChart.js';
import { PurchasingPowerChart } from '../charts/purchasingPowerChart.js';

/**
 * UIManager: Responsible for all DOM manipulations and chart rendering.
 */
export class UIManager {
    constructor(data, stateManager) {
        this.data = data;
        this.stateManager = stateManager;
        this.charts = {};
        this.elements = this.cacheElements();
        
        // Subscribe to state changes
        this.stateManager.subscribe((state, oldState) => this.handleStateChange(state, oldState));
    }

    /**
     * Cache DOM elements using data- attributes where possible.
     */
    cacheElements() {
        const elements = {};
        document.querySelectorAll('[data-ui-component]').forEach(el => {
            const key = el.getAttribute('data-ui-component').replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            elements[key] = el;
        });
        
        // Form inputs
        elements.inputs = {};
        document.querySelectorAll('[data-state]').forEach(el => {
            elements.inputs[el.getAttribute('data-state')] = el;
        });

        return elements;
    }

    /**
     * Handle state changes and update the UI accordingly.
     */
    handleStateChange(state, oldState) {
        // Update form values if they changed in state (e.g. from a reset)
        Object.entries(state).forEach(([key, value]) => {
            const input = this.elements.inputs[key];
            if (input && input.value !== String(value)) {
                input.value = value;
            }
        });

        // Check if we have enough data to show results
        const { role, country, level } = state;
        if (!role || !country || !level) {
            this.showMessage('Please select Role, Country, and Level to see results.', 'info');
            return;
        }

        this.updateResults(state);
    }

    /**
     * Update all results based on current state.
     */
    updateResults(state) {
        const { role, country, level } = state;
        
        try {
            const countryData = this.data.countries?.[country];
            if (!countryData) {
                this.showMessage(`Compensation data for the selected country (<strong>${country}</strong>) is not available.`, 'warning');
                return;
            }

            const roleData = countryData.roles?.[role];
            if (!roleData) {
                this.showMessage(`Compensation data for the selected role (<strong>${role}</strong>) in <strong>${country}</strong> is not available.`, 'warning');
                return;
            }

            const levelData = roleData[level];
            if (!levelData) {
                this.showMessage(`Compensation data for the selected level (<strong>${level}</strong>) for <strong>${role}</strong> in <strong>${country}</strong> is not available.`, 'warning');
                return;
            }

            const currency = countryData.currency;
            const costOfLiving = this.data.costOfLiving?.[country];
            const roleDefKey = role === 'pm' ? 'productManager' : (role === 'dataEngineer' ? 'dataEngineer' : role);
            const roleLevelDetails = this.data.roleDefinitions?.[roleDefKey]?.[level.toLowerCase()];

            const range = levelData;
            const monthlyRange = CalculationUtils.calculateMonthlyRange(range);
            const minUSD = FormatUtils.convertToUSD(range.min, currency, this.data.exchangeRates);
            const maxUSD = FormatUtils.convertToUSD(range.max, currency, this.data.exchangeRates);

            this.showContent();
            this.updateHero(range, minUSD, maxUSD, currency, state);
        this.updateDisplays(state, range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails);
            this.renderCharts(state, minUSD, maxUSD);

        } catch (error) {
            console.error('Error updating results:', error);
            this.showMessage('<i class="bi bi-exclamation-triangle-fill me-2"></i>An unexpected error occurred while calculating compensation. Please try again.', 'danger');
        }
    }

    /**
     * Show an alert message and hide results.
     */
    showMessage(html, type = 'info') {
        const { messageArea, resultsContainer } = this.elements;
        if (messageArea) {
            messageArea.innerHTML = `<div class="alert alert-${type}">${html}</div>`;
            messageArea.classList.remove('d-none');
        }
        
        // Hide all major cards
        Object.keys(this.elements).forEach(key => {
            if (key.endsWith('Card') || key === 'chartsGrid') {
                this.elements[key].classList.add('d-none');
            }
        });
        
        if (resultsContainer) resultsContainer.classList.remove('d-none');
    }

    /**
     * Show results and hide alert message.
     */
    showContent() {
        const { messageArea } = this.elements;
        if (messageArea) {
            messageArea.innerHTML = '';
            messageArea.classList.add('d-none');
        }
        
        Object.keys(this.elements).forEach(key => {
            if (key.endsWith('Card') || key === 'chartsGrid') {
                this.elements[key].classList.remove('d-none');
            }
        });
    }

    /**
     * Update all textual displays.
     */
    updateDisplays(state, range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails) {
        this.updateCompensation(range, monthlyRange, minUSD, maxUSD, currency);
        this.updateOverhead(state, minUSD);
        this.updateLocation(currency, country, costOfLiving);
        this.updateRole(roleLevelDetails);
    }

    updateCompensation(range, monthlyRange, minUSD, maxUSD, currency) {
        const { annualRange, monthlyRange: monthlyRangeEl } = this.elements;
        
        if (annualRange) {
            annualRange.innerHTML = this.createRangeHTML('Annual Compensation', range, minUSD, maxUSD, currency);
        }
        if (monthlyRangeEl) {
            monthlyRangeEl.innerHTML = this.createRangeHTML('Monthly Compensation', monthlyRange, minUSD / 12, maxUSD / 12, currency);
        }
    }

    updateHero(range, minUSD, maxUSD, currency, state) {
        const heroValue = document.getElementById('heroCompValue');
        const heroSub = document.getElementById('heroCompSub');
        const heroMeta = document.getElementById('heroMeta');
        if (!heroValue) return;
        const mid = (range.min + range.max) / 2;
        const midUSD = (minUSD + maxUSD) / 2;
        heroValue.textContent = FormatUtils.formatCurrency(midUSD, 'USD');
        const roleNames = { engineer: 'Software Engineer', dataEngineer: 'Data Engineer', devOpsEngineer: 'DevOps Engineer', pm: 'Product Manager', designer: 'Product Designer' };
        const countryNames = { usa: 'USA', canada: 'Canada', uk: 'United Kingdom', germany: 'Germany', spain: 'Spain', poland: 'Poland', lithuania: 'Lithuania', slovakia: 'Slovakia', ukraine: 'Ukraine' };
        if (heroSub) heroSub.textContent = `${roleNames[state.role] || state.role} · ${state.level} · ${countryNames[state.country] || state.country}`;
        if (heroMeta) heroMeta.textContent = `Local: ${FormatUtils.formatCurrency(range.min, currency)} – ${FormatUtils.formatCurrency(range.max, currency)} · ~${FormatUtils.formatCurrency(midUSD / 12, 'USD')}/mo`;

        // Reflect chip selection in case state changed programmatically
        document.querySelectorAll('[data-selector]').forEach(group => {
            const key = group.getAttribute('data-selector');
            if (state[key] === undefined || state[key] === '') return;
            group.querySelectorAll('[data-value]').forEach(b => {
                const isSel = b.getAttribute('data-value') === String(state[key]);
                b.setAttribute('aria-checked', String(isSel));
                b.tabIndex = isSel ? 0 : -1;
            });
        });
        const hidden = document.getElementById('role');
        // hidden inputs already synced via state loop below
    }

    createRangeHTML(title, range, minUSD, maxUSD, currency) {
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

    updateOverhead(state, salary) {
        const { overheadBreakdown } = this.elements;
        if (!overheadBreakdown) return;

        const rates = {
            fixedOverhead: state.fixedOverhead,
            employerTax: state.employerTax / 100,
            workersComp: state.workersComp / 100,
            otherFees: state.otherFees / 100
        };

        const overhead = CalculationUtils.calculateTotalOverhead(salary, rates);
        overheadBreakdown.innerHTML = `
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

    updateLocation(currency, country, costOfLiving) {
        const { exchangeRate, costIndex, rentCosts, livingCosts } = this.elements;

        if (exchangeRate) {
            exchangeRate.innerHTML = `<div>Exchange Rate: 1 ${currency} = ${this.data.exchangeRates[currency]?.toFixed(3) || 'N/A'} USD</div>`;
        }

        if (costIndex) {
            costIndex.innerHTML = costOfLiving 
                ? `<div>Cost of Living Index: ${costOfLiving.index} <small>(New York = 100)</small></div>`
                : '<div>Cost of Living Index: N/A</div>';
        }

        if (rentCosts) {
            rentCosts.innerHTML = costOfLiving?.rent
                ? `<div>Monthly Rent (1 bed, city center): 
                    ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.min, country, this.data)} - 
                    ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.max, country, this.data)}
                   </div>`
                : '<div>Monthly Rent: N/A</div>';
        }

        if (livingCosts) {
            livingCosts.innerHTML = costOfLiving?.details
                ? `<div>
                    <div>Average Meal Cost: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.meal, country, this.data)}</div>
                    <div>Monthly Transport: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.transport, country, this.data)}</div>
                    <div>Monthly Utilities: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.utilities, country, this.data)}</div>
                   </div>`
                : '<div>Monthly Expenses: N/A</div>';
        }
    }

    updateRole(roleLevelDetails) {
        const { levelDetails } = this.elements;
        if (!levelDetails) return;

        if (!roleLevelDetails) {
            levelDetails.innerHTML = `<div class="alert alert-info">No detailed information available for this level.</div>`;
            return;
        }

        levelDetails.innerHTML = `
            <div class="level-details mb-3">
                <h4 class="h6">${roleLevelDetails.title}</h4>
                <p class="text-muted mb-3">${roleLevelDetails.description}</p>
                <div class="row">
                    <div class="col-md-6">
                        <div class="responsibilities mb-4">
                            <h5 class="h6 text-primary mb-3"><i class="bi bi-list-check me-2"></i>Key Responsibilities</h5>
                            <ul class="list-unstyled">
                                ${roleLevelDetails.responsibilities.map(r => `
                                    <li class="mb-2 d-flex">
                                        <i class="bi bi-check2-circle text-success me-2 mt-1"></i>
                                        <span>${r}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="skills mb-4">
                            <h5 class="h6 text-primary mb-3"><i class="bi bi-star-fill me-2"></i>Required Skills</h5>
                            <ul class="list-unstyled">
                                ${roleLevelDetails.skills.map(s => `
                                    <li class="mb-2 d-flex">
                                        <i class="bi bi-arrow-right-short text-info me-2 mt-1"></i>
                                        <span>${s}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render or update charts.
     */
    renderCharts(state, minUSD, maxUSD) {
        const { country, role, level, incomeTax, socialSecurity, otherTaxes } = state;
        const selectedData = { country, role, level };
        
        this.destroyCharts();

        const canvasMap = {
            salaryComparison: 'salaryComparisonChart',
            costOfLiving: 'costOfLivingChart',
            taxBreakdown: 'taxBreakdownChart',
            purchasingPower: 'purchasingPowerChart'
        };

        // Re-create charts
        this.charts.salaryComparison = SalaryChart.create(this.elements.salaryComparisonChart, this.data, selectedData);
        this.charts.costOfLiving = CostOfLivingChart.create(this.elements.costOfLivingChart, this.data, country);
        
        const taxRates = {
            incomeTax: incomeTax / 100,
            socialSecurity: socialSecurity / 100,
            other: otherTaxes / 100
        };
        const takeHome = CalculationUtils.calculateTakeHome(minUSD, taxRates);
        this.charts.taxBreakdown = TaxChart.create(this.elements.taxBreakdownChart, takeHome);
        
        this.charts.purchasingPower = PurchasingPowerChart.create(this.elements.purchasingPowerChart, this.data, minUSD, country);
    }

    destroyCharts() {
        Object.values(this.charts).forEach(chart => chart?.destroy());
        this.charts = {};
    }
}
