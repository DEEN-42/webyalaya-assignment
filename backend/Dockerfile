# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files from backend directory
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy source code from backend directory
COPY backend/ .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start:prod"]
