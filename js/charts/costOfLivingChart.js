import { chartConfig } from '../config/chartConfig.js';
import { FormatUtils } from '../utils/formatUtils.js';

export class CostOfLivingChart {
    static create(ctx, data, country) {
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
            ? (countryKey) => this.getAverageRent(data.costOfLiving[countryKey])
            : (countryKey) => this.getNumericValue(data.costOfLiving[countryKey], type);

        const selectedCountryValue = this.convertToUSD(getValue(country), country, data);
        const comparisonValues = comparisonCountries.map(([key]) => 
            this.convertToUSD(getValue(key), key, data)
        );

        return [selectedCountryValue, ...comparisonValues];
    }

    static getNumericValue(costData, costType) {
        if (!costData || !costData.details) return 0;
        return costData.details[costType] || 0;
    }

    static getAverageRent(costData) {
        if (!costData || !costData.rent) return 0;
        return (costData.rent.min + costData.rent.max) / 2;
    }

    static convertToUSD(value, country, data) {
        const currency = data.countryToCurrency[country];
        if (!currency) return value;
        return FormatUtils.convertToUSD(value, currency, data.exchangeRates);
    }
} 