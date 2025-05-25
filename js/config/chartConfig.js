'use strict';

export const chartConfig = {
    defaultOptions: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            }
        }
    },
    colors: {
        primary: 'rgba(54, 162, 235, 0.5)',
        secondary: 'rgba(201, 203, 207, 0.5)',
        success: 'rgba(75, 192, 192, 0.5)',
        warning: 'rgba(255, 205, 86, 0.5)',
        danger: 'rgba(255, 99, 132, 0.5)',
        info: 'rgba(153, 102, 255, 0.5)',
        orange: 'rgba(255, 159, 64, 0.5)'
    }
}; 