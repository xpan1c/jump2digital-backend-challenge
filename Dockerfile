# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.13.0

FROM node:${NODE_VERSION}-alpine AS builder

# Use production node environment by default.
# ENV NODE_ENV production


WORKDIR /app

COPY package*.json ./
RUN npm install
# Copy source code and build the application
COPY . .
RUN npm run build

# Stage 2: Running the application
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
FROM builder AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev


# Stage 3: Running the application
FROM node:${NODE_VERSION}-alpine
WORKDIR /app


# Copy built code, node_modules and prisma directory from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/skins.json ./skins.json
# COPY --from=builder /app/.env ./.env

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run start
