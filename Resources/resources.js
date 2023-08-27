// Labels for quarters
const quarters = ['Q1', 'Q2', 'Q3', 'Q4','Q5','Q6'];

// Labels for the y-axis (months)
const yLabels = ['JAN-FEB', 'MAR-APR', 'MAY-JUN', 'JUL-AUG', 'SEP-OCT', 'NOV-DEC'];

// Data for "Before" chart (constant values)
const beforeData = [18, 15, 10, 12, 9, 12, 25]; // Lower engagement

// Data for "After" chart (constant values)
const afterData = [17, 13, 17, 19, 22, 22, 25]; // Higher engagement


// Create the "Before" chart
const ctxBefore = document.getElementById('chartBefore').getContext('2d');
new Chart(ctxBefore, {
    type: 'line',
    data: {
        labels: quarters,
        datasets: [{
            label: 'Before',
            data: beforeData,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 3,
            fill: true,
        }],
    },
    options: {
        responsive: true, // Enable auto-resize
        maintainAspectRatio: false, // Disable aspect ratio to set custom size
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index) {
                        // Ensure all month names are displayed
                        return yLabels[index];
                    },
                },
            },
        },
    },
});

// Create the "Before" chart
const ctxAfter = document.getElementById('chartAfter').getContext('2d');
new Chart(ctxAfter, {
    type: 'line',
    data: {
        labels: quarters,
        datasets: [{
            label: 'After',
            data: afterData,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 3,
            fill: true,
        }],
    },
    options: {
        responsive: true, // Enable auto-resize
        maintainAspectRatio: false, // Disable aspect ratio to set custom size
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index) {
                        // Ensure all month names are displayed
                        return yLabels[index];
                    },
                },
            },
        },
    },
});
