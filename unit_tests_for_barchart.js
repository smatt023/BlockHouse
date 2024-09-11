import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Simple BarChart component for testing
const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Fetches bar chart data from backend
        axios.get('http://127.0.0.1:8001/api/bar-chart-data/')
            .then(response => {
                const processedData = {
                    labels: response.data.labels,
                    datasets: [{
                        label: 'Sales Data',
                        data: response.data.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                };
                setChartData(processedData);
            })
            .catch(error => {
                console.error('Error fetching bar chart data:', error);
            });
    }, []);

    return chartData ? <Bar data={chartData} /> : <div>Loading...</div>;
};

export default BarChart;
