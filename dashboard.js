import CandlestickChart from '../components/CandlestickChart'; // Import the CandlestickChart component
import LineChart from '../components/LineChart'; // Import the LineChart component
import BarChart from '../components/BarChart'; // Import the BarChart component
import PieChart from '../components/PieChart'; // Import the PieChart component

// Dashboard component that contains all charts
const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Page header with a description */}
            <h1>Scroll to look at common Charts: Candlestick, Line, Bar, and Pie</h1>

            {/* Grid layout to organize the charts */}
            <div className="chart-grid">
                <CandlestickChart />  {/* Candlestick chart */}
                <LineChart />         {/* Line chart */}
                <BarChart />          {/* Bar chart */}
                <PieChart />          {/* Pie chart */}
            </div>
        </div>
    );
};

export default Dashboard;
