import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'; 
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Register necessary components for the candlestick chart
ChartJS.register(CategoryScale, LinearScale, BarElement);

const CandlestickChart = () => {
    // State variables to manage chart data, loading state, and errors
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data from the backend API on component mount
    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/candlestick-data/')
            .then(response => {
                // Process the API response to fit Chart.js format
                const processedData = {
                    labels: response.data.data.map(item => item.x), // Extracting x-axis labels (dates)
                    datasets: [
                        {
                            label: 'Candlestick Data', // Label for the dataset
                            data: response.data.data.map(item => ({
                                x: item.x,
                                y: [item.open, item.high, item.low, item.close] // Values for the candlestick chart
                            })),
                            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
                            borderColor: 'rgba(75, 192, 192, 1)', // Border color
                            borderWidth: 1 // Border width for each candlestick
                        }
                    ]
                };
                setChartData(processedData); // Set the processed data to the state
                setLoading(false); // Stop the loading state once data is fetched
            })
            .catch(() => {
                setError('Error fetching candlestick data'); // Handle API error
                setLoading(false); // Stop loading even if there's an error
            });
    }, []); // Empty dependency array means it runs only once when the component mounts

    return (
        <div className="chart-container">
            <h2 className="chart-title">Candlestick Chart</h2>

            {/* Show loading spinner while data is being fetched */}
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {/* Display an error message if there's an error */}
            {error && <div>{error}</div>}

            {/* Render the Bar chart once the data is ready */}
            {chartData && (
                <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
                    <Bar 
                        data={chartData} // Pass chartData to the Bar chart component
                        options={{
                            maintainAspectRatio: true, // Maintain chart's aspect ratio
                            plugins: {
                                legend: {
                                    display: true, // Show legend
                                    position: 'bottom', // Position legend at the bottom
                                }
                            },
                        }}
                        height={200} // Chart height
                        width={400} // Chart width
                    />
                </div>
            )}
        </div>
    );
};

export default CandlestickChart;
