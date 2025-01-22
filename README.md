# Global Compensation Calculator

A web-based tool for calculating and comparing compensation packages across different countries, roles, and experience levels.

## Features

- Role-based compensation data for Software Engineers, Product Managers, and Designers
- Detailed level definitions and career progression paths
- Cost of living comparisons across countries
- Tax calculations and take-home pay estimates
- Company overhead calculator
- Purchasing power comparisons
- Interactive charts and visualizations

## Local Development

### Prerequisites

- Docker and Docker Compose installed on your machine
- Git for version control

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/GlobalComp.git
cd GlobalComp
```

2. Start the development server using Docker Compose:
```bash
docker-compose up -d
```

3. Access the application:
- Open your browser and navigate to `http://localhost:8080`
- The application will automatically reload when you make changes to the source files

4. Stop the development server:
```bash
docker-compose down
```

### Project Structure

```
GlobalComp/
├── app.js                 # Main application entry point
├── data.js               # Compensation and configuration data
├── index.html            # Main HTML file
├── styles.css            # Global styles
├── js/                   # JavaScript modules
│   ├── models/          # Core business logic
│   ├── charts/          # Chart configurations
│   └── utils/           # Utility functions
├── docker-compose.yml    # Docker Compose configuration
├── nginx.conf           # Nginx server configuration
└── README.md            # Project documentation
```

### Development Notes

- The application uses ES6 modules, served through Nginx
- All source files are mounted in the Docker container, enabling hot reloading
- Changes to any source files will be immediately reflected in the browser
- The Nginx server runs on port 8080 to avoid conflicts with other local services

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.