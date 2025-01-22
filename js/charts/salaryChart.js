import { chartConfig } from '../config/chartConfig.js';
import { FormatUtils } from '../utils/formatUtils.js';

export class SalaryChart {
    static create(ctx, data, selectedData) {
        const { country, role, level } = selectedData;
        
        const otherCountries = Object.entries(data.countries)
            .filter(([key]) => key !== country && key !== 'croatia')
            .slice(0, 7);

        const chartData = {
            labels: [country.toUpperCase(), ...otherCountries.map(([key]) => key.toUpperCase())],
            datasets: [{
                label: `${data.roles[role].title} ${level} Salary Range (USD)`,
                data: [
                    this.getSalaryRange(data, country, role, level),
                    ...otherCountries.map(([key, countryData]) => 
                        this.getSalaryRange(data, key, role, level)
                    )
                ],
                backgroundColor: [chartConfig.colors.primary, ...Array(7).fill(chartConfig.colors.secondary)],
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
        const countryData = data.countries[country];
        const roleData = countryData.roles[role];
        const levelData = roleData[level];
        return [
            FormatUtils.convertToUSD(levelData.min, countryData.currency, data.exchangeRates),
            FormatUtils.convertToUSD(levelData.max, countryData.currency, data.exchangeRates)
        ];
    }
} 