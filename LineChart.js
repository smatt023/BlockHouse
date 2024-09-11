import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Register necessary components for the line chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

const LineChart = () => {
    // State for holding the chart data, loading, and error states
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data from the API when the component mounts
    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/line-chart-data/')
            .then(response => {
                // Process the data into the format needed for Chart.js
                const processedData = {
                    labels: response.data.labels,
                    datasets: [{
                        label: 'Line Chart Data',
                        data: response.data.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false,  // Don't fill under the line
                        tension: 0.1, // Smooth curve
                    }]
                };
                // Update the state with the chart data and stop the loading spinner
                setChartData(processedData);
                setLoading(false);
            })
            .catch(() => {
                // Set an error message if the data fetch fails
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    return (
        <div className="chart-container">
            {/* Chart title */}
            <h2 className="chart-title">Line Chart</h2>

            {/* Show a loading spinner if the data is still being fetched */}
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {/* Show an error message if there was an issue fetching the data */}
            {error && <div>{error}</div>}

            {/* Render the Line chart once the data is ready */}
            {chartData && (
                <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
                    <Line 
                        data={chartData}
                        options={{
                            maintainAspectRatio: true,  // Maintain the aspect ratio of the chart
                            plugins: {
                                legend: {
                                    display: true,  // Show the legend
                                    position: 'bottom',  // Position the legend at the bottom
                                }
                            },
                        }}
                        height={200}  // Set the height of the chart
                        width={400}   // Set the width of the chart
                    />
                </div>
            )}
        </div>
    );
};

export default LineChart;
