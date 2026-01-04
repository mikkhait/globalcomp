'use strict';

import { StateManager } from './js/core/StateManager.js';
import { UIManager } from './js/core/UIManager.js';
import { EventManager } from './js/core/EventManager.js';
// Cache-buster: ensures dataset refreshes propagate even under aggressive browser caching.
import { compensationData } from './data.js?v=2.8.0';

/**
 * Application Entry Point
 * Initializes the core architectural agents and orchestrates the startup flow.
 */
class App {
    constructor() {
        this.data = compensationData;
        this.stateManager = null;
        this.uiManager = null;
        this.eventManager = null;
    }

    async init() {
        try {
            console.log('Initializing Global Compensation Calculator...');
            
            // 1. Initialize State
            this.stateManager = new StateManager({
                role: '',
                country: '',
                level: '',
                incomeTax: 0,
                socialSecurity: 0,
                otherTaxes: 0,
                fixedOverhead: 850,
                employerTax: 0,
                workersComp: 0,
                otherFees: 0
            });

            // 2. Initialize UI Manager (subscribes to state)
            this.uiManager = new UIManager(this.data, this.stateManager);

            // 3. Initialize Event Manager (updates state)
            this.eventManager = new EventManager(this.stateManager, this.data);

            // 4. Initial Setup
            this.setupInitialState();
            this.populateReleaseNotes();
            this.handleFirstVisit();

            console.log('Application initialized successfully.');
        } catch (error) {
            console.error('Critical failure during application initialization:', error);
            this.displayCriticalError();
        }
    }

    setupInitialState() {
        // Any initial data population needed
    }

    populateReleaseNotes() {
        const contentDiv = document.getElementById('releaseNotesContent');
        if (!contentDiv || !this.data.releaseNotes) return;

        try {
            const html = this.data.releaseNotes.map(note => `
                <div class="release-note mb-4">
                    <div class="version-header">
                        <span class="version">Version ${note.version}</span>
                        <span class="date">${note.date}</span>
                    </div>
                    ${this.renderReleaseSection(note.major, 'Major Changes', 'bi-stars')}
                    ${this.renderReleaseSection(note.improvements, 'Improvements', 'bi-graph-up-arrow')}
                    ${this.renderReleaseSection(note.fixes, 'Fixes', 'bi-tools')}
                </div>
            `).join('');
            contentDiv.innerHTML = html;
        } catch (error) {
            console.error('Error populating release notes:', error);
        }
    }

    renderReleaseSection(items, title, icon) {
        if (!items || items.length === 0) return '';
        return `
            <div class="release-section mt-3">
                <h6 class="section-title"><i class="bi ${icon} me-2"></i>${title}</h6>
                <ul>${items.map(item => `<li><i class="bi bi-check-circle-fill me-2"></i>${item}</li>`).join('')}</ul>
            </div>
        `;
    }

    handleFirstVisit() {
        if (!localStorage.getItem('hasVisited')) {
            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('howToUseModal'));
            modal.show();
            localStorage.setItem('hasVisited', 'true');
        }
    }

    displayCriticalError() {
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.classList.remove('d-none');
            resultsDiv.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">System Error</h4>
                    <p>We encountered a critical error while loading the application. Please try refreshing the page.</p>
                </div>
            `;
        }
    }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
