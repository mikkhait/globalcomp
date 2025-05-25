'use strict';
import { chartConfig } from '../config/chartConfig.js';
import { CalculationUtils } from '../utils/calculationUtils.js';

export class PurchasingPowerChart {
    static create(ctx, data, salary, country) {
        if (!ctx) {
            console.error("PurchasingPowerChart: Canvas context is missing.");
            return null;
        }
        if (!data || !data.costOfLiving || typeof salary !== 'number' || !country) {
            console.error("PurchasingPowerChart: Invalid or missing data, salary, or country.");
            return null;
        }

        const costData = data.costOfLiving;
        let baseIndex = costData[country]?.index;

        if (typeof baseIndex !== 'number' || baseIndex === 0) {
            console.warn(`PurchasingPowerChart: Invalid or zero baseIndex for ${country}. Using fallback 100.`);
            baseIndex = 100; // Fallback to prevent division by zero or NaN results
        }
        
        // If salary is 0, purchasing power will be 0. Avoid division by zero if baseIndex is also 0 (already handled).
        const baseSalary = salary === 0 ? 0 : salary / baseIndex; 

        // Calculate purchasing power for all countries, sorted alphabetically
        const comparisonData = Object.entries(costData)
            .filter(([key]) => key !== country && costData[key]?.index)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, countryData]) => ({
                country: key.toUpperCase(),
                purchasingPower: this.calculatePurchasingPower(baseSalary, countryData.index)
            }));

        const selectedCountryPower = this.calculatePurchasingPower(baseSalary, baseIndex);

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [country.toUpperCase(), ...comparisonData.map(d => d.country)],
                datasets: [{
                    label: 'Equivalent Purchasing Power (USD)',
                    data: [selectedCountryPower, ...comparisonData.map(d => d.purchasingPower)],
                    backgroundColor: [
                        chartConfig.colors.success,
                        ...Array(comparisonData.length).fill(chartConfig.colors.info)
                    ]
                }]
            },
            options: {
                ...chartConfig.defaultOptions,
                plugins: {
                    title: {
                        display: true,
                        text: 'Purchasing Power Comparison'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw;
                                return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000000) {
                                    return `$${(value / 1000000).toFixed(1)}M`;
                                }
                                if (value >= 1000) {
                                    return `$${(value / 1000).toFixed(1)}K`;
                                }
                                return `$${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    static calculatePurchasingPower(baseSalary, countryIndex) {
        if (typeof baseSalary !== 'number' || typeof countryIndex !== 'number') {
            console.warn('calculatePurchasingPower: Invalid input types.');
            return 0;
        }
        // If countryIndex is 0, purchasing power is 0. Avoid NaN if baseSalary is also NaN (already handled by input checks).
        return baseSalary * countryIndex;
    }
} 