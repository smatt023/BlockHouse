from rest_framework.response import Response
from rest_framework.decorators import api_view

# Handles the response for the bar chart API.
@api_view(['GET'])
def bar_chart_data(request):
    # Simple hardcoded data for bar chart testing
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)  # Sends the data as a JSON response
