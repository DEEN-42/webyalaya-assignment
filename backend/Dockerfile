# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files (assumes build context is backend/)
COPY backend/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy package files and install only production dependencies
COPY backend/package*.json ./
RUN npm ci --omit=dev

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose port expected by the app
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start:prod"]
