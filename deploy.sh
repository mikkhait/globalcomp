#!/bin/bash

# Set your project ID
PROJECT_ID="khait-personal"
REGION="us-west1"  # or your preferred region
SERVICE_NAME="compensation-calculator"
REPOSITORY="compensation-calculator"

# Create Artifact Registry repository if it doesn't exist
gcloud artifacts repositories create $REPOSITORY \
    --repository-format=docker \
    --location=$REGION \
    --description="Repository for compensation calculator" \
    --quiet || true

# Build the container
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$SERVICE_NAME

# Deploy to Cloud Run with port configuration
gcloud run deploy $SERVICE_NAME \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --project $PROJECT_ID \
  --port 8080 \
  --allow-unauthenticated 