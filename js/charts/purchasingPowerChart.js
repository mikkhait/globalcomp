import { chartConfig } from '../config/chartConfig.js';
import { CalculationUtils } from '../utils/calculationUtils.js';

export class PurchasingPowerChart {
    static create(ctx, data, salary, country) {
        const costData = data.costOfLiving;
        const baseIndex = costData[country]?.index || 100;
        const baseSalary = salary / baseIndex; // Normalize the salary by the base country's index

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
        return baseSalary * countryIndex;
    }
} 