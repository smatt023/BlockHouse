from django.test import TestCase
from django.urls import reverse

class BarChartAPITest(TestCase):
    # Test to ensure the bar chart API returns correct data
    def test_bar_chart_data(self):
        url = reverse('bar-chart-data')  # URL for the bar chart data endpoint
        response = self.client.get(url)  # GET request to the API
        self.assertEqual(response.status_code, 200)  # Check if the status is 200 OK
        self.assertIn('labels', response.json())  # Check if 'labels' is in the response
        self.assertIn('data', response.json())  # Check if 'data' is in the response
