'use strict';
import { chartConfig } from '../config/chartConfig.js';
import { FormatUtils } from '../utils/formatUtils.js';

export class SalaryChart {
    static create(ctx, data, selectedData) {
        if (!ctx) {
            console.error("SalaryChart: Canvas context is missing.");
            return null; // Or throw an error
        }
        if (!data || !selectedData) {
            console.error("SalaryChart: Data or selectedData is missing.");
            return null;
        }

        const { country, role, level } = selectedData;
        
        // Get and sort other countries alphabetically, remove the slice to show all countries
        const otherCountries = Object.entries(data.countries)
            .filter(([key]) => key !== country)
            .sort(([a], [b]) => a.localeCompare(b));

        // Map 'pm' to 'productManager' for roleDefinitions
        const roleDefKey = role === 'pm' ? 'productManager' : 
                          (role === 'dataEngineer' ? 'dataEngineer' : role);
        
        const roleTitle = data.roleDefinitions?.[roleDefKey]?.[level.toLowerCase()]?.title || 'Selected Role'; // Fallback title

        const chartData = {
            labels: [country.toUpperCase(), ...otherCountries.map(([key]) => key.toUpperCase())],
            datasets: [{
                label: `${roleTitle} Salary Range (USD)`,
                data: [
                    this.getSalaryRange(data, country, role, level),
                    ...otherCountries.map(([key]) => 
                        this.getSalaryRange(data, key, role, level)
                    )
                ],
                backgroundColor: [chartConfig.colors.primary, ...Array(otherCountries.length).fill(chartConfig.colors.secondary)],
            }]
        };

        return new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                ...chartConfig.defaultOptions,
                plugins: {
                    title: {
                        display: true,
                        text: 'Salary Comparison Across Countries'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const [min, max] = context.raw;
                                return `Range: $${min.toLocaleString()} - $${max.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });
    }

    static getSalaryRange(data, country, role, level) {
        try {
            const countryData = data?.countries?.[country];
            if (!countryData) {
                console.warn(`getSalaryRange: Missing country data for ${country}`);
                return [0, 0];
            }
            const currency = countryData.currency;
            if (!currency) {
                 console.warn(`getSalaryRange: Missing currency for ${country}`);
                return [0, 0];
            }

            const roleData = countryData.roles?.[role];
            if (!roleData) {
                console.warn(`getSalaryRange: Missing role data for ${country} - ${role}`);
                return [0, 0];
            }

            const levelData = roleData[level]; // Assuming level is a direct key like 'junior', 'mid', 'senior'
            if (!levelData || typeof levelData.min !== 'number' || typeof levelData.max !== 'number') {
                console.warn(`getSalaryRange: Missing or invalid level data for ${country} - ${role} - ${level}`);
                return [0, 0];
            }

            if (!data.exchangeRates || typeof data.exchangeRates[currency] !== 'number') {
                console.warn(`getSalaryRange: Missing or invalid exchange rate for ${currency}`);
                return [0, 0];
            }

            return [
                FormatUtils.convertToUSD(levelData.min, currency, data.exchangeRates),
                FormatUtils.convertToUSD(levelData.max, currency, data.exchangeRates)
            ];
        } catch (error) {
            console.error(`Error getting salary range for ${country} - ${role} - ${level}:`, error);
            return [0, 0]; // Fallback in case of unexpected errors
        }
    }
} 