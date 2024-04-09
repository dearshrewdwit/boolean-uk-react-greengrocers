# Use a Node.js image as base
FROM node:20.11.1 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Use Nginx as a lightweight web server to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage into the Nginx container
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# # The default command to run when starting the container
# CMD ["nginx", "-g", "daemon off;"]