# Build stage
FROM node:latest as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Serve stage
FROM nginx:latest-alpine
COPY --from=builder /usr/src/app/dist/login-page/ /usr/share/nginx/html
