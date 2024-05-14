FROM node:22.1.0-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY website/package*.json ./

# Install dependencies
RUN npm install --no-package-lock 

# Copy the entire application code to the container
COPY website/. .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

