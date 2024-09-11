
Web Development Coding Test: Next.js Application with Django API Integration

Author: Sahithi Matta 

Overview
    This project is a full-stack web application built using Next.js on the frontend and Django on the backend. The application features a dashboard with four types of charts (Candlestick, Line, Bar, and Pie). The data for the charts is fetched dynamically from the Django API.

Features
    Displays four different types of charts: Candlestick, Line, Bar, and Pie.
    Charts are generated using the Chart.js library and dynamically populated with data fetched from the Django backend.
    Responsive design, with charts adapting to different screen sizes.
Tech Stack
    Frontend: Next.js (React.js Framework)
    Backend: Django (Python Web Framework)
    Charting Library: Chart.js
    API Calls: Axios
Setup Instructions
    Backend (Django)
    Navigate to the backend directory:
    bash
    Copy code --> cd backend

Install the required dependencies: 
    bash
    Copy code -> pip install -r requirements.txt

Run database migrations:
    bash
    Copy code-->python manage.py migrate
Start the Django development server:
    bash
    Copy code --> python manage.py runserver
Frontend (Next.js)
    Navigate to the frontend directory:
    bash
    Copy code-->cd frontend

Install the required dependencies:
    bash
    Copy code--> npm install
Start the Next.js development server:
    bash
    Copy code --> npm run dev


The frontend will be available at http://localhost:3005.
API Endpoints
The Django API exposes the following endpoints for the chart data:

    /api/candlestick-data/: Returns candlestick chart data.
    /api/line-chart-data/: Returns line chart data.
    /api/bar-chart-data/: Returns bar chart data.
    /api/pie-chart-data/: Returns pie chart data.

How It Works
    The Next.js frontend fetches data from the Django backend using Axios.
    The data is then passed to Chart.js components to render the respective charts.
    The application ensures a responsive and clean UI, with a grid layout for the charts.
Usage
    Once both the frontend and backend are running:

    Open your browser and go to http://localhost:3005/dashboard.

You should see the dashboard displaying four different charts populated with the data from the Django API.
Notes
Make sure both the frontend and backend servers are running simultaneously.
The API data is hardcoded for this test but can be easily extended to fetch dynamic data from a database or external API.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3005) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


