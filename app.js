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

// Show the modal on first visit
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modals
    initializeModals();
    
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