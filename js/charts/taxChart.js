'use strict';
import { chartConfig } from '../config/chartConfig.js';

export class TaxChart {
    static create(ctx, takeHome) {
        if (!ctx) {
            console.error("TaxChart: Canvas context is missing.");
            return null;
        }

        // Validate takeHome object and its properties
        if (!takeHome || 
            typeof takeHome.net !== 'number' || 
            !takeHome.breakdown ||
            typeof takeHome.breakdown.incomeTax !== 'number' || 
            typeof takeHome.breakdown.socialSecurity !== 'number' || 
            typeof takeHome.breakdown.other !== 'number' ||
            typeof takeHome.gross !== 'number') {
            console.error('TaxChart: Invalid or incomplete takeHome data.', takeHome);
            // Optionally, you could render a message on the canvas or return an empty/error chart.
            // For now, returning null to prevent a broken chart.
            return null; 
        }

        const chartData = [
            takeHome.net,
            takeHome.breakdown.incomeTax,
            takeHome.breakdown.socialSecurity,
            takeHome.breakdown.other
        ];

        // Ensure no NaN values are passed to the chart data, fallback to 0
        const sanitizedChartData = chartData.map(val => (isNaN(val) ? 0 : val));

        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Take-Home', 'Income Tax', 'Social Security', 'Other Taxes'],
                datasets: [{
                    data: sanitizedChartData,
                    backgroundColor: [
                        chartConfig.colors.success,
                        chartConfig.colors.danger,
                        chartConfig.colors.warning,
                        chartConfig.colors.secondary
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Tax Breakdown'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = typeof context.raw === 'number' ? context.raw : 0;
                                let percentageString = '';
                                if (takeHome.gross > 0) { // Avoid division by zero or NaN
                                    const percentage = ((value / takeHome.gross) * 100).toFixed(1);
                                    percentageString = ` (${percentage}%)`;
                                }
                                return `${context.label || ''}: $${value.toLocaleString()}${percentageString}`;
                            }
                        }
                    }
                }
            }
        });
    }
} 