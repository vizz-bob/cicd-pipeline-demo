# Node.js 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /home/app

# Copy dependency files first for Docker layer caching
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Application listens on port 8080
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
