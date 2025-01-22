FROM nginx:alpine

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application
COPY . /usr/share/nginx/html/

# Make port 8080 available
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 