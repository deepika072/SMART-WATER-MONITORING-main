# Smart Water Quality Monitoring

A Smart Water Quality Monitoring and Treatment Plant Management Platform developed using Node.js, Express, HTML, CSS and Docker.

## Features

- Real-time water quality monitoring
- pH monitoring
- Turbidity monitoring
- Chlorine monitoring
- Temperature monitoring
- Water quality alerts
- Treatment plant management
- Chemical inventory management
- Equipment maintenance
- Distribution network monitoring

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Docker
- Docker Compose

## Project Structure

SMART-WATER-MONITORING

├── Backend
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── Frontend
│   ├── water-quality.html
│   ├── Dockerfile
│   └── style.css
│
├── docker-compose.yml
│
└── README.md

## Run Using Docker

Open the project folder in terminal.

Run:

docker compose up -d --build

Check running containers:

docker compose ps

Open the application:

http://localhost:8080

Backend API:

http://localhost:5000/api/water-quality

## Stop Containers

docker compose down
