# Multi-stage Dockerfile for Astro static landing page template
# Stage 1: Build the static site
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN if [ -f pnpm-lock.yaml ]; then \
      npm install -g pnpm && pnpm install --frozen-lockfile; \
    else \
      npm ci --omit=dev; \
    fi

# Copy source code
COPY . .

# Build static site
RUN if [ -f pnpm-lock.yaml ]; then \
      pnpm run build; \
    else \
      npm run build; \
    fi

# Stage 2: Serve with Nginx
FROM nginx:1.25-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy built dist from builder stage
COPY --from=builder /app/dist .

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3000
EXPOSE 3000

# Use nginx user for non-root execution (already present in nginx image)
USER nginx

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:3000/ || exit 1
