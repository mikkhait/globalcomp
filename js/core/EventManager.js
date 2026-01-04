'use strict';

/**
 * EventManager: Handles all user interactions and updates the state.
 */
export class EventManager {
    constructor(stateManager, data) {
        this.stateManager = stateManager;
        this.data = data;
        this.initializeListeners();
    }

    initializeListeners() {
        // Main form inputs
        document.querySelectorAll('[data-state]').forEach(el => {
            const stateKey = el.getAttribute('data-state');
            el.addEventListener('input', (e) => {
                const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
                this.stateManager.setState({ [stateKey]: value });
            });
        });

        // Country change specifically might need to reset taxes/overhead
        const countrySelect = document.querySelector('[data-state="country"]');
        if (countrySelect) {
            countrySelect.addEventListener('change', (e) => {
                const country = e.target.value;
                if (country) {
                    this.resetToCountryDefaults(country);
                }
            });
        }

        // Reset buttons
        const resetTaxesBtn = document.getElementById('resetTaxes');
        if (resetTaxesBtn) {
            resetTaxesBtn.addEventListener('click', () => {
                const { country } = this.stateManager.getState();
                if (country) this.resetTaxes(country);
            });
        }

        const resetOverheadBtn = document.getElementById('resetOverhead');
        if (resetOverheadBtn) {
            resetOverheadBtn.addEventListener('click', () => {
                const { country } = this.stateManager.getState();
                if (country) this.resetOverhead(country);
            });
        }

        // Header buttons
        const releaseNotesBtn = document.getElementById('releaseNotesBtn');
        const howToUseBtn = document.getElementById('howToUseBtn');
        
        if (releaseNotesBtn) {
            releaseNotesBtn.addEventListener('click', () => {
                const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('releaseNotesModal'));
                modal.show();
            });
        }

        if (howToUseBtn) {
            howToUseBtn.addEventListener('click', () => {
                const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('howToUseModal'));
                modal.show();
            });
        }
    }

    resetToCountryDefaults(country) {
        this.resetTaxes(country);
        this.resetOverhead(country);
    }

    resetTaxes(country) {
        const defaultRates = this.data.costOfLiving[country]?.taxRates || {
            incomeTax: 0.20,
            socialSecurity: 0.10,
            other: 0.05
        };

        this.stateManager.setState({
            incomeTax: defaultRates.incomeTax * 100,
            socialSecurity: defaultRates.socialSecurity * 100,
            otherTaxes: defaultRates.other * 100
        });
    }

    resetOverhead(country) {
        const overhead = this.data.companyOverhead.countrySpecific[country] || {
            employerTax: 0.15,
            workersComp: 0.02,
            otherFees: 0.02
        };
        
        const baseAmount = this.data?.companyOverhead?.fixedCosts?.baseAmount || 600;

        this.stateManager.setState({
            fixedOverhead: baseAmount,
            employerTax: overhead.employerTax * 100,
            workersComp: overhead.workersComp * 100,
            otherFees: overhead.otherFees * 100
        });
    }
}
