'use strict';
import { CompensationCalculator } from './js/models/CompensationCalculator.js';
import { compensationData } from './data.js';

// Import bootstrap from CDN if not using npm
const bootstrap = window.bootstrap;

// Cache DOM elements
const howToUseModal = document.getElementById('howToUseModal');
const releaseNotesModal = document.getElementById('releaseNotesModal');

// Initialize modals
let howToUseModalInstance = null;
let releaseNotesModalInstance = null;

function initializeModals() {
    try {
        if (howToUseModal) {
            howToUseModalInstance = new bootstrap.Modal(howToUseModal);
        }
        if (releaseNotesModal) {
            releaseNotesModalInstance = new bootstrap.Modal(releaseNotesModal);
        }
    } catch (error) {
        console.error('Failed to initialize modals:', error);
    }
}

function showHowToUse() {
    try {
        howToUseModalInstance?.show();
    } catch (error) {
        console.error('Failed to show How to Use modal:', error);
    }
}

function showReleaseNotes() {
    try {
        releaseNotesModalInstance?.show();
    } catch (error) {
        console.error('Failed to show Release Notes modal:', error);
    }
}

// Initialize calculator with error handling
function initializeCalculator() {
    try {
        const calculator = new CompensationCalculator(compensationData);
        return calculator;
    } catch (error) {
        console.error('Failed to initialize calculator:', error);
        // Show user-friendly error message
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Failed to initialize calculator. Please refresh the page or try again later.
                </div>
            `;
        }
        return null;
    }
}

function populateReleaseNotes(notes) {
    const contentDiv = document.getElementById('releaseNotesContent');
    if (!contentDiv) {
        console.error('Release notes content area not found.');
        return;
    }

    if (!notes || notes.length === 0) {
        contentDiv.innerHTML = '<p>No release notes available at this time.</p>';
        return;
    }

    try {
        let html = '';
        notes.forEach(note => {
            html += `
                <div class="release-note mb-4">
                    <div class="version-header">
                        <span class="version">Version ${note.version}</span>
                        <span class="date">${note.date}</span>
                    </div>
            `;

            if (note.major && note.major.length > 0) {
                html += `
                    <div class="release-section major-changes">
                        <h6 class="section-title"><i class="bi bi-stars me-2"></i>Major Changes</h6>
                        <ul>${note.major.map(item => `<li><i class="bi bi-check-circle-fill me-2"></i>${item}</li>`).join('')}</ul>
                    </div>
                `;
            }

            if (note.improvements && note.improvements.length > 0) {
                html += `
                    <div class="release-section improvements">
                        <h6 class="section-title"><i class="bi bi-graph-up-arrow me-2"></i>Improvements</h6>
                        <ul>${note.improvements.map(item => `<li><i class="bi bi-check-circle-fill me-2"></i>${item}</li>`).join('')}</ul>
                    </div>
                `;
            }

            if (note.fixes && note.fixes.length > 0) {
                html += `
                    <div class="release-section fixes">
                        <h6 class="section-title"><i class="bi bi-tools me-2"></i>Fixes</h6>
                        <ul>${note.fixes.map(item => `<li><i class="bi bi-check-circle-fill me-2"></i>${item}</li>`).join('')}</ul>
                    </div>
                `;
            }
            html += '</div>'; // close release-note
        });
        contentDiv.innerHTML = html;
    } catch (error) {
        console.error('Error populating release notes:', error);
        contentDiv.innerHTML = '<p class="text-danger">Error loading release notes. Please try again later.</p>';
    }
}

// Show the modal on first visit
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modals
    initializeModals();
    
    // Populate release notes
    if (compensationData && compensationData.releaseNotes) {
        populateReleaseNotes(compensationData.releaseNotes);
    } else {
        console.error('Release notes data not found or is invalid.');
        const contentDiv = document.getElementById('releaseNotesContent');
        if (contentDiv) {
            contentDiv.innerHTML = '<p class="text-warning">Release notes data is currently unavailable.</p>';
        }
    }
    
    // Attach event listeners to header buttons
    const releaseNotesButton = document.getElementById('releaseNotesBtn');
    if (releaseNotesButton) {
        releaseNotesButton.addEventListener('click', showReleaseNotes);
    }

    const howToUseButton = document.getElementById('howToUseBtn');
    if (howToUseButton) {
        howToUseButton.addEventListener('click', showHowToUse);
    }
    
    // Check if it's first visit
    if (!localStorage.getItem('hasVisited')) {
        showHowToUse();
        localStorage.setItem('hasVisited', 'true');
    }
    
    // Initialize the calculator
    const calculator = initializeCalculator();
    
    // Add event listeners for form controls
    const form = document.getElementById('compensationForm');
    if (form) {
        form.addEventListener('change', (event) => {
            if (calculator) {
                calculator.updateResults();
            }
        });
    }
}); 