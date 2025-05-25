'use strict';

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
        const incomeTaxOverrideInput = document.getElementById('incomeTaxOverride');
        const socialSecurityOverrideInput = document.getElementById('socialSecurityOverride');
        const otherTaxesOverrideInput = document.getElementById('otherTaxesOverride');
        const fixedOverheadOverrideInput = document.getElementById('fixedOverheadOverride');
        const employerTaxOverrideInput = document.getElementById('employerTaxOverride');
        const workersCompOverrideInput = document.getElementById('workersCompOverride');
        const otherFeesOverrideInput = document.getElementById('otherFeesOverride');

        // Country change handler
        if (countrySelect) {
            countrySelect.addEventListener('change', () => {
                const country = countrySelect.value;
                if (country) {
                    this.setDefaultTaxRates(country);
                    this.setDefaultOverheadRates(country);
                }
                this.updateResults();
            });
        }

        // Role and level change handlers
        if (roleSelect) {
            roleSelect.addEventListener('change', () => this.updateResults());
        }
        if (levelSelect) {
            levelSelect.addEventListener('change', () => this.updateResults());
        }

        // Reset buttons handlers
        if (resetTaxesButton) {
            resetTaxesButton.addEventListener('click', () => {
                if (countrySelect) {
                    const country = countrySelect.value;
                    if (country) {
                        this.setDefaultTaxRates(country);
                    }
                }
                this.updateResults();
            });
        }

        if (resetOverheadButton) {
            resetOverheadButton.addEventListener('click', () => {
                if (countrySelect) {
                    const country = countrySelect.value;
                    if (country) {
                        this.setDefaultOverheadRates(country);
                    }
                }
                this.updateResults();
            });
        }

        // Tax override listeners
        [
            { id: 'incomeTaxOverride', element: incomeTaxOverrideInput },
            { id: 'socialSecurityOverride', element: socialSecurityOverrideInput },
            { id: 'otherTaxesOverride', element: otherTaxesOverrideInput },
        ].forEach(({ element }) => {
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });

        // Overhead listeners
        [
            { id: 'fixedOverheadOverride', element: fixedOverheadOverrideInput },
            { id: 'employerTaxOverride', element: employerTaxOverrideInput },
            { id: 'workersCompOverride', element: workersCompOverrideInput },
            { id: 'otherFeesOverride', element: otherFeesOverrideInput },
        ].forEach(({ element }) => {
            if (element) {
                element.addEventListener('input', () => this.updateResults());
            }
        });

        // Set initial values if country is selected
        if (countrySelect && countrySelect.value) {
            this.setDefaultTaxRates(countrySelect.value);
            this.setDefaultOverheadRates(countrySelect.value);
        }
        this.updateResults(); // Initial calculation based on default/selected values
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
        
        const employerTaxInput = document.getElementById('employerTaxOverride');
        const workersCompInput = document.getElementById('workersCompOverride');
        const otherFeesInput = document.getElementById('otherFeesOverride');
        const fixedOverheadInput = document.getElementById('fixedOverheadOverride');

        if (employerTaxInput) employerTaxInput.value = (overhead.employerTax * 100).toFixed(1);
        if (workersCompInput) workersCompInput.value = (overhead.workersComp * 100).toFixed(1);
        if (otherFeesInput) otherFeesInput.value = (overhead.otherFees * 100).toFixed(1);
        
        // Set default fixed overhead if the input exists
        if (fixedOverheadInput && this.data.companyOverhead?.fixedMonthlyCostUSD) {
            fixedOverheadInput.value = this.data.companyOverhead.fixedMonthlyCostUSD;
        }
    }

    getTaxRates() {
        const incomeTaxOverrideInput = document.getElementById('incomeTaxOverride');
        const socialSecurityOverrideInput = document.getElementById('socialSecurityOverride');
        const otherTaxesOverrideInput = document.getElementById('otherTaxesOverride');

        return {
            incomeTax: parseFloat(incomeTaxOverrideInput?.value) / 100 || 0,
            socialSecurity: parseFloat(socialSecurityOverrideInput?.value) / 100 || 0,
            other: parseFloat(otherTaxesOverrideInput?.value) / 100 || 0
        };
    }

    getOverheadRates() {
        const fixedOverheadOverrideInput = document.getElementById('fixedOverheadOverride');
        const employerTaxOverrideInput = document.getElementById('employerTaxOverride');
        const workersCompOverrideInput = document.getElementById('workersCompOverride');
        const otherFeesOverrideInput = document.getElementById('otherFeesOverride');
        
        return {
            fixedOverhead: parseFloat(fixedOverheadOverrideInput?.value) || this.data.companyOverhead.fixedMonthlyCostUSD || 600,
            employerTax: parseFloat(employerTaxOverrideInput?.value) / 100 || 0,
            workersComp: parseFloat(workersCompOverrideInput?.value) / 100 || 0,
            otherFees: parseFloat(otherFeesOverrideInput?.value) / 100 || 0
        };
    }

    getSelectedValues() {
        const roleSelect = document.getElementById('role');
        const countrySelect = document.getElementById('country');
        const levelSelect = document.getElementById('level');

        return {
            role: roleSelect?.value,
            country: countrySelect?.value,
            level: levelSelect?.value
        };
    }

    updateResults() {
        this.destroyCharts();

        const resultsDiv = document.getElementById('results');
        const messageArea = document.getElementById('resultsMessageArea');
        // Get references to all content blocks
        const contentBlocks = [
            document.getElementById('compensationSummaryCard'),
            document.getElementById('chartsGrid'),
            document.getElementById('roleDetailsCard'),
            document.getElementById('locationInfoCard'),
            document.getElementById('companyOverheadCard')
        ].filter(el => el); // Filter out nulls if any ID is mistyped or element removed

        function showMessage(html, type = 'info') {
            if (messageArea) {
                messageArea.innerHTML = `<div class="alert alert-${type}">${html}</div>`;
                messageArea.classList.remove('d-none');
            }
            contentBlocks.forEach(block => block.classList.add('d-none'));
            if(resultsDiv) resultsDiv.classList.remove('d-none'); // Ensure main results area is visible for message
        }

        function showContent() {
            if (messageArea) {
                messageArea.innerHTML = '';
                messageArea.classList.add('d-none');
            }
            contentBlocks.forEach(block => block.classList.remove('d-none'));
            if(resultsDiv) resultsDiv.classList.remove('d-none');
        }

        if (!resultsDiv || !messageArea) {
            console.error("Results container or message area not found.");
            return;
        }

        const { role, country, level } = this.getSelectedValues();

        if (!role || !country || !level) {
            showMessage('Please select Role, Country, and Level to see results.', 'info');
            return;
        }

        try {
            const countryData = this.data.countries?.[country];
            if (!countryData) {
                showMessage(`Compensation data for the selected country (<strong>${country}</strong>) is not available.`, 'warning');
                return;
            }

            const roleData = countryData.roles?.[role];
            if (!roleData) {
                showMessage(`Compensation data for the selected role (<strong>${role}</strong>) in <strong>${country}</strong> is not available.`, 'warning');
                return;
            }

            const levelData = roleData[level];
            if (!levelData) {
                showMessage(`Compensation data for the selected level (<strong>${level}</strong>) for <strong>${role}</strong> in <strong>${country}</strong> is not available.`, 'warning');
                return;
            }

            const currency = countryData.currency;
            const costOfLiving = this.data.costOfLiving?.[country];
            if (!costOfLiving) {
                console.warn(`Cost of living data not found for country: ${country}`); 
            }
            const roleDefKey = role === 'pm' ? 'productManager' :
                              (role === 'dataEngineer' ? 'dataEngineer' : role);
            const roleDefinitions = this.data.roleDefinitions?.[roleDefKey];
            const roleLevelDetails = roleDefinitions?.[level.toLowerCase()];
            if (!roleLevelDetails) {
                console.warn(`Role level details not found for ${roleDefKey} - ${level.toLowerCase()}`);
            }
            const range = levelData;
            const monthlyRange = CalculationUtils.calculateMonthlyRange(range);
            const minUSD = FormatUtils.convertToUSD(range.min, currency, this.data.exchangeRates);
            const maxUSD = FormatUtils.convertToUSD(range.max, currency, this.data.exchangeRates);
            
            showContent(); // Make content areas visible and clear messages

            this.updateDisplays(range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails);
            this.createCharts(minUSD, maxUSD, country, role, level);

        } catch (error) {
            console.error('Error updating results:', error);
            showMessage('<i class="bi bi-exclamation-triangle-fill me-2"></i>An unexpected error occurred while calculating compensation. Please try again.', 'danger');
        }
    }

    updateDisplays(range, monthlyRange, minUSD, maxUSD, currency, country, costOfLiving, roleLevelDetails) {
        this.updateCompensationDisplays(range, monthlyRange, minUSD, maxUSD, currency);
        this.updateOverheadDisplay(minUSD); 
        this.updateLocationInfo(currency, country, costOfLiving);
        this.updateRoleDetails(roleLevelDetails);
    }

    updateCompensationDisplays(range, monthlyRange, minUSD, maxUSD, currency) {
        const annualRangeEl = document.getElementById('annualRange');
        if (annualRangeEl) {
            annualRangeEl.innerHTML = this.createRangeHTML('Annual Compensation', range, monthlyRange, minUSD, maxUSD, currency);
        } else {
            console.error("Element with ID 'annualRange' not found.");
        }

        const monthlyRangeEl = document.getElementById('monthlyRange');
        if (monthlyRangeEl) {
            monthlyRangeEl.innerHTML = this.createRangeHTML('Monthly Compensation', monthlyRange, range, minUSD / 12, maxUSD / 12, currency);
        } else {
            console.error("Element with ID 'monthlyRange' not found.");
        }
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
        const overheadBreakdownEl = document.getElementById('overheadBreakdown');
        if (overheadBreakdownEl) {
            const overhead = CalculationUtils.calculateTotalOverhead(salary, this.getOverheadRates());
            overheadBreakdownEl.innerHTML = `
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
        } else {
            console.error("Element with ID 'overheadBreakdown' not found.");
        }
    }

    updateLocationInfo(currency, country, costOfLiving) {
        const exchangeRateEl = document.getElementById('exchangeRate');
        if (exchangeRateEl) {
            exchangeRateEl.innerHTML = `
                <div>Exchange Rate: 1 ${currency} = ${this.data.exchangeRates[currency]?.toFixed(3) || 'N/A'} USD</div>
            `;
        } else {
            console.error("Element with ID 'exchangeRate' not found.");
        }

        const costIndexEl = document.getElementById('costIndex');
        if (costIndexEl && costOfLiving) {
            costIndexEl.innerHTML = `
                <div>Cost of Living Index: ${costOfLiving.index} <small>(New York = 100)</small></div>
            `;
        } else if (!costIndexEl) {
            console.error("Element with ID 'costIndex' not found.");
        } else {
            costIndexEl.innerHTML = '<div>Cost of Living Index: N/A</div>'; 
        }
        
        const rentCostsEl = document.getElementById('rentCosts');
        if (rentCostsEl && costOfLiving?.rent) {
            rentCostsEl.innerHTML = `
                <div>Monthly Rent (1 bed, city center): 
                    ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.min, country, this.data)} - 
                    ${FormatUtils.formatCostWithCurrency(costOfLiving.rent.max, country, this.data)}
                </div>
            `;
        } else if (!rentCostsEl) {
            console.error("Element with ID 'rentCosts' not found.");
        } else {
            rentCostsEl.innerHTML = '<div>Monthly Rent: N/A</div>';
        }

        const livingCostsEl = document.getElementById('livingCosts');
        if (livingCostsEl && costOfLiving?.details) {
            livingCostsEl.innerHTML = `
                <div>
                    <div>Average Meal Cost: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.meal, country, this.data)}</div>
                    <div>Monthly Transport: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.transport, country, this.data)}</div>
                    <div>Monthly Utilities: ${FormatUtils.formatCostWithCurrency(costOfLiving.details.utilities, country, this.data)}</div>
                </div>
            `;
        } else if (!livingCostsEl) {
            console.error("Element with ID 'livingCosts' not found.");
        } else {
            livingCostsEl.innerHTML = '<div>Monthly Expenses: N/A</div>';
        }
    }

    updateRoleDetails(roleLevelDetails) {
        const levelDetailsEl = document.getElementById('levelDetails');
        if (!levelDetailsEl) {
            console.error("Element with ID 'levelDetails' not found.");
            return;
        }

        if (!roleLevelDetails) {
            levelDetailsEl.innerHTML = `
                <div class="alert alert-info">
                    No detailed information available for this level.
                </div>
            `;
            return;
        }

        levelDetailsEl.innerHTML = `
            <div class="level-details mb-3">
                <h4 class="h6">${roleLevelDetails.title}</h4>
                <p class="text-muted mb-3">${roleLevelDetails.description}</p>
                
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
                
                <div class="skills">
                    <h5 class="h6 text-primary">Required Skills</h5>
                    <ul class="list-unstyled">
                        ${roleLevelDetails.skills.map(s => `
                            <li class="mb-2">
                                <i class="bi bi-star-fill text-warning me-2"></i>${s}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    createCharts(minUSD, maxUSD, country, role, level) {
        const selectedData = { country, role, level };
        
        const salaryChartCanvas = document.getElementById('salaryComparisonChart');
        if (salaryChartCanvas) {
            this.charts.salaryComparison = SalaryChart.create(
                salaryChartCanvas,
                this.data,
                selectedData
            );
        } else {
            console.warn('Salary comparison chart canvas not found.');
        }

        const costOfLivingChartCanvas = document.getElementById('costOfLivingChart');
        if (costOfLivingChartCanvas) {
            this.charts.costOfLiving = CostOfLivingChart.create(
                costOfLivingChartCanvas,
                this.data,
                country
            );
        } else {
            console.warn('Cost of living chart canvas not found.');
        }

        const taxBreakdownChartCanvas = document.getElementById('taxBreakdownChart');
        if (taxBreakdownChartCanvas) {
            const takeHome = CalculationUtils.calculateTakeHome(minUSD, this.getTaxRates());
            this.charts.taxBreakdown = TaxChart.create(
                taxBreakdownChartCanvas,
                takeHome
            );
        } else {
            console.warn('Tax breakdown chart canvas not found.');
        }

        const purchasingPowerChartCanvas = document.getElementById('purchasingPowerChart');
        if (purchasingPowerChartCanvas) {
            this.charts.purchasingPower = PurchasingPowerChart.create(
                purchasingPowerChartCanvas,
                this.data,
                minUSD,
                country
            );
        } else {
            console.warn('Purchasing power chart canvas not found.');
        }
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