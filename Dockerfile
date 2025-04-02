# Use the official Node.js image
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the project files
COPY . .

# Build the Vite app
RUN npm run build

# Use Nginx for serving static files
FROM nginx:alpine

# Copy built files from builder stage to Nginx's HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
