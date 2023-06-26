# APP Build Stage
FROM node:node:lts-alpine3.18 as builder
WORKDIR /app
COPY package.json .
RUN rm -rf node_modules README.md
RUN npm ci --legacy-peer-deps
RUN  npm ci --legacy-peer-deps final-form
COPY . .
RUN npm run build

# Nginx Setup
FROM nginx:stable-alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]