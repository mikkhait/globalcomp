import { chartConfig } from '../config/chartConfig.js';

export class TaxChart {
    static create(ctx, takeHome) {
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Take-Home', 'Income Tax', 'Social Security', 'Other Taxes'],
                datasets: [{
                    data: [
                        takeHome.net,
                        takeHome.breakdown.incomeTax,
                        takeHome.breakdown.socialSecurity,
                        takeHome.breakdown.other
                    ],
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
                                const value = context.raw;
                                const percentage = ((value / takeHome.gross) * 100).toFixed(1);
                                return `${context.label}: $${value.toLocaleString()} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
} 