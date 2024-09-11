import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    // State variables to store chart data, loading state, and error messages
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch the data from the backend when the component mounts
    useEffect(() => {
        // Axios request to fetch bar chart data from the Django API
        axios.get('http://127.0.0.1:8001/api/bar-chart-data/')
            .then(response => {
                // Process the data to match the format expected by Chart.js
                const processedData = {
                    labels: response.data.labels, // Labels for the X-axis
                    datasets: [{
                        label: 'Sales', // Label for the dataset
                        data: response.data.data, // Data for the bars
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)', // Bar background colors
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)', // Bar border colors
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1 // Border width of the bars
                    }]
                };
                setChartData(processedData); // Update the state with the fetched data
                setLoading(false); // Turn off the loading spinner
            })
            .catch(() => {
                // Handle errors if the data fetch fails
                setError('Error fetching data');
                setLoading(false); // Turn off the loading spinner even on error
            });
    }, []); // Empty dependency array to ensure the effect runs only once on mount

    return (
        <div className="chart-container">
            {/* Chart title */}
            <h2 className="chart-title">Candlestick Chart</h2>

            {/* Show loading spinner while data is being fetched */}
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {/* Display error message if the data fetch fails */}
            {error && <div>{error}</div>}

            {/* Render the Bar chart once the data is available */}
            {chartData && (
                <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
                    <Bar 
                        data={chartData} // Pass processed data to the Bar component
                        options={{
                            maintainAspectRatio: true, // Maintain the aspect ratio of the chart
                            plugins: {
                                legend: {
                                    display: true, // Display the legend
                                    position: 'bottom', // Position the legend at the bottom
                                }
                            },
                        }}
                        height={200} // Set the height of the chart
                        width={400}  // Set the width of the chart
                    />
                </div>
            )}
        </div>
    );
};

export default BarChart;


