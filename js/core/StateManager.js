'use strict';

/**
 * StateManager: A simple reactive state container.
 * Implements the Observer pattern to allow components to listen for state changes.
 */
export class StateManager {
    constructor(initialState = {}) {
        this.state = { ...initialState };
        this.listeners = [];
    }

    /**
     * Update the state and notify listeners.
     * @param {Object} newState - The partial state update.
     */
    setState(newState) {
        const oldState = { ...this.state };
        this.state = { ...this.state, ...newState };
        
        // Only notify if something actually changed
        if (JSON.stringify(oldState) !== JSON.stringify(this.state)) {
            this.notify(this.state, oldState);
        }
    }

    /**
     * Get the current state.
     * @returns {Object}
     */
    getState() {
        return { ...this.state };
    }

    /**
     * Subscribe to state changes.
     * @param {Function} listener - Callback function(newState, oldState).
     * @returns {Function} - Unsubscribe function.
     */
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    /**
     * Notify all subscribers of a change.
     * @private
     */
    notify(newState, oldState) {
        this.listeners.forEach(listener => {
            try {
                listener(newState, oldState);
            } catch (error) {
                console.error('Error in StateManager listener:', error);
            }
        });
    }
}
