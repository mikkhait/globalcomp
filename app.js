import { CompensationCalculator } from './js/models/CompensationCalculator.js';
import { compensationData } from './data.js';

// Import bootstrap from CDN if not using npm
const bootstrap = window.bootstrap;

function showHowToUse() {
    const modal = new bootstrap.Modal(document.getElementById('howToUseModal'));
    modal.show();
}

function showReleaseNotes() {
    const modal = new bootstrap.Modal(document.getElementById('releaseNotesModal'));
    modal.show();
}

// Show the modal on first visit
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('hasVisited')) {
        showHowToUse();
        localStorage.setItem('hasVisited', 'true');
    }
    
    // Initialize the calculator with the data
    const calculator = new CompensationCalculator(compensationData);
}); 