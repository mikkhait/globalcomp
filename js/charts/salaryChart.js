import { chartConfig } from '../config/chartConfig.js';
import { FormatUtils } from '../utils/formatUtils.js';

export class SalaryChart {
    static create(ctx, data, selectedData) {
        const { country, role, level } = selectedData;
        
        // Get and sort other countries alphabetically, remove the slice to show all countries
        const otherCountries = Object.entries(data.countries)
            .filter(([key]) => key !== country)
            .sort(([a], [b]) => a.localeCompare(b));

        // Map 'pm' to 'productManager' for roleDefinitions
        const roleDefKey = role === 'pm' ? 'productManager' : 
                          (role === 'dataEngineer' ? 'dataEngineer' : role);
        const roleTitle = data.roleDefinitions[roleDefKey][level.toLowerCase()].title;

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
            const countryData = data.countries[country];
            if (!countryData || !countryData.roles || !countryData.roles[role]) {
                console.warn(`Missing salary data for ${country} - ${role}`);
                return [0, 0];
            }
            const roleData = countryData.roles[role];
            const levelData = roleData[level];
            if (!levelData) {
                console.warn(`Missing level data for ${country} - ${role} - ${level}`);
                return [0, 0];
            }
            return [
                FormatUtils.convertToUSD(levelData.min, countryData.currency, data.exchangeRates),
                FormatUtils.convertToUSD(levelData.max, countryData.currency, data.exchangeRates)
            ];
        } catch (error) {
            console.error(`Error getting salary range for ${country}:`, error);
            return [0, 0];
        }
    }
} 