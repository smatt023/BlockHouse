from django.shortcuts import render

# Create views here.
# The following views are API endpoints that return hardcoded JSON data
# for different types of charts (candlestick, line, bar, pie).

from rest_framework.response import Response
from rest_framework.decorators import api_view

# Backend API view to return hardcoded candlestick chart data.
# This view listens to GET requests and returns data structured for a candlestick chart.
@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
        ]
    }
    return Response(data)

# Backend API view to return hardcoded line chart data.
# This view listens to GET requests and returns data structured for a line chart.
@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

# Backend API view to return hardcoded bar chart data.
# This view listens to GET requests and returns data structured for a bar chart.
@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

# Backend API view to return hardcoded pie chart data.
# This view listens to GET requests and returns data structured for a pie chart.
@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)
