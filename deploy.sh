#!/bin/bash

# Set your project ID
PROJECT_ID="khait-personal"
REGION="us-west1"  # or your preferred region
SERVICE_NAME="compensation-calculator"

# Build the container
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Deploy to Cloud Run with port configuration
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --project $PROJECT_ID \
  --port 8080 \
  --allow-unauthenticated 