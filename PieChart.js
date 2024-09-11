import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Register necessary components for Pie charts
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    // State variables to hold chart data, loading state, and error messages
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data from the API when the component mounts
    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/pie-chart-data/')
            .then(response => {
                // Process the API response to format data for the Pie chart
                const processedData = {
                    labels: response.data.labels, // Labels for the pie chart
                    datasets: [{
                        label: 'Pie Chart Data', // Dataset label
                        data: response.data.data, // Data points
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)', // Slice colors
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)', // Border colors for slices
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1 // Border width for the slices
                    }]
                };
                setChartData(processedData); // Set the processed data into state
                setLoading(false); // Stop loading spinner once data is fetched
            })
            .catch(() => {
                setError('Error fetching data'); // Handle errors during the data fetch
                setLoading(false); // Stop loading spinner even if there's an error
            });
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div className="chart-container">
            <h2 className="chart-title">Pie Chart</h2>

            {/* Show a loading spinner while data is being fetched */}
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {/* Show error message if there's an issue fetching data */}
            {error && <div>{error}</div>}

            {/* Render the Pie chart once data is ready */}
            {chartData && (
                <div style={{ width: '100%', maxWidth: '350px', margin: '0 auto' }}>
                    <Pie 
                        data={chartData} // Pass the processed data to the Pie chart
                        options={{
                            responsive: true, // Make the chart responsive
                            maintainAspectRatio: true, // Maintain aspect ratio of the chart
                            plugins: {
                                legend: {
                                    display: true, // Display the legend
                                    position: 'bottom', // Position the legend at the bottom
                                }
                            }
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default PieChart;
