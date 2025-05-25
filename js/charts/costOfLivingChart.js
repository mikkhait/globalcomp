'use strict';
import { chartConfig } from '../config/chartConfig.js';
import { FormatUtils } from '../utils/formatUtils.js';

export class CostOfLivingChart {
    static create(ctx, data, country) {
        if (!ctx) {
            console.error("CostOfLivingChart: Canvas context is missing.");
            return null;
        }
        if (!data || !data.costOfLiving || !data.countryToCurrency || !data.exchangeRates || !country) {
            console.error("CostOfLivingChart: Invalid or missing data parameters or country.");
            return null;
        }

        const costData = data.costOfLiving;
        const comparisonCountries = Object.entries(costData)
            .filter(([key]) => key !== country)
            .sort(([a], [b]) => a.localeCompare(b));

        const datasets = [
            {
                label: 'Rent (avg)',
                backgroundColor: chartConfig.colors.danger,
                data: this.getDataset('rent', country, comparisonCountries, data)
            },
            {
                label: 'Utilities',
                backgroundColor: chartConfig.colors.info,
                data: this.getDataset('utilities', country, comparisonCountries, data)
            },
            {
                label: 'Transport',
                backgroundColor: chartConfig.colors.orange,
                data: this.getDataset('transport', country, comparisonCountries, data)
            },
            {
                label: 'Meal',
                backgroundColor: chartConfig.colors.success,
                data: this.getDataset('meal', country, comparisonCountries, data)
            }
        ];

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    country.toUpperCase(),
                    ...comparisonCountries.map(([key]) => key.toUpperCase())
                ],
                datasets: datasets
            },
            options: {
                ...chartConfig.defaultOptions,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Living Costs Comparison (USD)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw.toFixed(0)}`;
                            }
                        }
                    }
                }
            }
        });
    }

    static getDataset(type, country, comparisonCountries, data) {
        const getValue = type === 'rent' 
            ? (countryKey) => {
                const cData = data.costOfLiving?.[countryKey];
                return cData ? this.getAverageRent(cData) : 0;
            }
            : (countryKey) => {
                const cData = data.costOfLiving?.[countryKey];
                return cData ? this.getNumericValue(cData, type) : 0;
            };

        const selectedCountryValue = this.convertToUSD(getValue(country), country, data);
        const comparisonValues = comparisonCountries.map(([key]) => 
            this.convertToUSD(getValue(key), key, data)
        );

        return [selectedCountryValue, ...comparisonValues];
    }

    static getNumericValue(costCountryData, costType) {
        if (!costCountryData || !costCountryData.details || typeof costCountryData.details[costType] !== 'number') {
            // console.warn(`getNumericValue: Missing or invalid data for cost type ${costType}`);
            return 0;
        }
        return costCountryData.details[costType];
    }

    static getAverageRent(costCountryData) {
        if (!costCountryData || !costCountryData.rent || typeof costCountryData.rent.min !== 'number' || typeof costCountryData.rent.max !== 'number') {
            // console.warn('getAverageRent: Missing or invalid rent data');
            return 0;
        }
        return (costCountryData.rent.min + costCountryData.rent.max) / 2;
    }

    static convertToUSD(value, countryKey, data) {
        if (typeof value !== 'number') return 0;

        const currency = data.countryToCurrency?.[countryKey];
        if (!currency) {
            // console.warn(`convertToUSD (local): No currency found for country ${countryKey}. Returning original value.`);
            // Assuming if currency isn't found, value might already be in a base currency or cannot be converted.
            // For CoL chart, it's safer to return 0 if currency for conversion is missing, as it implies data issue.
            return 0; 
        }
        // FormatUtils.convertToUSD expects exchangeRates as the third param, data here contains exchangeRates.
        return FormatUtils.convertToUSD(value, currency, data.exchangeRates);
    }
} 