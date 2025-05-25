'use strict';

export class FormatUtils {
    static formatCurrency(amount, currency, currencySymbols) {
        // Ensure currency is a valid ISO currency code for Intl.NumberFormat
        // Basic check, might need a more comprehensive list or validation if issues arise
        if (typeof currency !== 'string' || currency.length !== 3) {
            console.warn(`Invalid currency code for Intl.NumberFormat: ${currency}. Falling back to USD.`);
            currency = 'USD'; // Fallback or throw error
        }
        try {
            return new Intl.NumberFormat('en-US', { // Consider making 'en-US' configurable or deriving from user locale
                style: 'currency',
                currency: currency,
                currencyDisplay: 'symbol' // 'code', 'name' are other options
            }).format(amount);
        } catch (error) {
            console.error(`Error formatting currency for ${currency}:`, error);
            // Fallback formatting if Intl fails for some reason (e.g. unrecognized currency code by browser)
            return `${currency} ${amount.toFixed(2)}`; 
        }
    }

    static formatCostWithCurrency(amount, country, currencyData) {
        if (!currencyData || !currencyData.countryToCurrency || !currencyData.currencySymbols) {
            console.warn('formatCostWithCurrency: currencyData is incomplete.');
            return String(amount); // Fallback
        }
        const currencyCode = currencyData.countryToCurrency[country];
        if (!currencyCode) {
            console.warn(`formatCostWithCurrency: No currency code found for country: ${country}`);
            return String(amount); // Fallback
        }
        
        // Prefer using Intl.NumberFormat for consistency and better locale handling if possible
        try {
            return new Intl.NumberFormat('en-US', { // As above, locale could be dynamic
                style: 'currency',
                currency: currencyCode,
                 // Let Intl decide symbol or code based on its data for the locale + currency combo
                 // currencyDisplay: 'symbol' might be too restrictive or not always what's best
            }).format(amount);
        } catch (error) {
             console.warn(`formatCostWithCurrency: Intl.NumberFormat failed for ${currencyCode}, falling back to manual format. Error: ${error}`);
            const symbol = currencyData.currencySymbols[currencyCode];
            if (!symbol) {
                console.warn(`formatCostWithCurrency: No symbol found for currency code: ${currencyCode}`);
                return `${currencyCode} ${amount.toLocaleString()}`; // Fallback to code
            }
            return `${symbol}${amount.toLocaleString()}`; // Original manual format
        }
    }

    static convertToUSD(amount, currency, exchangeRates) {
        if (typeof amount !== 'number' || typeof currency !== 'string'){
            console.warn('convertToUSD: Invalid input types for amount or currency.');
            return 0; // Or handle as an error
        }
        if (!exchangeRates || typeof exchangeRates[currency] !== 'number') {
            console.warn(`convertToUSD: No or invalid exchange rate for currency: ${currency}. Returning 0.`);
            return 0; // Or handle as an error, e.g., throw new Error(...)
        }
        return amount * exchangeRates[currency];
    }
} 