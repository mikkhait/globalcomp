import { chartConfig } from '../config/chartConfig.js';
import { CalculationUtils } from '../utils/calculationUtils.js';

export class PurchasingPowerChart {
    static create(ctx, data, salary, country) {
        const costData = data.costOfLiving;
        const baseIndex = costData[country].index;

        // Calculate purchasing power for top 5 countries
        const comparisonData = Object.entries(costData)
            .filter(([key]) => key !== country)
            .slice(0, 5)
            .map(([key, data]) => ({
                country: key.toUpperCase(),
                purchasingPower: CalculationUtils.calculatePurchasingPower(
                    salary * baseIndex,
                    data.index
                )
            }));

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [country.toUpperCase(), ...comparisonData.map(d => d.country)],
                datasets: [{
                    label: 'Equivalent Purchasing Power (USD)',
                    data: [salary, ...comparisonData.map(d => d.purchasingPower)],
                    backgroundColor: [
                        chartConfig.colors.success,
                        ...Array(5).fill(chartConfig.colors.info)
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
                                return `$${context.raw.toFixed(0)}`;
                            }
                        }
                    }
                }
            }
        });
    }
} 