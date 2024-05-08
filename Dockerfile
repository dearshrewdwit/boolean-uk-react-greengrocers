ARG NODE_VERSION=21

# Use node image for base image for all stages.
FROM node:${NODE_VERSION} as builder

# Set working directory for all build stages.
WORKDIR /app

COPY package.json package-lock.json ./

# Download additional development dependencies before building, as some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.
RUN npm ci

# Copy the rest of the source files into the image.
COPY . .

# Run the build script.
RUN npm build

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
