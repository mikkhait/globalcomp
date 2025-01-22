# Global Engineering Compensation Calculator

A web-based tool for calculating and comparing software engineering compensation across different countries, including cost of living adjustments, tax implications, and company overhead costs.

## Features

- Compensation ranges for multiple countries
- Cost of living comparisons
- Customizable tax calculations
- Company overhead estimations
- Role responsibilities and impact by level
- Currency conversion
- Monthly and annual breakdowns

## Prerequisites

- Google Cloud Platform account
- Google Cloud SDK installed
- Docker installed (optional for local testing)

## Local Development

1. Clone the repository and navigate to the project directory.
2. Serve locally using Python or Node.js.
3. Open your browser and navigate to the local server.

## Deployment to Google Cloud Platform

1. Install Google Cloud SDK and initialize it.
2. Enable required APIs.
3. Update the `deploy.sh` script with your project details.
4. Run the deployment script to deploy the application to Cloud Run.

## Monitoring

Monitor your application using the Cloud Run dashboard.

## Cost Considerations

The application uses Google Cloud Run, which has a generous free tier.

## License

This project is licensed under the MIT License with additional attribution requirements. While you are free to use, modify, and distribute this software:

- You must include the original license and copyright notice
- Any modifications or derivative works must prominently display a notice stating that the work is derived from the original Global Engineering Compensation Calculator project
- See the [LICENSE](LICENSE) file for complete details

## Acknowledgments

- Compensation data sourced from various public sources.
- Cost of living data based on public indexes.
- Tax information from official government sources.