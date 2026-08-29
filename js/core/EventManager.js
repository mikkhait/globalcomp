'use strict';

/**
 * EventManager: Handles all user interactions and updates the state.
 */
function updateUrlParams(state) {
    try {
        const url = new URL(window.location);
        Object.entries(state).forEach(([k, v]) => url.searchParams.set(k, v));
        window.history.replaceState(null, '', url);
    } catch (e) { /* noop */ }
}

function persistSelection(state) {
    try {
        const saved = JSON.parse(localStorage.getItem('gc_selection') || '{}');
        localStorage.setItem('gc_selection', JSON.stringify({ ...saved, ...state }));
    } catch (e) { /* noop */ }
}

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

        // Chip / segmented selectors (role, level, country)
        document.querySelectorAll('[data-selector]').forEach(group => {
            const stateKey = group.getAttribute('data-selector');
            group.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-value]');
                if (!btn || !group.contains(btn)) return;
                const value = btn.getAttribute('data-value');
                this.selectChip(group, btn, stateKey, value);
            });
            group.addEventListener('keydown', (e) => {
                const btn = e.target.closest('[data-value]');
                if (!btn) return;
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const value = btn.getAttribute('data-value');
                    this.selectChip(group, btn, stateKey, value);
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const chips = [...group.querySelectorAll('[data-value]')];
                    const idx = chips.indexOf(btn);
                    const next = chips[(idx + (e.key === 'ArrowRight' ? 1 : chips.length - 1)) % chips.length];
                    btn.tabIndex = -1;
                    next.tabIndex = 0;
                    next.focus();
                }
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

    selectChip(group, btn, stateKey, value) {
        group.querySelectorAll('[data-value]').forEach(b => {
            b.setAttribute('aria-checked', String(b === btn));
            b.tabIndex = b === btn ? 0 : -1;
        });
        const hidden = document.getElementById(stateKey);
        if (hidden) {
            hidden.value = value;
            hidden.dispatchEvent(new Event('input', { bubbles: true }));
        }
        this.stateManager.setState({ [stateKey]: value });
        if (stateKey === 'country') this.resetToCountryDefaults(value);
        updateUrlParams({ [stateKey]: value });
        persistSelection({ [stateKey]: value });
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
